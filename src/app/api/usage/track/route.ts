import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      licenseKey, 
      conversationsUsed = 1,
      conversationId,
      installationId,
      questionHash,
      responseLength,
      processingTime
    } = body as { 
      licenseKey: string;
      conversationsUsed?: number;
      conversationId?: string;
      installationId?: string;
      questionHash?: string;
      responseLength?: number;
      processingTime?: number;
    };
    
    if (!licenseKey) {
      return NextResponse.json({ error: 'License key required' }, { status: 400 });
    }

    // Note: In a real Cloudflare Pages environment, you would have access to env.HIVE_DB and env.HIVE_KV
    // @ts-ignore - env will be available in Cloudflare Pages environment
    const { HIVE_DB, HIVE_KV } = process.env;
    
    if (!HIVE_DB) {
      return NextResponse.json({ 
        error: 'Database not configured' 
      }, { status: 503 });
    }
    
    // 1. Validate license exists and is active
    // @ts-ignore - D1 database methods
    const user = await HIVE_DB.prepare(`
      SELECT id, subscription_tier, daily_limit, monthly_limit, account_status
      FROM users 
      WHERE license_key = ? AND account_status = 'active'
    `).bind(licenseKey).first();
    
    if (!user) {
      return NextResponse.json({ 
        error: 'Invalid or inactive license key' 
      }, { status: 401 });
    }
    
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = today.substring(0, 7); // YYYY-MM
    const now = new Date().toISOString();
    
    try {
      // 2. Update daily usage in usage_periods table
      // @ts-ignore - D1 database methods
      await HIVE_DB.prepare(`
        INSERT INTO usage_periods (
          id, license_key, period_type, period_key, 
          conversations_used, conversations_limit, reset_date, updated_at
        )
        VALUES (?, ?, 'daily', ?, ?, ?, ?, ?)
        ON CONFLICT(license_key, period_type, period_key) 
        DO UPDATE SET 
          conversations_used = conversations_used + ?,
          updated_at = ?
      `).bind(
        globalThis.crypto.randomUUID(),
        licenseKey,
        today,
        conversationsUsed,
        user.daily_limit || 5,
        new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Reset tomorrow
        now,
        conversationsUsed,
        now
      ).run();
      
      // 3. Update monthly usage in usage_periods table
      // @ts-ignore - D1 database methods
      await HIVE_DB.prepare(`
        INSERT INTO usage_periods (
          id, license_key, period_type, period_key, 
          conversations_used, conversations_limit, reset_date, updated_at
        )
        VALUES (?, ?, 'monthly', ?, ?, ?, ?, ?)
        ON CONFLICT(license_key, period_type, period_key) 
        DO UPDATE SET 
          conversations_used = conversations_used + ?,
          updated_at = ?
      `).bind(
        globalThis.crypto.randomUUID(),
        licenseKey,
        thisMonth,
        conversationsUsed,
        user.monthly_limit || 100,
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString(), // Reset next month
        now,
        conversationsUsed,
        now
      ).run();
      
      // 4. Log detailed conversation usage
      // @ts-ignore - D1 database methods
      await HIVE_DB.prepare(`
        INSERT INTO conversation_usage (
          id, license_key, installation_id, conversation_id, 
          conversation_token, verified, timestamp, question_hash,
          response_length, processing_time
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        globalThis.crypto.randomUUID(),
        licenseKey,
        installationId || request.headers.get('x-installation-id') || 'unknown',
        conversationId || globalThis.crypto.randomUUID(),
        globalThis.crypto.randomUUID(),
        true,
        now,
        questionHash || '',
        responseLength || 0,
        processingTime || 0
      ).run();
      
      // 5. Update monthly_usage aggregate table
      // @ts-ignore - D1 database methods
      await HIVE_DB.prepare(`
        INSERT INTO monthly_usage (user_id, year_month, conversation_count)
        VALUES (?, ?, ?)
        ON CONFLICT(user_id, year_month) 
        DO UPDATE SET conversation_count = conversation_count + ?
      `).bind(
        user.id,
        thisMonth,
        conversationsUsed,
        conversationsUsed
      ).run();
      
      // 6. Get updated usage counts
      // @ts-ignore - D1 database methods
      const dailyUsage = await HIVE_DB.prepare(`
        SELECT conversations_used, conversations_limit 
        FROM usage_periods 
        WHERE license_key = ? AND period_type = 'daily' AND period_key = ?
      `).bind(licenseKey, today).first();
      
      // @ts-ignore - D1 database methods
      const monthlyUsage = await HIVE_DB.prepare(`
        SELECT conversations_used, conversations_limit 
        FROM usage_periods 
        WHERE license_key = ? AND period_type = 'monthly' AND period_key = ?
      `).bind(licenseKey, thisMonth).first();
      
      const result = {
        success: true,
        usage: {
          daily: {
            used: dailyUsage?.conversations_used || conversationsUsed,
            limit: dailyUsage?.conversations_limit || user.daily_limit || 5,
            remaining: Math.max(0, (dailyUsage?.conversations_limit || user.daily_limit || 5) - (dailyUsage?.conversations_used || conversationsUsed))
          },
          monthly: {
            used: monthlyUsage?.conversations_used || conversationsUsed,
            limit: monthlyUsage?.conversations_limit || user.monthly_limit || 100,
            remaining: Math.max(0, (monthlyUsage?.conversations_limit || user.monthly_limit || 100) - (monthlyUsage?.conversations_used || conversationsUsed))
          }
        },
        timestamp: now
      };
      
      // 7. Update KV cache if available
      if (HIVE_KV) {
        try {
          const cacheKey = `usage:${user.id}:${today}`;
          // @ts-ignore - KV namespace methods
          await HIVE_KV.put(cacheKey, JSON.stringify({
            conversationsUsed: result.usage.daily.used,
            conversationsRemaining: result.usage.daily.remaining,
            lastUpdated: now
          }), {
            expirationTtl: 86400 // 24 hour cache
          });
        } catch (error) {
          console.log('KV cache update error:', error);
        }
      }
      
      return NextResponse.json(result);
      
    } catch (dbError) {
      console.error('Database operation error:', dbError);
      return NextResponse.json({ 
        error: 'Failed to update usage' 
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Usage tracking error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

// Allow CORS for CLI access
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-installation-id, x-conversation-id',
    },
  });
}