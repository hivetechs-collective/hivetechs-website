import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('🚀 Hello API called');
    
    return NextResponse.json({
      success: true,
      message: 'Hello from Cloudflare Pages!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Hello API error:', error);
    return NextResponse.json({
      success: false,
      error: String(error)
    }, { status: 500 });
  }
}