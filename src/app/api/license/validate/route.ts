import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge';

// Helper function to get tier limits
function getTierLimits(tier: string) {
  const limits = {
    'free': { daily: 5, monthly: 100 },
    'basic': { daily: 50, monthly: 1000 },
    'standard': { daily: 100, monthly: 2000 },
    'premium': { daily: 200, monthly: 4000 },
    'team': { daily: 600, monthly: 12000 }
  };
  return limits[tier as keyof typeof limits] || limits.free;
}

export async function POST(request: NextRequest) {
  try {
    const { licenseKey } = await request.json();
    
    if (!licenseKey) {
      return NextResponse.json({ error: 'License key required' }, { status: 400 });
    }

    // Note: In a real Cloudflare Pages environment, you would have access to env.HIVE_DB and env.HIVE_KV
    // For now, this is a template that will work when deployed to Cloudflare Pages
    
    // @ts-ignore - env will be available in Cloudflare Pages environment
    const { HIVE_DB, HIVE_KV } = process.env;
    
    // 1. Check KV cache first (ultra-fast) - if available
    if (HIVE_KV) {
      try {
        // @ts-ignore - KV namespace methods
        const cached = await HIVE_KV.get(`license:${licenseKey}`);
        if (cached) {
          return NextResponse.json(JSON.parse(cached));
        }
      } catch (error) {
        console.log('KV cache miss or error:', error);
      }
    }
    
    // 2. Query existing users table from D1 database - if available
    if (HIVE_DB) {
      try {
        // @ts-ignore - D1 database methods
        const user = await HIVE_DB.prepare(`
          SELECT u.*, 
                 COALESCE(up_daily.conversations_used, 0) as daily_conversations_used,
                 COALESCE(up_monthly.conversations_used, 0) as monthly_conversations_used
          FROM users u
          LEFT JOIN usage_periods up_daily ON u.license_key = up_daily.license_key 
            AND up_daily.period_type = 'daily' 
            AND up_daily.period_key = DATE('now')
          LEFT JOIN usage_periods up_monthly ON u.license_key = up_monthly.license_key 
            AND up_monthly.period_type = 'monthly' 
            AND up_monthly.period_key = strftime('%Y-%m', 'now')
          WHERE u.license_key = ? AND u.account_status = 'active'
        `).bind(licenseKey).first();
        
        if (!user) {
          return NextResponse.json({ valid: false, error: 'Invalid license key' }, { status: 401 });
        }
        
        // Get tier limits
        const tierLimits = getTierLimits(user.subscription_tier);
        const dailyLimit = user.daily_limit || tierLimits.daily;
        const monthlyLimit = user.monthly_limit || tierLimits.monthly;
        
        // Prepare response
        const result = {
          valid: true,
          userId: user.id,
          email: user.email,
          tier: user.subscription_tier,
          dailyLimit,
          monthlyLimit,
          dailyUsed: user.daily_conversations_used || 0,
          monthlyUsed: user.monthly_conversations_used || 0,
          dailyRemaining: Math.max(0, dailyLimit - (user.daily_conversations_used || 0)),
          monthlyRemaining: Math.max(0, monthlyLimit - (user.monthly_conversations_used || 0)),
          trialActive: user.trial_end_date ? new Date(user.trial_end_date) > new Date() : false,
          maxDevices: user.max_devices || 2
        };
        
        // 3. Cache result in KV for next time - if available
        if (HIVE_KV) {
          try {
            // @ts-ignore - KV namespace methods
            await HIVE_KV.put(`license:${licenseKey}`, JSON.stringify(result), {
              expirationTtl: 3600 // 1 hour cache
            });
          } catch (error) {
            console.log('KV cache write error:', error);
          }
        }
        
        return NextResponse.json(result);
        
      } catch (error) {
        console.error('Database query error:', error);
        return NextResponse.json({ 
          valid: false, 
          error: 'Database error' 
        }, { status: 500 });
      }
    }
    
    // Fallback for development/testing
    return NextResponse.json({ 
      valid: false, 
      error: 'Database not configured' 
    }, { status: 503 });
    
  } catch (error) {
    console.error('License validation error:', error);
    return NextResponse.json({ 
      valid: false, 
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
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}