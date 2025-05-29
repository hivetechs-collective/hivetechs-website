import { NextRequest, NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge';

export async function GET() {
  try {
    console.log('🧪 Test API called');
    
    // Test environment access
    let env: any = undefined;
    let envStatus = 'not-found';
    
    try {
      const context = getRequestContext();
      env = context?.env;
      envStatus = env ? 'found' : 'context-but-no-env';
      
      console.log('🌍 Environment test:', {
        contextExists: !!context,
        envExists: !!env,
        envKeys: env ? Object.keys(env) : [],
        hasD1: !!env?.HIVE_DB,
        hasKV: !!env?.HIVE_KV
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
}