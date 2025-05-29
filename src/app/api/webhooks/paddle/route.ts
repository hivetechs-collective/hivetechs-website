import { NextRequest, NextResponse } from 'next/server'
import { paddleAPI } from '@/lib/paddle/api'
import { PaddleWebhookEvent } from '@/lib/paddle/types'

export const runtime = 'edge';

// Helper function to generate license key
function generateLicenseKey(): string {
  const segments = [];
  for (let i = 0; i < 4; i++) {
    const segment = crypto.getRandomValues(new Uint8Array(2))
      .reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '')
      .toUpperCase();
    segments.push(segment);
  }
  return `HIVE-${segments.join('-')}`;
}

// Helper function to map Paddle plan ID to tier
function mapPaddlePlanToTier(paddlePriceId: string): string {
  // Map your Paddle price IDs to tiers
  const priceToTierMap: Record<string, string> = {
    'pri_basic_monthly': 'basic',
    'pri_standard_monthly': 'standard', 
    'pri_premium_monthly': 'premium',
    'pri_team_monthly': 'team',
    // Add your actual Paddle price IDs here
  };
  
  return priceToTierMap[paddlePriceId] || 'basic';
}

// Helper function to get tier limits
function getTierLimits(tier: string) {
  const limits = {
    'free': { daily: 5, monthly: 100 },
    'basic': { daily: 50, monthly: 1000 },
    'standard': { daily: 100, monthly: 2000 },
    'premium': { daily: 200, monthly: 4000 },
    'team': { daily: 600, monthly: 12000 }
  };
  return limits[tier as keyof typeof limits] || limits.free;
}

// Helper function to send welcome email
async function sendWelcomeEmail(email: string, licenseKey: string, tier: string) {
  try {
    // TODO: Implement email sending using your email service (Resend, SendGrid, etc.)
    console.log(`Sending welcome email to ${email} with license ${licenseKey} for tier ${tier}`);
    
    // This would be your actual email sending logic
    // const emailService = new EmailService();
    // await emailService.sendWelcomeEmail(email, licenseKey, tier);
    
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}

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
  const customer = subscription.customer
  console.log('New subscription created:', subscription.id)
  
  try {
    // @ts-ignore - env will be available in Cloudflare Pages environment
    const { HIVE_DB, HIVE_KV } = process.env;
    
    if (!HIVE_DB) {
      console.error('Database not configured');
      return;
    }
    
    // Generate license key
    const licenseKey = generateLicenseKey();
    const tier = mapPaddlePlanToTier(subscription.items[0].price.id);
    const limits = getTierLimits(tier);
    
    // Log event to existing subscription_events table
    // @ts-ignore - D1 database methods
    await HIVE_DB.prepare(`
      INSERT INTO subscription_events (user_id, event_type, event_data)
      VALUES (?, ?, ?)
    `).bind(
      customer.id,
      `paddle.subscription.created`,
      JSON.stringify(event)
    ).run();
    
    // Create or update user in existing users table
    // @ts-ignore - D1 database methods
    await HIVE_DB.prepare(`
      INSERT INTO users (
        id, email, name, paddle_customer_id, paddle_subscription_id, 
        license_key, subscription_tier, daily_limit, monthly_limit, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(email) 
      DO UPDATE SET 
        paddle_customer_id = excluded.paddle_customer_id,
        paddle_subscription_id = excluded.paddle_subscription_id,
        license_key = excluded.license_key,
        subscription_tier = excluded.subscription_tier,
        daily_limit = excluded.daily_limit,
        monthly_limit = excluded.monthly_limit
    `).bind(
      crypto.randomUUID(),
      customer.email,
      customer.name || '',
      customer.id,
      subscription.id,
      licenseKey,
      tier,
      limits.daily,
      limits.monthly,
      new Date().toISOString()
    ).run();
    
    // Cache license in KV if available
    if (HIVE_KV) {
      try {
        // @ts-ignore - KV namespace methods
        await HIVE_KV.put(`license:${licenseKey}`, JSON.stringify({
          valid: true,
          userId: customer.id,
          tier: tier,
          dailyLimit: limits.daily,
          monthlyLimit: limits.monthly
        }), {
          expirationTtl: 3600 // 1 hour cache
        });
      } catch (error) {
        console.log('KV cache error:', error);
      }
    }
    
    // Send welcome email with license key
    await sendWelcomeEmail(customer.email, licenseKey, tier);
    
    console.log(`Subscription created successfully for ${customer.email} with license ${licenseKey}`);
    
  } catch (error) {
    console.error('Error handling subscription creation:', error);
  }
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