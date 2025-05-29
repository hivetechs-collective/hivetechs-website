import { NextRequest, NextResponse } from 'next/server'
import { Database } from '@/lib/database'


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
    const body = await request.json();
    const { licenseKey } = body as { licenseKey: string };
    
    if (!licenseKey) {
      return NextResponse.json({ error: 'License key required' }, { status: 400 });
    }

    // Environment will be undefined in Node.js runtime
    const env: any = undefined;
    
    // Initialize database (works in both Cloudflare Pages and local dev)
    const db = new Database(env);
    
    // Get user by license key
    const user = await db.getUserByLicenseKey(licenseKey);
    console.log('🔍 License validation:', { licenseKey, user });
    
    if (!user || user.account_status !== 'active') {
      return NextResponse.json({ valid: false, error: 'Invalid or inactive license key' }, { status: 401 });
    }
    
    // Get tier limits
    const tierLimits = getTierLimits(user.subscription_tier);
    const dailyLimit = user.daily_limit || tierLimits.daily;
    const monthlyLimit = user.monthly_limit || tierLimits.monthly;
    
    // Get usage counts
    const dailyUsed = await db.getUserUsageCount(user.id, 'daily');
    const monthlyUsed = await db.getUserUsageCount(user.id, 'monthly');
    
    // Prepare response
    const result = {
      valid: true,
      userId: user.id,
      email: user.email,
      tier: user.subscription_tier,
      dailyLimit,
      monthlyLimit,
      dailyUsed,
      monthlyUsed,
      dailyRemaining: Math.max(0, dailyLimit - dailyUsed),
      monthlyRemaining: Math.max(0, monthlyLimit - monthlyUsed),
      trialActive: false, // TODO: Implement trial logic if needed
      maxDevices: user.max_devices || 2
    };
    
    return NextResponse.json(result);
    
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