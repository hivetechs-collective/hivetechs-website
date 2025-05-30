import { NextRequest, NextResponse } from 'next/server'
import { Database } from '@/lib/database'

const creditPacks = {
  '25': { credits: 25, price: 3 },
  '75': { credits: 75, price: 7 },
  '200': { credits: 200, price: 15 },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pack, email, payment } = body as { pack: string; email: string; payment: any }

    // Validate pack
    const packDetails = creditPacks[pack as keyof typeof creditPacks]
    if (!packDetails) {
      return NextResponse.json({ error: 'Invalid credit pack' }, { status: 400 })
    }

    // DEMO MODE: Check if using test card
    if (payment.cardNumber === '4242424242424242') {
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real implementation, we would:
      // 1. Create/update user in database
      // 2. Add credits to their balance
      // 3. Create a credit transaction record
      
      // For demo, just return success
      return NextResponse.json({
        success: true,
        transactionId: 'demo_credit_txn_' + Date.now(),
        credits: packDetails.credits,
        message: `${packDetails.credits} credits added to your account`
      })
    }

    // Check if Paddle is configured
    if (!process.env.PADDLE_API_KEY) {
      return NextResponse.json(
        { error: 'Payment processing not configured. Please use test card 4242 4242 4242 4242' },
        { status: 400 }
      )
    }

    // Create a one-time transaction with Paddle API
    const response = await fetch('https://api.paddle.com/transactions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          price: {
            description: `${packDetails.credits} Conversation Credits`,
            unit_price: {
              amount: String(packDetails.price * 100), // Convert to cents
              currency_code: 'USD'
            },
            product: {
              name: `${packDetails.credits} Credit Pack`,
              description: `${packDetails.credits} additional conversations that never expire`,
              tax_category: 'standard'
            }
          },
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
        custom_data: {
          type: 'credit_purchase',
          credits: packDetails.credits
        }
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Paddle transaction error:', error)
      return NextResponse.json(
        { error: (error as any).error?.detail || 'Payment failed' },
        { status: 400 }
      )
    }

    const transaction = await response.json()

    // In production, the webhook would handle adding credits
    // For now, return success
    return NextResponse.json({
      success: true,
      transactionId: (transaction as any).data.id,
      credits: packDetails.credits,
      message: `${packDetails.credits} credits will be added to your account`
    })

  } catch (error) {
    console.error('Credit checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    )
  }
}