import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET() {
  try {
    console.log('🧪 Test API called');
    
    // Test environment access without @cloudflare/next-on-pages
    let env: any = undefined;
    let envStatus = 'not-found';
    
    try {
      // In Cloudflare Pages edge runtime, bindings should be available on process.env
      // or through the globalThis object
      env = {
        HIVE_DB: (globalThis as any).HIVE_DB || process.env.HIVE_DB,
        HIVE_KV: (globalThis as any).HIVE_KV || process.env.HIVE_KV,
        PADDLE_ENVIRONMENT: process.env.PADDLE_ENVIRONMENT
      };
      envStatus = (env.HIVE_DB || env.HIVE_KV) ? 'found' : 'not-found';
      
      console.log('🌍 Environment test:', {
        envExists: !!env,
        hasD1: !!env?.HIVE_DB,
        hasKV: !!env?.HIVE_KV,
        paddleEnv: env?.PADDLE_ENVIRONMENT
      });
    } catch (e) {
      envStatus = 'error';
      console.log('🌍 Environment error:', e);
    }

    // Test crypto
    let cryptoStatus = 'not-available';
    try {
      const testId = globalThis.crypto.randomUUID();
      cryptoStatus = 'available';
      console.log('🔐 Crypto test:', testId);
    } catch (e) {
      console.log('🔐 Crypto error:', e);
    }

    const result = {
      success: true,
      timestamp: new Date().toISOString(),
      environment: envStatus,
      crypto: cryptoStatus,
      bindings: {
        d1Available: !!env?.HIVE_DB,
        kvAvailable: !!env?.HIVE_KV,
        envVars: env?.PADDLE_ENVIRONMENT || 'not-set'
      }
    };

    console.log('✅ Test completed:', result);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('💥 Test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}// Trigger deployment
