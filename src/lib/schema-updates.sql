-- Add credits_balance to users table
ALTER TABLE users ADD COLUMN credits_balance INTEGER DEFAULT 0;

-- Create credit_transactions table
CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  transaction_type TEXT NOT NULL, -- 'purchase' or 'usage'
  amount INTEGER NOT NULL, -- positive for purchases, negative for usage
  balance_after INTEGER NOT NULL,
  description TEXT,
  paddle_transaction_id TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create index for faster lookups
CREATE INDEX idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX idx_credit_transactions_created_at ON credit_transactions(created_at);