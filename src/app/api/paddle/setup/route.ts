import { NextResponse } from 'next/server'


// This endpoint creates all your products in Paddle programmatically
export async function POST() {
  try {
    const apiUrl = 'https://api.paddle.com'
    const headers = {
      'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
      'Content-Type': 'application/json',
    }

    // First, check existing products
    const existingResponse = await fetch(`${apiUrl}/products`, {
      headers
    })
    const existingData = await existingResponse.json()
    const existingProducts = (existingData as any).data || []
    
    console.log('Existing products:', existingProducts.map((p: any) => p.name))

    // Define all products
    const products = [
      {
        name: 'hive-tools Basic',
        description: 'Basic plan with 50 daily conversations',
        type: 'subscription',
        tax_category: 'saas',
        custom_data: { tier: 'basic' }
      },
      {
        name: 'hive-tools Standard',
        description: 'Standard plan with 100 daily conversations',
        type: 'subscription',
        tax_category: 'saas',
        custom_data: { tier: 'standard' }
      },
      {
        name: 'hive-tools Premium',
        description: 'Premium plan with 200 daily conversations',
        type: 'subscription',
        tax_category: 'saas',
        custom_data: { tier: 'premium' }
      },
      {
        name: 'hive-tools Team',
        description: 'Team plan with 600 shared daily conversations',
        type: 'subscription',
        tax_category: 'saas',
        custom_data: { tier: 'team' }
      },
      {
        name: 'hive-tools Credits Pack - 25',
        description: '25 additional conversation credits',
        type: 'one_time',
        tax_category: 'saas',
        custom_data: { credits: 25 }
      },
      {
        name: 'hive-tools Credits Pack - 75',
        description: '75 additional conversation credits',
        type: 'one_time',
        tax_category: 'saas',
        custom_data: { credits: 75 }
      },
      {
        name: 'hive-tools Credits Pack - 200',
        description: '200 additional conversation credits',
        type: 'one_time',
        tax_category: 'saas',
        custom_data: { credits: 200 }
      }
    ]

    const createdProducts = []

    // Create each product
    for (const product of products) {
      // Check if product already exists
      const existing = existingProducts.find((p: any) => p.name === product.name)
      if (existing) {
        console.log(`Product ${product.name} already exists with ID: ${existing.id}`)
        createdProducts.push({
          name: product.name,
          id: existing.id,
          type: existing.type || product.type
        })
        continue
      }

      const response = await fetch(`${apiUrl}/products`, {
        method: 'POST',
        headers,
        body: JSON.stringify(product)
      })

      if (!response.ok) {
        const error = await response.text()
        console.error(`Failed to create product ${product.name}:`, error)
        continue
      }

      const data = await response.json()
      console.log(`Created product ${product.name}:`, data)
      createdProducts.push({
        name: product.name,
        id: (data as any).data?.id || (data as any).id,
        type: product.type
      })
    }

    // Now create prices for each product
    const prices = [
      { productName: 'hive-tools Basic', amount: '500', interval: 'month' },
      { productName: 'hive-tools Standard', amount: '1000', interval: 'month' },
      { productName: 'hive-tools Premium', amount: '2000', interval: 'month' },
      { productName: 'hive-tools Team', amount: '5000', interval: 'month' },
      { productName: 'hive-tools Credits Pack - 25', amount: '300' },
      { productName: 'hive-tools Credits Pack - 75', amount: '700' },
      { productName: 'hive-tools Credits Pack - 200', amount: '1500' }
    ]

    const createdPrices = []

    for (const price of prices) {
      const product = createdProducts.find(p => p.name === price.productName)
      if (!product) continue

      const priceData: any = {
        product_id: product.id,
        amount: price.amount,
        currency: 'USD',
        name: price.productName + ' Price'
      }

      if (price.interval) {
        priceData.interval = price.interval
        priceData.trial_period_days = 7
      }

      const response = await fetch(`${apiUrl}/prices`, {
        method: 'POST',
        headers,
        body: JSON.stringify(priceData)
      })

      if (!response.ok) {
        const error = await response.text()
        console.error(`Failed to create price for ${price.productName}:`, error)
        continue
      }

      const data = await response.json()
      createdPrices.push({
        productName: price.productName,
        priceId: data.data.id,
        amount: price.amount
      })
    }

    return NextResponse.json({
      success: true,
      products: createdProducts,
      prices: createdPrices,
      message: 'Products and prices created successfully. Update your .env.local with these IDs.'
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}