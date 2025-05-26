import { NextRequest, NextResponse } from 'next/server'
import { paddleAPI } from '@/lib/paddle/api'

export const runtime = 'edge';

// Feature flag to switch between Paddle and Gumroad
const USE_PADDLE = process.env.USE_PADDLE === 'true'

export async function POST(request: NextRequest) {
  try {
    const { plan, email } = await request.json()

    // Use Paddle if enabled
    if (USE_PADDLE) {
      return handlePaddleCheckout(plan, email, request)
    }
    
    // Otherwise use Gumroad (existing logic)
    return handleGumroadCheckout(plan, request)
  } catch (error) {
    console.error('Checkout creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    )
  }
}

async function handlePaddleCheckout(plan: string, email: string | undefined, request: NextRequest) {
  // Map plan names to Paddle price IDs
  const priceMap: Record<string, string> = {
    'free': process.env.PADDLE_PRODUCT_FREE || '',
    'basic': process.env.PADDLE_PRODUCT_BASIC || '',
    'standard': process.env.PADDLE_PRODUCT_STANDARD || '',
    'premium': process.env.PADDLE_PRODUCT_PREMIUM || '',
    'team': process.env.PADDLE_PRODUCT_TEAM || '',
  }

  const priceId = priceMap[plan]
  if (!priceId) {
    return NextResponse.json(
      { error: 'Invalid plan' },
      { status: 400 }
    )
  }

  // Create Paddle checkout session
  const baseUrl = request.headers.get('origin') || 'https://hivetechs.io'
  const checkout = await paddleAPI.createCheckout({
    items: [{ priceId, quantity: 1 }],
    customerEmail: email,
    successUrl: `${baseUrl}/thank-you`,
    customData: { plan },
  })

  return NextResponse.json({ 
    checkoutUrl: checkout.data.checkout_url,
    provider: 'paddle' 
  })
}

async function handleGumroadCheckout(plan: string, request: NextRequest) {
  // Map plan names to Gumroad product IDs
  const productMap: Record<string, string> = {
    'basic': 'basic-plan',
    'standard': 'standard-plan',
    'premium': 'premium-plan',
    'team': 'team-plan',
  }

  const productId = productMap[plan]
  if (!productId) {
    return NextResponse.json(
      { error: 'Invalid plan' },
      { status: 400 }
    )
  }

  // Get the base URL for redirect
  const baseUrl = request.headers.get('origin') || 'https://hivetechs.io'
  const redirectUrl = `${baseUrl}/thank-you`
  
  // Create checkout URL with redirect parameter
  const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true&redirect_url=${encodeURIComponent(redirectUrl)}`

  return NextResponse.json({ 
    checkoutUrl,
    provider: 'gumroad' 
  })
}