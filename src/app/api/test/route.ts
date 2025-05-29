import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

export async function GET() {
  try {
    console.log('🧪 Test API called');
    
    // Test environment access with @opennextjs/cloudflare
    let env: any = undefined;
    let envStatus = 'not-found';
    
    try {
      // Access Cloudflare bindings through the new adapter in async mode
      const { env: cloudflareEnv } = await getCloudflareContext({ async: true });
      env = cloudflareEnv;
      envStatus = (env?.HIVE_DB || env?.HIVE_KV) ? 'found' : 'not-found';
      
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
}
