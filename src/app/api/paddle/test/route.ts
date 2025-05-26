import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET() {
  try {
    // Test Paddle API connection
    const response = await fetch('https://api.paddle.com/products', {
      headers: {
        'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`API Error: ${response.status} - ${error}`)
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      message: 'Paddle API connection successful',
      vendorId: process.env.PADDLE_VENDOR_ID,
      environment: process.env.PADDLE_SANDBOX === 'true' ? 'sandbox' : 'production',
      productCount: data.data?.length || 0,
      products: data.data || []
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}