import { NextResponse } from 'next/server'

export const runtime = 'edge';

// Test creating a single product
export async function GET() {
  try {
    const response = await fetch('https://api.paddle.com/products', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test Product',
        description: 'Test product creation',
        tax_category: 'saas'
      })
    })

    const responseText = await response.text()
    console.log('Raw response:', responseText)

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        status: response.status,
        error: responseText
      }, { status: response.status })
    }

    const data = JSON.parse(responseText)
    
    return NextResponse.json({
      success: true,
      product: data,
      message: 'Test product created successfully'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}