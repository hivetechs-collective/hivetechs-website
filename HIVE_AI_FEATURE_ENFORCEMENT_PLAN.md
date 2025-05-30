# Hive.ai Feature Enforcement Implementation Plan

## Overview
This document outlines the detailed implementation plan for enforcing subscription-based features in the hive.ai CLI repository. 

**IMPORTANT**: Based on documentation audit, we are currently in **early access phase** with manual distribution via GitHub. The features described below are well-documented but need implementation of:
- Server-side subscription validation system
- Automated license distribution (currently manual)
- NPM package publication (planned Q1 2025)
- Paddle store integration (pending FL LLC registration)

The plan focuses on implementing usage tracking, feature flags, and tier-based limitations that align with our documented feature set.

## Current Feature Structure (From Website)

### Free Tier
- 5 daily / 100 monthly conversations
- AI consensus intelligence
- All integrations included (CLI, IDE plugins, terminal access)
- Full support

### Basic Tier ($5/month)
- 50 daily / 1,000 monthly conversations
- Everything in Free, plus:
- Export conversation history
- Basic usage insights

### Standard Tier ($10/month)
- 100 daily / 2,000 monthly conversations
- Everything in Basic, plus:
- Saved prompts & templates
- Prompt template library
- Custom model preferences

### Premium Tier ($20/month)
- 200 daily / 4,000 monthly conversations
- Everything in Standard, plus:
- Advanced analytics dashboard
- Webhook notifications
- Custom consensus configurations
- Collaboration features

### Unlimited Tier ($30/month)
- Unlimited conversations
- Everything in Premium, plus:
- Real-time collaboration
- Advanced export formats (PDF, CSV, JSON)
- Custom branding options
- Priority model access

### Team Unlimited Tier ($115/month)  
- Unlimited conversations × 5 developers
- All features included
- Save 23% vs 5 individual plans
- Single invoice for the whole team

## Simplified Pricing Philosophy

### Core Principles
After extensive review, we've simplified our approach to focus on what developers actually care about:

1. **All Features for Everyone** - Every user gets full access to all features from day one
2. **Usage-Based Pricing** - Pay only for conversation volume, not feature restrictions
3. **Team Premium** - Special team features only for multi-developer plans
4. **No Artificial Limits** - Never restrict API access, integrations, or core functionality

### What Everyone Gets (All Tiers)
- ✅ Full feature access from Free tier
- ✅ All AI models and consensus features  
- ✅ Complete API access and integrations
- ✅ All export formats and analytics
- ✅ Webhooks and collaboration features
- ✅ Terminal, CLI, and IDE plugin access
- ✅ Full documentation and support

### Pricing Structure
- **Free**: 5 daily / 100 monthly conversations + all features
- **Basic ($5)**: 50 daily / 1,000 monthly conversations + all features
- **Standard ($10)**: 100 daily / 2,000 monthly conversations + all features  
- **Premium ($20)**: 200 daily / 4,000 monthly conversations + all features
- **Unlimited ($30)**: Unlimited conversations + all features
- **Team Unlimited ($115)**: Unlimited × 5 developers (23% savings)

This approach eliminates complexity and provides exceptional value at every tier.

## Implementation Architecture

### 1. Core Infrastructure

#### 1.1 User Authentication & Subscription Management
```typescript
// ~/.hive/config.json
interface HiveConfig {
  userId: string
  apiKey: string
  subscriptionTier: 'free' | 'basic' | 'standard' | 'premium' | 'unlimited' | 'team-unlimited'
  subscriptionExpiry: string
  teamId?: string
  lastSyncTime: string
  localMode: boolean // For offline usage
}
```

#### 1.2 Usage Tracking Database
```sql
-- Local SQLite database: ~/.hive/usage.db

CREATE TABLE usage_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  conversation_id TEXT,
  models_used TEXT, -- JSON array of model names
  tokens_input INTEGER,
  tokens_output INTEGER,
  cost_cents INTEGER,
  consensus_score REAL,
  success BOOLEAN,
  feature_flags TEXT -- JSON object of features used
);

CREATE TABLE daily_usage (
  date DATE PRIMARY KEY,
  conversations_count INTEGER DEFAULT 0,
  tokens_used INTEGER DEFAULT 0,
  cost_cents INTEGER DEFAULT 0
);

CREATE TABLE monthly_usage (
  year_month TEXT PRIMARY KEY, -- Format: "2024-01"
  conversations_count INTEGER DEFAULT 0,
  tokens_used INTEGER DEFAULT 0,
  cost_cents INTEGER DEFAULT 0
);

CREATE TABLE feature_usage (
  feature_name TEXT,
  usage_count INTEGER DEFAULT 0,
  last_used DATETIME,
  PRIMARY KEY (feature_name)
);
```

#### 1.3 Simplified Configuration System
```typescript
interface UserConfig {
  // Usage limits (only restriction)
  dailyLimit: number
  monthlyLimit: number
  unlimitedConversations: boolean
  
  // Team features (only for team plans)
  isTeamPlan: boolean
  teamId?: string
  teamMembers: number
  
  // All other features are always enabled
  allFeaturesEnabled: true
}
```

### 2. CLI Command Modifications

#### 2.1 Authentication Commands
```bash
# New authentication flow
hive auth login [--api-key KEY] [--subscription-tier TIER]
hive auth status
hive auth refresh
hive auth logout

# Local mode for development
hive auth local-mode [--enable/--disable]
```

#### 2.2 Usage Tracking Commands
```bash
# Usage monitoring
hive usage today
hive usage month
hive usage history [--days N]
hive usage export [--format json|csv]

# Subscription management
hive subscription status
hive subscription upgrade
hive subscription billing
```

#### 2.3 Available Commands (All Tiers)
```bash
# Export functionality (Available to all)
hive export conversation [ID] [--format txt|json|pdf|csv]
hive export history [--from DATE] [--to DATE] [--format FORMAT]

# Analytics (Available to all)
hive analytics dashboard
hive analytics models
hive analytics costs

# Prompt management (Available to all)
hive prompts save [NAME] [--template TEMPLATE]
hive prompts list
hive prompts use [NAME]
hive prompts delete [NAME]

# Webhooks (Available to all)
hive webhooks add [URL] [--events EVENT_LIST]
hive webhooks list
hive webhooks remove [ID]

# Team features (Team plans only)
hive team members
hive team invite [EMAIL]
hive team remove [USER_ID]
hive team audit-log
hive team api-keys list
hive team api-keys create [--user USER_ID] [--expires DAYS]
hive team api-keys revoke [KEY_ID]
```

### 3. Implementation Details

#### 3.1 Simplified Usage Validator
```typescript
class UsageValidator {
  private config: HiveConfig
  private usageDb: UsageDatabase
  
  async checkDailyLimit(): Promise<{ allowed: boolean, remaining: number }> {
    const usage = await this.usageDb.getTodayUsage()
    const limit = await this.getDailyLimit()
    
    if (limit === -1) return { allowed: true, remaining: -1 } // Unlimited
    
    return {
      allowed: usage.conversations < limit,
      remaining: Math.max(0, limit - usage.conversations)
    }
  }
  
  async checkMonthlyLimit(): Promise<{ allowed: boolean, remaining: number }> {
    const usage = await this.usageDb.getMonthUsage()
    const limit = await this.getMonthlyLimit()
    
    if (limit === -1) return { allowed: true, remaining: -1 } // Unlimited
    
    return {
      allowed: usage.conversations < limit,
      remaining: Math.max(0, limit - usage.conversations)
    }
  }
  
  async getUserConfig(): Promise<UserConfig> {
    const tier = this.config.subscriptionTier
    return this.tierToConfig(tier)
  }
  
  private tierToConfig(tier: string): UserConfig {
    switch (tier) {
      case 'basic':
        return {
          dailyLimit: 50,
          monthlyLimit: 1000,
          unlimitedConversations: false,
          isTeamPlan: false,
          teamMembers: 1,
          allFeaturesEnabled: true
        }
      
      case 'standard':
        return {
          dailyLimit: 100,
          monthlyLimit: 2000,
          unlimitedConversations: false,
          isTeamPlan: false,
          teamMembers: 1,
          allFeaturesEnabled: true
        }
      
      case 'premium':
        return {
          dailyLimit: 200,
          monthlyLimit: 4000,
          unlimitedConversations: false,
          isTeamPlan: false,
          teamMembers: 1,
          allFeaturesEnabled: true
        }
      
      case 'unlimited':
        return {
          dailyLimit: -1,
          monthlyLimit: -1,
          unlimitedConversations: true,
          isTeamPlan: false,
          teamMembers: 1,
          allFeaturesEnabled: true
        }
      
      case 'team-unlimited':
        return {
          dailyLimit: -1,
          monthlyLimit: -1,
          unlimitedConversations: true,
          isTeamPlan: true,
          teamMembers: 5,
          allFeaturesEnabled: true
        }
      
      default: // free
        return {
          dailyLimit: 5,
          monthlyLimit: 100,
          unlimitedConversations: false,
          isTeamPlan: false,
          teamMembers: 1,
          allFeaturesEnabled: true
        }
    }
  }
}
```

#### 3.2 Usage Tracking Interceptor
```typescript
class UsageTracker {
  private db: UsageDatabase
  private validator: SubscriptionValidator
  
  async trackConversation(session: ConversationSession): Promise<void> {
    // Record usage
    await this.db.recordConversation({
      timestamp: new Date(),
      conversationId: session.id,
      modelsUsed: session.models,
      tokensInput: session.tokensInput,
      tokensOutput: session.tokensOutput,
      costCents: session.estimatedCost,
      consensusScore: session.consensusScore,
      success: session.success,
      featureFlags: session.featuresUsed
    })
    
    // Update daily/monthly counters
    await this.updateUsageCounters()
    
    // Sync with server (async, non-blocking)
    this.syncUsageToServer()
  }
  
  async preConversationCheck(): Promise<{ allowed: boolean, reason?: string }> {
    const dailyCheck = await this.validator.checkDailyLimit()
    const monthlyCheck = await this.validator.checkMonthlyLimit()
    
    if (!dailyCheck.allowed) {
      return { 
        allowed: false, 
        reason: `Daily limit reached. ${dailyCheck.remaining} conversations remaining today.` 
      }
    }
    
    if (!monthlyCheck.allowed) {
      return { 
        allowed: false, 
        reason: `Monthly limit reached. Upgrade your plan or purchase credits.` 
      }
    }
    
    return { allowed: true }
  }
}
```

#### 3.3 Simplified Command Wrapper
```typescript
class UsageLimitedCommand {
  private validator: UsageValidator
  private tracker: UsageTracker
  
  async execute(command: string, args: any[]): Promise<any> {
    // Check authentication
    if (!await this.isAuthenticated()) {
      throw new Error('Please login with: hive auth login')
    }
    
    // Check team access for team commands only
    if (this.isTeamCommand(command) && !await this.isTeamPlan()) {
      throw new Error('Team features require Team Unlimited plan. Upgrade at: https://hivetechs.io/pricing')
    }
    
    // Check usage limits for conversation commands
    if (this.isConversationCommand(command)) {
      const check = await this.tracker.preConversationCheck()
      if (!check.allowed) {
        throw new Error(check.reason + ' Purchase credits at: https://hivetechs.io/pricing#credit-packs')
      }
    }
    
    // Execute command - all features available
    const result = await this.executeCommand(command, args)
    
    // Track usage
    if (this.isConversationCommand(command)) {
      await this.tracker.trackConversation(result.session)
    }
    
    return result
  }
  
  private async isTeamPlan(): Promise<boolean> {
    const config = await this.validator.getUserConfig()
    return config.isTeamPlan
  }
  
  private isTeamCommand(command: string): boolean {
    return command.startsWith('team ')
  }
}
```

### 4. User Experience Enhancements

#### 4.1 Simplified Upgrade Prompts
```typescript
class UpgradePrompts {
  showTeamFeaturePrompt(): void {
    console.log(`
╭────────────────────────────────────────────────────────────╮
│ 👥 Team features require Team Unlimited plan              │
│                                                            │
│ Team features include:                                     │
│   • Multi-developer access                                │
│   • Team management & analytics                           │
│   • Centralized billing                                   │
│                                                            │
│ 🎯 Upgrade to Team Unlimited ($115/month):                │
│    https://hivetechs.io/pricing                           │
╰────────────────────────────────────────────────────────────╯
    `)
  }
  
  showUsageLimitPrompt(type: 'daily' | 'monthly', remaining: number): void {
    console.log(`
╭────────────────────────────────────────────────────────────╮
│ ⚡ ${type === 'daily' ? 'Daily' : 'Monthly'} limit reached │
│                                                            │
│ You have ${remaining} conversations remaining this ${type}.│
│                                                            │
│ 💡 Options to continue:                                   │
│   • Upgrade your plan for higher limits                   │
│   • Purchase conversation credits (never expire)          │
│                                                            │
│ 🛒 View options: https://hivetechs.io/pricing             │
╰────────────────────────────────────────────────────────────╯
    `)
  }
}
```

#### 4.2 Usage Dashboard
```typescript
class UsageDashboard {
  async showDashboard(): Promise<void> {
    const usage = await this.getUsageStats()
    const flags = await this.validator.getFeatureFlags()
    
    console.log(`
╭─── Hive Usage Dashboard ────────────────────────────────────╮
│                                                            │
│ Plan: ${this.config.subscriptionTier.toUpperCase().padEnd(15)} │
│ Daily: ${usage.daily.conversations}/${flags.dailyLimit === -1 ? '∞' : flags.dailyLimit} conversations ${this.getUsageBar(usage.daily.conversations, flags.dailyLimit)} │
│ Monthly: ${usage.monthly.conversations}/${flags.monthlyLimit === -1 ? '∞' : flags.monthlyLimit} conversations ${this.getUsageBar(usage.monthly.conversations, flags.monthlyLimit)} │
│                                                            │
│ This month:                                                │
│   💬 ${usage.monthly.conversations} conversations              │
│   🎯 ${usage.monthly.avgConsensus.toFixed(1)}% avg consensus   │
│   💰 $${(usage.monthly.costCents / 100).toFixed(2)} estimated cost │
│                                                            │
│ Available features:                                        │
${this.getFeatureList(flags).map(f => `│   ${f}`).join('\n')}
│                                                            │
╰────────────────────────────────────────────────────────────╯
    `)
  }
}
```

### 5. Implementation Phases

#### Phase 1: Core Infrastructure (Week 1-2)
1. ✅ Set up authentication system
2. ✅ Create local SQLite usage database
3. ✅ Implement basic feature flag system
4. ✅ Add subscription validation service

#### Phase 2: Usage Tracking (Week 3)
1. ✅ Implement conversation tracking
2. ✅ Add daily/monthly limit enforcement
3. ✅ Create usage dashboard command
4. ✅ Add pre-conversation limit checks

#### Phase 3: Feature Gates (Week 4)
1. ✅ Implement export feature restrictions
2. ✅ Add API access controls
3. ✅ Create analytics feature gates
4. ✅ Add webhook restrictions

#### Phase 4: Team Features (Week 5)
1. ✅ Implement team management
2. ✅ Add team API key management system (centralized key creation, rotation, and revocation)
3. ✅ Create audit logging system
4. ✅ Add team dashboard

#### Phase 5: User Experience (Week 6)
1. ✅ Add upgrade prompts and messaging
2. ✅ Implement graceful error handling
3. ✅ Create usage visualization
4. ✅ Add offline mode support

### 6. Server-Side Integration

#### 6.1 API Endpoints Needed
```typescript
// Subscription management
GET  /api/v1/user/subscription
POST /api/v1/user/subscription/upgrade
GET  /api/v1/user/usage/current
POST /api/v1/user/usage/sync

// Team management
GET  /api/v1/teams/:teamId/members
POST /api/v1/teams/:teamId/invite
GET  /api/v1/teams/:teamId/audit-log

// Credit system
GET  /api/v1/user/credits/balance
POST /api/v1/user/credits/purchase
POST /api/v1/user/credits/consume
```

#### 6.2 Database Schema Updates
```sql
-- Add to existing users table
ALTER TABLE users ADD COLUMN credits_balance INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN subscription_tier TEXT DEFAULT 'free';
ALTER TABLE users ADD COLUMN subscription_expires_at TIMESTAMP;
ALTER TABLE users ADD COLUMN team_id UUID;

-- Usage tracking
CREATE TABLE user_usage (
  user_id UUID REFERENCES users(id),
  date DATE,
  conversations_count INTEGER DEFAULT 0,
  tokens_used INTEGER DEFAULT 0,
  cost_cents INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, date)
);

-- Credit transactions
CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  transaction_type TEXT CHECK (transaction_type IN ('purchase', 'usage', 'refund')),
  amount INTEGER,
  balance_after INTEGER,
  description TEXT,
  paddle_transaction_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7. Testing Strategy

#### 7.1 Unit Tests
- ✅ Feature flag calculation logic
- ✅ Usage limit validation
- ✅ Subscription tier progression
- ✅ Database operations

#### 7.2 Integration Tests
- ✅ CLI command feature gates
- ✅ Usage tracking accuracy
- ✅ Authentication flow
- ✅ Server sync operations

#### 7.3 User Experience Tests
- ✅ Upgrade prompts and flows
- ✅ Limit reached scenarios
- ✅ Offline mode functionality
- ✅ Error message clarity

### 8. Migration Plan

#### 8.1 Existing User Migration
1. ✅ Add subscription detection for existing users
2. ✅ Migrate usage history to new tracking system
3. ✅ Preserve existing configurations
4. ✅ Graceful fallback for authentication issues

#### 8.2 Backward Compatibility
1. ✅ Support legacy command syntax
2. ✅ Maintain existing config file format compatibility
3. ✅ Provide migration helpers
4. ✅ Clear deprecation warnings

## Implementation Timeline

### Week 1-2: Foundation
- Set up authentication and subscription validation
- Create local usage database
- Implement basic feature flags

### Week 3: Usage Tracking
- Add conversation tracking
- Implement limit enforcement
- Create usage dashboard

### Week 4: Feature Gates
- Add export restrictions
- Implement API access controls
- Create analytics gates

### Week 5: Team Features
- Add team management
- Implement audit logging
- Create team dashboard

### Week 6: Polish
- Add upgrade prompts
- Improve error handling
- Create usage visualization

## Success Metrics

1. **Conversion Rate**: % of free users upgrading to paid plans
2. **Feature Adoption**: Usage of premium features by tier
3. **Retention**: Monthly active users by subscription tier
4. **Support Load**: Reduction in subscription-related support tickets
5. **User Satisfaction**: NPS scores by subscription tier

## Risk Mitigation

1. **Offline Mode**: CLI continues working without internet
2. **Grace Periods**: 24-hour grace period for expired subscriptions
3. **Credit System**: Purchase additional conversations as needed
4. **Granular Permissions**: Features can be enabled/disabled individually
5. **Usage Sync**: Local usage syncs to server when online

This implementation plan provides a comprehensive roadmap for enforcing subscription features in the hive.ai CLI while maintaining excellent user experience and clear upgrade paths.