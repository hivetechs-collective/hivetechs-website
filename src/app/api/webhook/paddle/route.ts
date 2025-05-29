import { NextRequest, NextResponse } from 'next/server'
import { Database, generateLicenseKey, type User } from '@/lib/database'


// Paddle webhook event types we care about
type PaddleEventType = 
  | 'subscription.created'
  | 'subscription.updated' 
  | 'subscription.cancelled'
  | 'subscription.paused'
  | 'subscription.resumed'
  | 'transaction.completed'
  | 'customer.created'
  | 'customer.updated';

interface PaddleWebhookEvent {
  event_id: string;
  event_type: PaddleEventType;
  occurred_at: string;
  data: {
    id: string;
    customer_id?: string;
    customer?: {
      id: string;
      email: string;
      name?: string;
    };
    items?: Array<{
      price_id: string;
      price?: {
        id: string;
        product_id: string;
        description?: string;
        unit_price: {
          amount: string;
          currency_code: string;
        };
      };
      quantity: number;
    }>;
    status?: string;
    current_billing_period?: {
      starts_at: string;
      ends_at: string;
    };
    subscription_id?: string;
    custom_data?: {
      user_id?: string;
      license_key?: string;
    };
  };
}

// Map Paddle price IDs to our subscription tiers
const PRICE_TO_TIER_MAP: Record<string, { tier: 'free' | 'basic' | 'standard' | 'premium' | 'team', daily: number, monthly: number, devices: number }> = {
  // These will be replaced with actual Paddle price IDs
  'pri_01hxyz123': { tier: 'standard', daily: 100, monthly: 2000, devices: 5 },
  'pri_01hxyz456': { tier: 'premium', daily: 200, monthly: 4000, devices: 10 },
  'pri_01hxyz789': { tier: 'team', daily: 600, monthly: 12000, devices: -1 }, // -1 means unlimited
};

// Verify Paddle webhook signature
async function verifyPaddleWebhook(request: NextRequest, body: string): Promise<boolean> {
  const signature = request.headers.get('paddle-signature');
  if (!signature) return false;

  // In production, you'd verify the signature using Paddle's public key
  // For now, we'll accept all webhooks in development
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  // TODO: Implement proper Paddle webhook signature verification
  // See: https://developer.paddle.com/webhooks/signature-verification
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    
    // Verify webhook signature
    const isValid = await verifyPaddleWebhook(request, body);
    if (!isValid) {
      console.error('❌ Invalid Paddle webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event: PaddleWebhookEvent = JSON.parse(body);
    console.log(`📨 Received Paddle webhook: ${event.event_type}`, event.event_id);

    // Environment will be undefined in Node.js runtime
    const env: any = undefined;
    
    // Initialize database
    const db = new Database(env);

    switch (event.event_type) {
      case 'customer.created':
        await handleCustomerCreated(db, event);
        break;
      
      case 'subscription.created':
        await handleSubscriptionCreated(db, event);
        break;
      
      case 'subscription.updated':
        await handleSubscriptionUpdated(db, event);
        break;
      
      case 'subscription.cancelled':
        await handleSubscriptionCancelled(db, event);
        break;
      
      case 'subscription.paused':
        await handleSubscriptionPaused(db, event);
        break;
      
      case 'subscription.resumed':
        await handleSubscriptionResumed(db, event);
        break;
      
      case 'transaction.completed':
        await handleTransactionCompleted(db, event);
        break;
      
      default:
        console.log(`🤷 Unhandled webhook event: ${event.event_type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Paddle webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

async function handleCustomerCreated(db: Database, event: PaddleWebhookEvent) {
  const { customer } = event.data;
  if (!customer) return;

  console.log('👤 Creating customer:', customer.email);

  // Check if user already exists
  let user = await db.getUserByEmail(customer.email);
  
  if (!user) {
    // Create new user with free tier
    const licenseKey = generateLicenseKey();
    const userId = globalThis.crypto.randomUUID();
    
    user = {
      id: userId,
      email: customer.email,
      name: customer.name || '',
      license_key: licenseKey,
      subscription_tier: 'free',
      daily_limit: 5,
      monthly_limit: 100,
      account_status: 'active',
      created_at: new Date().toISOString(),
      max_devices: 2,
      paddle_customer_id: customer.id
    };

    await db.createUser(user);
    console.log('✅ Created new user from Paddle customer');
  } else {
    // Update existing user with Paddle customer ID
    await db.updateUser(user.id, {
      paddle_customer_id: customer.id
    });
    console.log('✅ Updated existing user with Paddle customer ID');
  }
}

async function handleSubscriptionCreated(db: Database, event: PaddleWebhookEvent) {
  const { customer_id, id: subscription_id, items, current_billing_period } = event.data;
  
  if (!customer_id || !items || items.length === 0) {
    console.error('❌ Missing required subscription data');
    return;
  }

  // Find user by Paddle customer ID
  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  // Determine subscription tier from price ID
  const priceId = items[0].price_id;
  const tierInfo = PRICE_TO_TIER_MAP[priceId];
  
  if (!tierInfo) {
    console.error('❌ Unknown price ID:', priceId);
    return;
  }

  // Update user with subscription details
  await db.updateUser(user.id, {
    subscription_tier: tierInfo.tier,
    daily_limit: tierInfo.daily,
    monthly_limit: tierInfo.monthly,
    max_devices: tierInfo.devices,
    paddle_subscription_id: subscription_id,
    subscription_status: 'active',
    subscription_end_date: current_billing_period?.ends_at,
    account_status: 'active'
  });

  console.log('✅ Subscription created for user:', user.email, tierInfo.tier);
}

async function handleSubscriptionUpdated(db: Database, event: PaddleWebhookEvent) {
  const { customer_id, id: subscription_id, items, status, current_billing_period } = event.data;
  
  if (!customer_id) return;

  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  // Check if tier changed
  if (items && items.length > 0) {
    const priceId = items[0].price_id;
    const tierInfo = PRICE_TO_TIER_MAP[priceId];
    
    if (tierInfo && tierInfo.tier !== user.subscription_tier) {
      await db.updateUser(user.id, {
        subscription_tier: tierInfo.tier,
        daily_limit: tierInfo.daily,
        monthly_limit: tierInfo.monthly,
        max_devices: tierInfo.devices
      });
      console.log('✅ Subscription tier updated:', user.email, tierInfo.tier);
    }
  }

  // Update subscription status
  if (status) {
    await db.updateUser(user.id, {
      subscription_status: status,
      subscription_end_date: current_billing_period?.ends_at
    });
  }
}

async function handleSubscriptionCancelled(db: Database, event: PaddleWebhookEvent) {
  const { customer_id, current_billing_period } = event.data;
  
  if (!customer_id) return;

  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  // Mark subscription as cancelled but keep active until end date
  await db.updateUser(user.id, {
    subscription_status: 'cancelled',
    subscription_end_date: current_billing_period?.ends_at
  });

  console.log('⚠️ Subscription cancelled for user:', user.email);
}

async function handleSubscriptionPaused(db: Database, event: PaddleWebhookEvent) {
  const { customer_id } = event.data;
  
  if (!customer_id) return;

  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  // Temporarily suspend account
  await db.updateUser(user.id, {
    subscription_status: 'paused',
    account_status: 'suspended'
  });

  console.log('⏸️ Subscription paused for user:', user.email);
}

async function handleSubscriptionResumed(db: Database, event: PaddleWebhookEvent) {
  const { customer_id, current_billing_period } = event.data;
  
  if (!customer_id) return;

  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  // Reactivate account
  await db.updateUser(user.id, {
    subscription_status: 'active',
    account_status: 'active',
    subscription_end_date: current_billing_period?.ends_at
  });

  console.log('▶️ Subscription resumed for user:', user.email);
}

async function handleTransactionCompleted(db: Database, event: PaddleWebhookEvent) {
  // This could be used for one-time purchases or to track payments
  const { customer_id } = event.data;
  
  if (!customer_id) return;

  const user = await db.getUserByPaddleCustomerId(customer_id);
  if (!user) {
    console.error('❌ User not found for customer:', customer_id);
    return;
  }

  console.log('💰 Transaction completed for user:', user.email);
  
  // If user was previously suspended/cancelled, reactivate
  if (user.account_status !== 'active') {
    await db.updateUser(user.id, {
      account_status: 'active'
    });
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, paddle-signature',
    },
  });
}