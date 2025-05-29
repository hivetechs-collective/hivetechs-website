-- Database Migration Script for Paddle Integration
-- Run with: wrangler d1 execute hive-user-db --remote --file=./database-migration-paddle.sql

-- Add Paddle fields to existing users table
ALTER TABLE users ADD COLUMN paddle_customer_id TEXT;
ALTER TABLE users ADD COLUMN paddle_subscription_id TEXT;
ALTER TABLE users ADD COLUMN daily_limit INTEGER DEFAULT 5;
ALTER TABLE users ADD COLUMN monthly_limit INTEGER DEFAULT 100;

-- Check if license_key column exists, if not add it
-- Note: This may fail if column already exists, which is fine
ALTER TABLE users ADD COLUMN license_key TEXT;

-- Add cost tracking to monthly_usage table
ALTER TABLE monthly_usage ADD COLUMN cost_incurred DECIMAL(10,4) DEFAULT 0.0000;
ALTER TABLE monthly_usage ADD COLUMN tier_at_start TEXT;
ALTER TABLE monthly_usage ADD COLUMN tier_changes TEXT;

-- Add Paddle transaction fields to credit_transactions
ALTER TABLE credit_transactions ADD COLUMN paddle_transaction_id TEXT;
ALTER TABLE credit_transactions ADD COLUMN amount_paid DECIMAL(8,2);
ALTER TABLE credit_transactions ADD COLUMN currency TEXT DEFAULT 'USD';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_paddle_customer ON users(paddle_customer_id);
CREATE INDEX IF NOT EXISTS idx_users_license_key ON users(license_key);
CREATE INDEX IF NOT EXISTS idx_conversation_usage_license ON conversation_usage(license_key);
CREATE INDEX IF NOT EXISTS idx_usage_periods_license_period ON usage_periods(license_key, period_type, period_key);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_subscription_events_user ON subscription_events(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_license ON credit_transactions(license_key);

-- Update existing users to have proper tier limits based on subscription_tier
UPDATE users SET 
  daily_limit = CASE 
    WHEN subscription_tier = 'free' THEN 5
    WHEN subscription_tier = 'basic' THEN 50  
    WHEN subscription_tier = 'standard' THEN 100
    WHEN subscription_tier = 'premium' THEN 200
    WHEN subscription_tier = 'team' THEN 600
    ELSE 5
  END,
  monthly_limit = CASE 
    WHEN subscription_tier = 'free' THEN 100
    WHEN subscription_tier = 'basic' THEN 1000
    WHEN subscription_tier = 'standard' THEN 2000  
    WHEN subscription_tier = 'premium' THEN 4000
    WHEN subscription_tier = 'team' THEN 12000
    ELSE 100
  END
WHERE daily_limit IS NULL OR monthly_limit IS NULL;

-- Generate license keys for existing users who don't have them
-- Note: This will need to be done via API since SQLite doesn't have UUID generation
-- UPDATE users SET license_key = 'HIVE-' || substr(hex(randomblob(8)), 1, 4) || '-' || substr(hex(randomblob(8)), 1, 4) || '-' || substr(hex(randomblob(8)), 1, 4) || '-' || substr(hex(randomblob(8)), 1, 4) WHERE license_key IS NULL;

-- Create unique constraint on license_key if it doesn't exist
-- Note: This may fail if constraint already exists, which is fine
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_license_key_unique ON users(license_key) WHERE license_key IS NOT NULL;