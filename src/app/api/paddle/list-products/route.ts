import { NextResponse } from 'next/server'


// List all existing products in Paddle
export async function GET() {
  try {
    const response = await fetch('https://api.paddle.com/products?status=active', {
      headers: {
        'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to list products: ${error}`)
    }

    const data = await response.json()
    
    // Also get prices for each product
    const productsWithPrices = await Promise.all(
      (data as any).data.map(async (product: any) => {
        const priceResponse = await fetch(`https://api.paddle.com/prices?product_id=${product.id}`, {
          headers: {
            'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        })
        
        const priceData = await priceResponse.json()
        
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          prices: (priceData as any).data?.map((price: any) => ({
            id: price.id,
            amount: price.unit_price.amount,
            currency: price.unit_price.currency_code,
            interval: price.billing_cycle?.interval,
          }))
        }
      })
    )
    
    return NextResponse.json({
      success: true,
      products: productsWithPrices,
      count: productsWithPrices.length
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to list products'
    }, { status: 500 })
  }
}