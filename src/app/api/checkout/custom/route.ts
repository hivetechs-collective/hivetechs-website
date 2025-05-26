import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { plan, email, payment } = await request.json()

    // Map plan to price ID (these will be set after running setup)
    const priceMap: Record<string, string> = {
      'basic': process.env.PADDLE_PRICE_BASIC || '',
      'standard': process.env.PADDLE_PRICE_STANDARD || '',
      'premium': process.env.PADDLE_PRICE_PREMIUM || '',
      'team': process.env.PADDLE_PRICE_TEAM || '',
    }

    const priceId = priceMap[plan]
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    // Create a transaction with Paddle API
    const response = await fetch('https://api.paddle.com/transactions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          price_id: priceId,
          quantity: 1
        }],
        customer: {
          email: email
        },
        billing_details: {
          payment_method: {
            type: 'card',
            card: {
              number: payment.cardNumber,
              expiry_month: payment.expiry.split('/')[0],
              expiry_year: '20' + payment.expiry.split('/')[1],
              security_code: payment.cvv
            }
          }
        },
        checkout: {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`
        }
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Paddle transaction error:', error)
      return NextResponse.json(
        { error: error.error?.detail || 'Payment failed' },
        { status: 400 }
      )
    }

    const transaction = await response.json()

    // Return transaction details
    return NextResponse.json({
      success: true,
      transactionId: transaction.data.id,
      subscriptionId: transaction.data.subscription_id,
      status: transaction.data.status
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    )
  }
}