# Database Architecture & Implementation Plan (UPDATED)
## Hybrid Paddle + Cloudflare Design for hive-tools

### Current State Assessment

**What We Have:**
- ✅ Cloudflare Pages hosting
- ✅ Basic webhook worker for Gumroad (license generation)
- ✅ Paddle API integration skeleton
- ✅ Next.js API routes
- ✅ **EXISTING D1 database** (hive-user-db) with 16 tables
- ✅ **Comprehensive schema** for user management, usage tracking, and billing
- ✅ **License validation system** already in place

**Existing Database ID:** `b646eb8d-810f-41c1-ba12-b95a543b4884`
**Database Size:** 254 kB with existing data
**Tables:** users, api_keys, conversation_usage, credit_transactions, monthly_usage, subscription_events, installations, usage_periods, rate_limits, security_events, and more

**What We Need:**
- Migration to Paddle from Gumroad/LemonSqueezy fields
- KV namespace for edge caching
- Updated API endpoints to leverage existing schema
- Paddle webhook integration with existing tables

---

## Recommended Architecture (Updated for Existing Database)

### 1. Data Distribution Strategy (UNCHANGED)

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│     Paddle      │    │  Cloudflare D1   │    │ Cloudflare KV   │
│   (Billing)     │◄──►│  (Primary DB)    │◄──►│  (Edge Cache)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ├─ Customer billing     ├─ User accounts        ├─ License cache
         ├─ Subscriptions        ├─ Usage tracking       ├─ Usage cache
         ├─ Payment history      ├─ Preferences          ├─ Config cache
         └─ Tax compliance       └─ Analytics data       └─ Session data
```

### 2. Existing Database Schema Analysis

**Current Users Table:**
```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  subscription_tier TEXT DEFAULT 'free',
  trial_start_date TEXT,
  trial_end_date TEXT,
  lemon_squeezy_customer_id TEXT,        -- TO MIGRATE TO: paddle_customer_id
  lemon_squeezy_subscription_id TEXT,    -- TO MIGRATE TO: paddle_subscription_id
  max_devices INTEGER DEFAULT 2,
  last_verified TEXT,
  account_status TEXT DEFAULT 'active',
  gumroad_customer_id TEXT,              -- LEGACY: Can be removed
  gumroad_subscription_id TEXT,          -- LEGACY: Can be removed
  gumroad_product_id TEXT                -- LEGACY: Can be removed
);
```

**Current Usage Tracking Tables:**
```sql
-- Granular conversation tracking (EXISTING - KEEP)
CREATE TABLE conversation_usage (
  id TEXT PRIMARY KEY,
  license_key TEXT NOT NULL,
  installation_id TEXT NOT NULL,
  conversation_id TEXT NOT NULL,
  conversation_token TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  verified BOOLEAN DEFAULT FALSE,
  usage_proof TEXT,
  question_hash TEXT,
  response_length INTEGER,
  processing_time INTEGER,
  UNIQUE(conversation_token)
);

-- Period-based usage tracking (EXISTING - PERFECT)
CREATE TABLE usage_periods (
  id TEXT PRIMARY KEY,
  license_key TEXT NOT NULL,
  period_type TEXT NOT NULL,              -- 'daily', 'monthly'
  period_key TEXT NOT NULL,               -- '2024-12-20' or '2024-12'
  conversations_used INTEGER DEFAULT 0,
  conversations_limit INTEGER NOT NULL,
  reset_date DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(license_key, period_type, period_key)
);

-- Monthly aggregates (EXISTING - ENHANCE)
CREATE TABLE monthly_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  year_month TEXT NOT NULL,
  conversation_count INTEGER DEFAULT 0,   -- ADD: cost_incurred, tier_info
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(user_id, year_month)
);
```

**Additional Existing Tables:**
```sql
-- API Keys (EXISTING - PERFECT)
CREATE TABLE api_keys (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  key_hash TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  expires_at TEXT,
  is_active BOOLEAN DEFAULT true,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Credit System (EXISTING - PERFECT)
CREATE TABLE credit_transactions (
  id TEXT PRIMARY KEY,
  license_key TEXT NOT NULL,
  transaction_type TEXT NOT NULL,
  credits INTEGER NOT NULL,
  remaining_credits INTEGER NOT NULL,
  transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  gumroad_order_id TEXT,                  -- TO MIGRATE TO: paddle_transaction_id
  conversation_id TEXT
);

-- Device Management (EXISTING - PERFECT)
CREATE TABLE installations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  machine_id TEXT NOT NULL,
  device_name TEXT,
  os_type TEXT,
  os_version TEXT,
  app_version TEXT,
  first_registered TEXT DEFAULT CURRENT_TIMESTAMP,
  last_active TEXT DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(user_id, machine_id)
);

-- Subscription Events (EXISTING - ADAPT)
CREATE TABLE subscription_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  event_type TEXT NOT NULL,               -- ADAPT: Add Paddle event types
  event_data TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Security & Rate Limiting (EXISTING - PERFECT)
CREATE TABLE security_events (
  id TEXT PRIMARY KEY,
  license_key TEXT,
  installation_id TEXT,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL,
  description TEXT,
  ip_address TEXT,
  user_agent TEXT,
  event_data TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  resolved BOOLEAN DEFAULT FALSE
);

CREATE TABLE rate_limits (
  id TEXT PRIMARY KEY,
  identifier TEXT NOT NULL,
  limit_type TEXT NOT NULL,
  count INTEGER DEFAULT 0,
  window_start DATETIME DEFAULT CURRENT_TIMESTAMP,
  window_duration INTEGER DEFAULT 3600,
  UNIQUE(identifier, limit_type)
);
```

### 3. Migration Plan for Paddle Integration

**Required Database Changes:**

```sql
-- Add Paddle fields to existing users table
ALTER TABLE users ADD COLUMN paddle_customer_id TEXT;
ALTER TABLE users ADD COLUMN paddle_subscription_id TEXT;
ALTER TABLE users ADD COLUMN daily_limit INTEGER DEFAULT 5;
ALTER TABLE users ADD COLUMN monthly_limit INTEGER DEFAULT 100;
ALTER TABLE users ADD COLUMN license_key TEXT UNIQUE;  -- If not exists

-- Add cost tracking to monthly_usage
ALTER TABLE monthly_usage ADD COLUMN cost_incurred DECIMAL(10,4) DEFAULT 0.0000;
ALTER TABLE monthly_usage ADD COLUMN tier_at_start TEXT;
ALTER TABLE monthly_usage ADD COLUMN tier_changes TEXT;  -- JSON log

-- Add Paddle transaction fields to credit_transactions
ALTER TABLE credit_transactions ADD COLUMN paddle_transaction_id TEXT;
ALTER TABLE credit_transactions ADD COLUMN amount_paid DECIMAL(8,2);
ALTER TABLE credit_transactions ADD COLUMN currency TEXT DEFAULT 'USD';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_paddle_customer ON users(paddle_customer_id);
CREATE INDEX IF NOT EXISTS idx_users_license_key ON users(license_key);
CREATE INDEX IF NOT EXISTS idx_conversation_usage_license ON conversation_usage(license_key);
CREATE INDEX IF NOT EXISTS idx_usage_periods_license_period ON usage_periods(license_key, period_type, period_key);
```

### 4. Cloudflare KV Cache Strategy (NEW - TO CREATE)

**Purpose:** Ultra-fast reads for CLI/API operations

```javascript
// KV Key Structure
{
  // License validation (most critical for CLI)
  "license:abc123": {
    "valid": true,
    "userId": "user_456", 
    "tier": "premium",
    "dailyLimit": 200,
    "monthlyLimit": 4000,
    "validUntil": "2024-12-31T23:59:59Z"
  },

  // Daily usage cache (updated frequently)
  "usage:user_456:2024-12-20": {
    "conversationsUsed": 45,
    "conversationsRemaining": 155,
    "costIncurred": 2.30,
    "lastUpdated": "2024-12-20T14:30:00Z"
  },

  // Monthly usage cache
  "usage_monthly:user_456:2024-12": {
    "conversationsUsed": 1250,
    "conversationsRemaining": 2750,
    "costIncurred": 67.50,
    "lastUpdated": "2024-12-20T14:30:00Z"
  },

  // Global config
  "config:tier_limits": {
    "free": {"daily": 5, "monthly": 100},
    "basic": {"daily": 50, "monthly": 1000},
    "standard": {"daily": 100, "monthly": 2000},
    "premium": {"daily": 200, "monthly": 4000},
    "team": {"daily": 600, "monthly": 12000}
  }
}
```

### 5. Updated API Endpoints Using Existing Schema

**License Validation (Updated):**
```javascript
// /functions/api/license/validate.js
export async function onRequest(context) {
  const { request, env } = context;
  const { licenseKey } = await request.json();
  
  // 1. Check KV cache first (ultra-fast)
  const cached = await env.HIVE_KV.get(`license:${licenseKey}`);
  if (cached) {
    return new Response(cached, { 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
  
  // 2. Query existing users table
  const user = await env.HIVE_DB.prepare(`
    SELECT u.*, up.conversations_used, up.conversations_limit 
    FROM users u
    LEFT JOIN usage_periods up ON u.id = up.license_key 
      AND up.period_type = 'daily' 
      AND up.period_key = DATE('now')
    WHERE u.license_key = ?
  `).bind(licenseKey).first();
  
  if (!user || user.account_status !== 'active') {
    return new Response(JSON.stringify({ valid: false }), { status: 401 });
  }
  
  // 3. Cache result in KV for next time
  const result = {
    valid: true,
    userId: user.id,
    tier: user.subscription_tier,
    dailyLimit: user.daily_limit || getTierLimits(user.subscription_tier).daily,
    monthlyLimit: user.monthly_limit || getTierLimits(user.subscription_tier).monthly,
    conversationsUsed: user.conversations_used || 0
  };
  
  await env.HIVE_KV.put(`license:${licenseKey}`, JSON.stringify(result), {
    expirationTtl: 3600 // 1 hour cache
  });
  
  return new Response(JSON.stringify(result));
}
```

**Usage Tracking (Updated):**
```javascript
// /functions/api/usage/track.js
export async function onRequest(context) {
  const { request, env } = context;
  const { licenseKey, conversationsUsed = 1 } = await request.json();
  
  // 1. Validate license (from cache)
  const license = await validateLicense(licenseKey, env);
  if (!license.valid) {
    return new Response(JSON.stringify({ error: 'Invalid license' }), { status: 401 });
  }
  
  // 2. Update usage in existing usage_periods table
  const today = new Date().toISOString().split('T')[0];
  const thisMonth = today.substring(0, 7); // YYYY-MM
  
  // Update daily usage
  await env.HIVE_DB.prepare(`
    INSERT INTO usage_periods (id, license_key, period_type, period_key, conversations_used, conversations_limit)
    VALUES (?, ?, 'daily', ?, ?, ?)
    ON CONFLICT(license_key, period_type, period_key) 
    DO UPDATE SET 
      conversations_used = conversations_used + ?,
      updated_at = CURRENT_TIMESTAMP
  `).bind(
    crypto.randomUUID(),
    licenseKey,
    today,
    conversationsUsed,
    license.dailyLimit,
    conversationsUsed
  ).run();
  
  // Update monthly usage
  await env.HIVE_DB.prepare(`
    INSERT INTO usage_periods (id, license_key, period_type, period_key, conversations_used, conversations_limit)
    VALUES (?, ?, 'monthly', ?, ?, ?)
    ON CONFLICT(license_key, period_type, period_key) 
    DO UPDATE SET 
      conversations_used = conversations_used + ?,
      updated_at = CURRENT_TIMESTAMP
  `).bind(
    crypto.randomUUID(),
    licenseKey,
    thisMonth,
    conversationsUsed,
    license.monthlyLimit,
    conversationsUsed
  ).run();
  
  // 3. Log detailed conversation usage
  await env.HIVE_DB.prepare(`
    INSERT INTO conversation_usage (
      id, license_key, installation_id, conversation_id, 
      conversation_token, verified, timestamp
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    crypto.randomUUID(),
    licenseKey,
    request.headers.get('x-installation-id') || 'unknown',
    request.headers.get('x-conversation-id') || crypto.randomUUID(),
    crypto.randomUUID(),
    true,
    new Date().toISOString()
  ).run();
  
  // 4. Update KV cache
  const cacheKey = `usage:${license.userId}:${today}`;
  const newUsage = license.conversationsUsed + conversationsUsed;
  
  await env.HIVE_KV.put(cacheKey, JSON.stringify({
    conversationsUsed: newUsage,
    conversationsRemaining: license.dailyLimit - newUsage,
    lastUpdated: new Date().toISOString()
  }));
  
  return new Response(JSON.stringify({ success: true, usage: newUsage }));
}
```

### 6. Paddle Webhook Integration (Updated for Existing Tables)

```javascript
// /functions/api/webhooks/paddle.js
export async function onRequest(context) {
  const { request, env } = context;
  
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  const webhookData = await request.json();
  const eventType = webhookData.event_type;
  
  // Log event to existing subscription_events table
  await env.HIVE_DB.prepare(`
    INSERT INTO subscription_events (user_id, event_type, event_data)
    VALUES (?, ?, ?)
  `).bind(
    webhookData.data?.customer?.id || 'unknown',
    `paddle.${eventType}`,
    JSON.stringify(webhookData)
  ).run();
  
  // Process different event types using existing tables
  switch (eventType) {
    case 'subscription.created':
      await handleSubscriptionCreated(webhookData, env);
      break;
    case 'subscription.updated':
      await handleSubscriptionUpdated(webhookData, env);
      break;
    case 'subscription.cancelled':
      await handleSubscriptionCancelled(webhookData, env);
      break;
    case 'transaction.completed':
      await handleTransactionCompleted(webhookData, env);
      break;
  }
  
  return new Response('OK');
}

async function handleSubscriptionCreated(webhookData, env) {
  const customer = webhookData.data.customer;
  const subscription = webhookData.data.subscription;
  
  // Generate license key
  const licenseKey = generateLicenseKey();
  const tier = mapPaddlePlanToTier(subscription.items[0].price.id);
  const limits = getTierLimits(tier);
  
  // Update existing users table with Paddle info
  await env.HIVE_DB.prepare(`
    INSERT INTO users (
      id, email, name, paddle_customer_id, paddle_subscription_id, 
      license_key, subscription_tier, daily_limit, monthly_limit
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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
    limits.monthly
  ).run();
  
  // Cache license in KV
  await env.HIVE_KV.put(`license:${licenseKey}`, JSON.stringify({
    valid: true,
    userId: customer.id,
    tier: tier,
    dailyLimit: limits.daily,
    monthlyLimit: limits.monthly
  }));
  
  // Send welcome email with license key
  await sendWelcomeEmail(customer.email, licenseKey, env);
}
```

---

## Implementation Tasks (Updated)

### Phase 1: Database Migration & KV Setup (Week 1)
- [x] **Task 1.1:** Create wrangler.toml for existing database
- [ ] **Task 1.2:** Create Cloudflare KV namespace for caching
- [ ] **Task 1.3:** Run database migration script (add Paddle columns)
- [ ] **Task 1.4:** Test existing schema with new fields
- [ ] **Task 1.5:** Create database utility functions for existing tables
- [ ] **Task 1.6:** Set up environment variables and bindings

### Phase 2: API Updates (Week 2)
- [ ] **Task 2.1:** Update license validation to use existing users table
- [ ] **Task 2.2:** Update usage tracking to use existing usage_periods table  
- [ ] **Task 2.3:** Implement KV caching layer for existing data
- [ ] **Task 2.4:** Create migration utilities for Gumroad→Paddle data
- [ ] **Task 2.5:** Update error handling for existing schema
- [ ] **Task 2.6:** Test all endpoints with existing data

### Phase 3: Paddle Integration (Week 3)
- [ ] **Task 3.1:** Update Paddle webhook to use existing subscription_events
- [ ] **Task 3.2:** Implement subscription handlers for existing users table
- [ ] **Task 3.3:** Create customer sync between Paddle and existing data
- [ ] **Task 3.4:** Update license key generation for existing system
- [ ] **Task 3.5:** Migrate existing Gumroad/LemonSqueezy customers
- [ ] **Task 3.6:** Test end-to-end flow with existing database

### Phase 4: Frontend Integration (Week 4)
- [ ] **Task 4.1:** Update checkout flow to work with existing schema
- [ ] **Task 4.2:** Build user dashboard using existing usage tables
- [ ] **Task 4.3:** Create admin interface for existing user management
- [ ] **Task 4.4:** Implement real-time usage displays from existing data
- [ ] **Task 4.5:** Add subscription management UI
- [ ] **Task 4.6:** Build analytics dashboard from existing tables

### Phase 5: CLI Integration (Week 5)
- [ ] **Task 5.1:** Verify CLI works with existing license validation
- [ ] **Task 5.2:** Test usage tracking with existing conversation_usage table
- [ ] **Task 5.3:** Ensure offline caching works with existing schema
- [ ] **Task 5.4:** Test authentication flow with existing api_keys table
- [ ] **Task 5.5:** Verify device management with existing installations table
- [ ] **Task 5.6:** Test usage limit notifications with existing data

### Phase 6: Testing & Launch (Week 6)
- [ ] **Task 6.1:** Comprehensive testing with existing database
- [ ] **Task 6.2:** Load testing with existing 254kB of data
- [ ] **Task 6.3:** Security audit of existing license system
- [ ] **Task 6.4:** Data migration verification and rollback plan
- [ ] **Task 6.5:** Monitoring setup for existing database
- [ ] **Task 6.6:** Production launch with existing customers

---

## Benefits of Using Existing Database

### No Data Loss
- **254kB of existing data preserved**
- **16 tables of user behavior and usage patterns**
- **Existing customer relationships maintained**

### Faster Implementation  
- **Schema already proven in production**
- **Usage tracking system already functional**
- **Security and rate limiting already implemented**

### Lower Risk
- **Migration instead of full rebuild**
- **Existing system remains functional during transition**
- **Gradual rollout possible with existing infrastructure**

This updated plan leverages your existing D1 database investment while adding Paddle integration and KV caching for optimal performance. The existing schema is actually more comprehensive than what I originally proposed, so we're in a much better position than starting from scratch.