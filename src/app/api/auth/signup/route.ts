import { NextRequest, NextResponse } from 'next/server'
import { Database, generateLicenseKey, type User } from '@/lib/database'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'; // Works in both Cloudflare Pages and local dev

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    console.log('🆕 Creating free account for:', email);

    // Get Cloudflare environment context properly
    let env: any = undefined;
    try {
      const context = getRequestContext();
      env = context?.env;
    } catch (e) {
      // Running in local dev, env will be undefined
    }
    
    // Initialize database (works in both Cloudflare Pages and local dev)
    const db = new Database(env);
    
    // Check if user already exists
    const existingUser = await db.getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: 'Account already exists' }, { status: 409 });
    }

    // Create new user
    const licenseKey = generateLicenseKey();
    const userId = globalThis.crypto.randomUUID();
    
    const newUser: User = {
      id: userId,
      email: email,
      name: name || '',
      license_key: licenseKey,
      subscription_tier: 'free',
      daily_limit: 5,
      monthly_limit: 100,
      account_status: 'active',
      created_at: new Date().toISOString(),
      max_devices: 2
    };

    await db.createUser(newUser);

    console.log('✅ Free account created:', {
      email: newUser.email,
      license_key: newUser.license_key,
      tier: newUser.subscription_tier
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        license_key: newUser.license_key,
        subscription_tier: newUser.subscription_tier,
        daily_limit: newUser.daily_limit,
        monthly_limit: newUser.monthly_limit
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}

// Allow CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}