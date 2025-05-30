import { D1Database } from '@cloudflare/workers-types';

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  license_key: string;
  subscription_tier: 'free' | 'basic' | 'standard' | 'premium' | 'team' | 'unlimited' | 'team-unlimited';
  daily_limit: number;
  monthly_limit: number;
  account_status: 'active' | 'suspended' | 'cancelled';
  created_at: string;
  updated_at?: string;
  max_devices: number;
  paddle_customer_id?: string;
  paddle_subscription_id?: string;
  subscription_status?: string;
  subscription_end_date?: string;
  credits_balance?: number;
}

export interface ApiKey {
  id: string;
  user_id: string;
  api_key: string;
  name?: string;
  created_at: string;
  last_used?: string;
  is_active: boolean;
}

export interface UsageLog {
  id: string;
  user_id: string;
  api_key_id?: string;
  endpoint: string;
  timestamp: string;
  response_time_ms?: number;
  status_code: number;
  tokens_used?: number;
}

export interface CreditTransaction {
  id: string;
  user_id: string;
  transaction_type: 'purchase' | 'usage';
  amount: number; // positive for purchases, negative for usage
  balance_after: number;
  description?: string;
  paddle_transaction_id?: string;
  created_at: string;
}

// In-memory store for local development
class InMemoryStore {
  private users: Map<string, User> = new Map();
  private apiKeys: Map<string, ApiKey> = new Map();
  private usageLogs: Map<string, UsageLog> = new Map();

  // User methods
  async getUserByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async getUserByLicenseKey(licenseKey: string): Promise<User | null> {
    console.log('🔎 InMemory: Searching for license key:', licenseKey);
    console.log('📊 InMemory: Total users:', this.users.size);
    for (const user of this.users.values()) {
      console.log('  Checking:', user.license_key);
      if (user.license_key === licenseKey) {
        return user;
      }
    }
    return null;
  }

  async createUser(user: User): Promise<void> {
    this.users.set(user.id, user);
    console.log('📝 InMemory: User created', { id: user.id, email: user.email, license: user.license_key });
    console.log('📊 InMemory: Total users:', this.users.size);
  }

  async updateUser(id: string, updates: Partial<User>): Promise<void> {
    const user = this.users.get(id);
    if (user) {
      this.users.set(id, { ...user, ...updates, updated_at: new Date().toISOString() });
    }
  }

  // API Key methods
  async getApiKeysByUserId(userId: string): Promise<ApiKey[]> {
    const keys: ApiKey[] = [];
    for (const key of this.apiKeys.values()) {
      if (key.user_id === userId) {
        keys.push(key);
      }
    }
    return keys;
  }

  async createApiKey(apiKey: ApiKey): Promise<void> {
    this.apiKeys.set(apiKey.id, apiKey);
  }

  // Usage log methods
  async createUsageLog(log: UsageLog): Promise<void> {
    this.usageLogs.set(log.id, log);
  }

  async getUserUsageCount(userId: string, period: 'daily' | 'monthly'): Promise<number> {
    const now = new Date();
    const logs = Array.from(this.usageLogs.values()).filter(log => {
      if (log.user_id !== userId) return false;
      const logDate = new Date(log.timestamp);
      
      if (period === 'daily') {
        return logDate.toDateString() === now.toDateString();
      } else {
        return logDate.getMonth() === now.getMonth() && 
               logDate.getFullYear() === now.getFullYear();
      }
    });
    
    return logs.length;
  }
}

// Singleton instance for development
let inMemoryStoreInstance: InMemoryStore | null = null;

// Database abstraction
export class Database {
  private d1?: D1Database;
  private inMemory?: InMemoryStore;

  constructor(env?: { HIVE_DB?: D1Database }) {
    if (env?.HIVE_DB) {
      this.d1 = env.HIVE_DB;
    } else {
      // Use singleton in development
      if (!inMemoryStoreInstance) {
        inMemoryStoreInstance = new InMemoryStore();
      }
      this.inMemory = inMemoryStoreInstance;
    }
  }

  private isCloudflare(): boolean {
    return !!this.d1;
  }

  // User methods
  async getUserByEmail(email: string): Promise<User | null> {
    if (this.isCloudflare() && this.d1) {
      const result = await this.d1.prepare(
        'SELECT * FROM users WHERE email = ?'
      ).bind(email).first<User>();
      return result || null;
    } else if (this.inMemory) {
      return this.inMemory.getUserByEmail(email);
    }
    return null;
  }

  async getUserById(id: string): Promise<User | null> {
    if (this.isCloudflare() && this.d1) {
      const result = await this.d1.prepare(
        'SELECT * FROM users WHERE id = ?'
      ).bind(id).first<User>();
      return result || null;
    } else if (this.inMemory) {
      return this.inMemory.getUserById(id);
    }
    return null;
  }

  async getUserByLicenseKey(licenseKey: string): Promise<User | null> {
    if (this.isCloudflare() && this.d1) {
      const result = await this.d1.prepare(
        'SELECT * FROM users WHERE license_key = ?'
      ).bind(licenseKey).first<User>();
      return result || null;
    } else if (this.inMemory) {
      return this.inMemory.getUserByLicenseKey(licenseKey);
    }
    return null;
  }

  async getUserByPaddleCustomerId(paddleCustomerId: string): Promise<User | null> {
    if (this.isCloudflare() && this.d1) {
      const result = await this.d1.prepare(
        'SELECT * FROM users WHERE paddle_customer_id = ?'
      ).bind(paddleCustomerId).first<User>();
      return result || null;
    } else if (this.inMemory) {
      for (const user of this.inMemory['users'].values()) {
        if (user.paddle_customer_id === paddleCustomerId) {
          return user;
        }
      }
    }
    return null;
  }

  async createUser(user: User): Promise<void> {
    if (this.isCloudflare() && this.d1) {
      await this.d1.prepare(`
        INSERT INTO users (
          id, email, name, license_key, subscription_tier, 
          daily_limit, monthly_limit, account_status, created_at, 
          max_devices, paddle_customer_id, paddle_subscription_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        user.id, user.email, user.name, user.license_key, user.subscription_tier,
        user.daily_limit, user.monthly_limit, user.account_status, user.created_at,
        user.max_devices, user.paddle_customer_id || null, user.paddle_subscription_id || null
      ).run();
    } else if (this.inMemory) {
      await this.inMemory.createUser(user);
    }
  }

  async updateUser(id: string, updates: Partial<User>): Promise<void> {
    if (this.isCloudflare() && this.d1) {
      const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
      const values = Object.values(updates);
      values.push(new Date().toISOString()); // updated_at
      values.push(id); // WHERE id = ?
      
      await this.d1.prepare(`
        UPDATE users SET ${fields}, updated_at = ? WHERE id = ?
      `).bind(...values).run();
    } else if (this.inMemory) {
      await this.inMemory.updateUser(id, updates);
    }
  }

  // API Key methods
  async getApiKeysByUserId(userId: string): Promise<ApiKey[]> {
    if (this.isCloudflare() && this.d1) {
      const { results } = await this.d1.prepare(
        'SELECT * FROM api_keys WHERE user_id = ? AND is_active = 1'
      ).bind(userId).all<ApiKey>();
      return results || [];
    } else if (this.inMemory) {
      return this.inMemory.getApiKeysByUserId(userId);
    }
    return [];
  }

  async createApiKey(apiKey: ApiKey): Promise<void> {
    if (this.isCloudflare() && this.d1) {
      await this.d1.prepare(`
        INSERT INTO api_keys (id, user_id, api_key, name, created_at, is_active)
        VALUES (?, ?, ?, ?, ?, ?)
      `).bind(
        apiKey.id, apiKey.user_id, apiKey.api_key, apiKey.name || null,
        apiKey.created_at, apiKey.is_active ? 1 : 0
      ).run();
    } else if (this.inMemory) {
      await this.inMemory.createApiKey(apiKey);
    }
  }

  // Usage tracking
  async createUsageLog(log: UsageLog): Promise<void> {
    if (this.isCloudflare() && this.d1) {
      await this.d1.prepare(`
        INSERT INTO usage_logs (
          id, user_id, api_key_id, endpoint, timestamp, 
          response_time_ms, status_code, tokens_used
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        log.id, log.user_id, log.api_key_id || null, log.endpoint,
        log.timestamp, log.response_time_ms || null, log.status_code,
        log.tokens_used || null
      ).run();
    } else if (this.inMemory) {
      await this.inMemory.createUsageLog(log);
    }
  }

  async getUserUsageCount(userId: string, period: 'daily' | 'monthly'): Promise<number> {
    if (this.isCloudflare() && this.d1) {
      const now = new Date();
      let startDate: string;
      
      if (period === 'daily') {
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
      } else {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      }
      
      const result = await this.d1.prepare(
        'SELECT COUNT(*) as count FROM usage_logs WHERE user_id = ? AND timestamp >= ?'
      ).bind(userId, startDate).first<{ count: number }>();
      
      return result?.count || 0;
    } else if (this.inMemory) {
      return this.inMemory.getUserUsageCount(userId, period);
    }
    return 0;
  }
}

// Helper function to generate license key
export function generateLicenseKey(): string {
  const segments = [];
  for (let i = 0; i < 4; i++) {
    const segment = globalThis.crypto.getRandomValues(new Uint8Array(2))
      .reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '')
      .toUpperCase();
    segments.push(segment);
  }
  return `HIVE-${segments.join('-')}`;
}

// Helper function to generate API key
export function generateApiKey(): string {
  const prefix = 'hive_';
  const randomBytes = globalThis.crypto.getRandomValues(new Uint8Array(32));
  const key = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return prefix + key;
}