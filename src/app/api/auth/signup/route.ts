import { NextRequest, NextResponse } from 'next/server'
import { Database, generateLicenseKey, type User } from '@/lib/database'

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    console.log('📥 Signup API called');
    
    const body = await request.json();
    const { email, name } = body as { email: string; name?: string };
    
    console.log('📧 Request data:', { email, name: name || 'not provided' });
    
    if (!email) {
      console.log('❌ Email missing');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    console.log('🆕 Creating free account for:', email);

    // Access Cloudflare bindings in edge runtime
    console.log('🌍 Using edge runtime - attempting to access bindings');
    const env = {
      HIVE_DB: (globalThis as any).HIVE_DB || process.env.HIVE_DB,
      HIVE_KV: (globalThis as any).HIVE_KV || process.env.HIVE_KV
    };
    console.log('🌍 Environment bindings:', { hasD1: !!env.HIVE_DB, hasKV: !!env.HIVE_KV });
    
    // Initialize database (works in both Cloudflare Pages and local dev)
    console.log('🗄️ Initializing database...');
    const db = new Database(env);
    console.log('✅ Database initialized');
    
    // Check if user already exists
    console.log('🔍 Checking if user exists...');
    const existingUser = await db.getUserByEmail(email);
    console.log('🔍 User check result:', existingUser ? 'User exists' : 'User not found');
    
    if (existingUser) {
      console.log('❌ Account already exists for:', email);
      return NextResponse.json({ error: 'Account already exists' }, { status: 409 });
    }

    // Create new user
    console.log('🔑 Generating license key...');
    const licenseKey = generateLicenseKey();
    const userId = globalThis.crypto.randomUUID();
    console.log('🔑 Generated:', { userId, licenseKey });
    
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

    console.log('💾 Creating user in database...');
    await db.createUser(newUser);
    console.log('💾 User created successfully');

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
    console.error('💥 Signup error details:', error);
    console.error('💥 Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('💥 Error message:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        error: 'Failed to create account',
        details: error instanceof Error ? error.message : String(error)
      },
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