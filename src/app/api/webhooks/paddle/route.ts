import { NextRequest, NextResponse } from 'next/server'
import { paddleAPI } from '@/lib/paddle/api'
import { PaddleWebhookEvent } from '@/lib/paddle/types'

export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await request.text()
    const signature = request.headers.get('paddle-signature') || ''
    
    // Verify webhook signature
    if (!paddleAPI.verifyWebhookSignature(body, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Parse the webhook event
    const event: PaddleWebhookEvent = JSON.parse(body)
    
    console.log(`Processing Paddle webhook: ${event.type}`, event.id)

    // Handle different event types
    switch (event.type) {
      case 'subscription.created':
        await handleSubscriptionCreated(event)
        break
        
      case 'subscription.updated':
        await handleSubscriptionUpdated(event)
        break
        
      case 'subscription.cancelled':
        await handleSubscriptionCancelled(event)
        break
        
      case 'subscription.payment_succeeded':
        await handlePaymentSucceeded(event)
        break
        
      case 'subscription.payment_failed':
        await handlePaymentFailed(event)
        break
        
      case 'transaction.completed':
        await handleTransactionCompleted(event)
        break
        
      case 'transaction.refunded':
        await handleTransactionRefunded(event)
        break
        
      default:
        console.log(`Unhandled webhook type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSubscriptionCreated(event: PaddleWebhookEvent) {
  const subscription = event.data
  console.log('New subscription created:', subscription.id)
  
  // TODO: 
  // 1. Create or update customer record in database
  // 2. Provision access to the service
  // 3. Send welcome email
}

async function handleSubscriptionUpdated(event: PaddleWebhookEvent) {
  const subscription = event.data
  console.log('Subscription updated:', subscription.id)
  
  // TODO:
  // 1. Update customer record
  // 2. Adjust service access based on new plan
  // 3. Send confirmation email
}

async function handleSubscriptionCancelled(event: PaddleWebhookEvent) {
  const subscription = event.data
  console.log('Subscription cancelled:', subscription.id)
  
  // TODO:
  // 1. Update customer record
  // 2. Schedule access removal for end of billing period
  // 3. Send cancellation confirmation
}

async function handlePaymentSucceeded(event: PaddleWebhookEvent) {
  const payment = event.data
  console.log('Payment succeeded:', payment.id)
  
  // TODO:
  // 1. Update customer payment status
  // 2. Extend service access
  // 3. Send payment receipt
}

async function handlePaymentFailed(event: PaddleWebhookEvent) {
  const payment = event.data
  console.log('Payment failed:', payment.id)
  
  // TODO:
  // 1. Update customer payment status
  // 2. Send payment failure notification
  // 3. Implement retry logic or grace period
}

async function handleTransactionCompleted(event: PaddleWebhookEvent) {
  const transaction = event.data
  console.log('Transaction completed:', transaction.id)
  
  // TODO:
  // 1. Process one-time purchase (credit packs)
  // 2. Add credits to customer account
  // 3. Send purchase confirmation
}

async function handleTransactionRefunded(event: PaddleWebhookEvent) {
  const transaction = event.data
  console.log('Transaction refunded:', transaction.id)
  
  // TODO:
  // 1. Remove credits or access
  // 2. Update customer record
  // 3. Send refund confirmation
}