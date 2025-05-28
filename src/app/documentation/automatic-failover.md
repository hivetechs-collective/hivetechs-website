# 🛡️ Automatic Failover & Redundancy Documentation

## What is Automatic Failover?

Automatic failover is like having a backup generator for your AI access. Just as a backup generator automatically kicks in when your main power goes out, our failover system automatically switches to backup AI providers when your primary provider has issues.

Think of it as "AI insurance" - you never have to worry about being stuck without AI access because the system automatically finds working alternatives within seconds.

## Why Do You Need Automatic Failover?

### The Single Provider Problem

Relying on just one AI provider is like having only one route to work:

**❌ What can go wrong:**
- **Service Outages** - Even major providers like OpenAI go down sometimes
- **Rate Limits** - Hit your usage limit and get locked out
- **Regional Issues** - Provider works in US but not your location
- **API Changes** - Provider changes their system and breaks your workflow
- **Cost Spikes** - Provider raises prices unexpectedly

**❌ This means:**
- Your work stops completely when issues occur
- No backup plan when providers fail
- Lost productivity during outages
- Stress from unpredictable access

### How Failover Solves This

**✅ With automatic failover:**
- **Zero Downtime** - Instant switching to working providers
- **Transparent Operation** - You don't even notice when it switches
- **Cost Protection** - Automatically avoid expensive providers when cheaper ones work
- **Geographic Resilience** - Access from anywhere in the world
- **Future-Proof** - Protected against any single provider's changes

**✅ This means:**
- Your AI workflow never stops
- Peace of mind knowing you're always covered
- Consistent productivity regardless of provider issues
- Better costs through intelligent routing

## How Automatic Failover Works

### Real-Time Health Monitoring

Our system continuously monitors all your configured providers:

```
🔍 Continuous Health Checks (Every 30 seconds):

Provider: OpenAI
- Response Time: 2.1s ✅ Good
- Error Rate: 0.3% ✅ Excellent  
- Success Rate: 99.7% ✅ Excellent
- Rate Limit: 85% ⚠️ High Usage
- Status: HEALTHY

Provider: Anthropic  
- Response Time: 1.8s ✅ Excellent
- Error Rate: 0.1% ✅ Excellent
- Success Rate: 99.9% ✅ Excellent  
- Rate Limit: 45% ✅ Good
- Status: HEALTHY

Provider: Google
- Response Time: 8.2s ❌ Slow
- Error Rate: 15.2% ❌ High
- Success Rate: 84.8% ❌ Poor
- Rate Limit: 12% ✅ Good
- Status: DEGRADED
```

### Intelligent Switching Logic

When problems are detected, the system automatically chooses the best alternative:

```
⚡ Failover Decision Process:

1. Detect Issue:
   OpenAI → Error Rate: 25% (Threshold: 20%)
   
2. Evaluate Alternatives:
   Anthropic → Healthy, 1.8s response time
   Google → Degraded, 8.2s response time
   Meta → Healthy, 2.4s response time
   
3. Select Best Option:
   Winner: Anthropic (fastest + healthiest)
   
4. Switch Instantly:
   Next request → Routed to Anthropic
   User → Sees no interruption
   
5. Monitor Recovery:
   Continue checking OpenAI for recovery
   Switch back when healthy
```

### Recovery and Switch-Back

The system automatically returns to your preferred provider when it recovers:

```
🔄 Recovery Process:

1. OpenAI Issue Detected → Switch to Anthropic
2. Continue monitoring OpenAI health
3. OpenAI shows 5 minutes of stable performance
4. Gradually test OpenAI with small percentage of traffic
5. Full switch back when confirmed stable
6. Log: "Switched back to OpenAI at 3:45 PM"
```

## Types of Failover Protection

### 1. Provider-Level Failover

**What it protects against:** Entire provider outages

**Example scenario:**
```
Primary: OpenAI (your preferred choice)
Backup 1: Anthropic (similar quality)
Backup 2: Google (cost-effective alternative)
Emergency: Local model (works offline)
```

**When it activates:**
- OpenAI API completely down
- Authentication issues with OpenAI
- Regional blocking of OpenAI

### 2. Model-Level Failover

**What it protects against:** Specific model issues

**Example scenario:**
```
Task: Coding assistance
Primary: GPT-4 (best quality)
Backup 1: Claude-3-Opus (comparable quality)  
Backup 2: Code Llama (specialized for coding)
Budget: GPT-3.5-Turbo (cost-effective)
```

**When it activates:**
- GPT-4 specifically having issues
- GPT-4 rate limits reached
- GPT-4 too expensive for current budget

### 3. Performance-Based Failover

**What it protects against:** Poor performance

**Example scenario:**
```
Response Time Thresholds:
- Excellent: < 3 seconds
- Good: 3-6 seconds  
- Poor: > 6 seconds

Current Status:
OpenAI: 12 seconds (Poor) → Switch to Anthropic: 2.1 seconds
```

**When it activates:**
- Provider responding too slowly
- Consecutive timeout errors
- Quality degradation detected

### 4. Cost-Based Failover

**What it protects against:** Budget overruns

**Example scenario:**
```
Budget Rules:
- Daily limit: $5.00
- Current spending: $4.80
- Remaining: $0.20

Next request would cost $0.35 with GPT-4
→ Switch to GPT-3.5-Turbo ($0.08)
→ Stay within budget
```

**When it activates:**
- Approaching daily/monthly budget limits
- Provider prices spike unexpectedly
- Cost-effective alternatives available

## Setting Up Automatic Failover

### Basic Configuration

Get started with minimal setup:

```bash
# Enable automatic failover
hive failover enable

# Set primary and backup providers
hive failover configure \
  --primary openai \
  --backup-1 anthropic \
  --backup-2 google

# Set failover sensitivity (how quickly to switch)
hive failover sensitivity medium  # conservative, medium, aggressive
```

**Configuration result:**
```
✅ Automatic Failover Configured

Primary Provider: OpenAI (GPT-4)
Backup Providers: 
  1. Anthropic (Claude-3-Opus)
  2. Google (Gemini-Pro)
  
Health Check Frequency: 30 seconds
Failover Threshold: 20% error rate
Recovery Wait Time: 5 minutes

Status: ACTIVE - Monitoring started
```

### Advanced Provider Configuration

Fine-tune your failover setup:

```bash
# Configure specific models for each provider
hive failover model-mapping \
  --openai "gpt-4" \
  --anthropic "claude-3-opus" \
  --google "gemini-pro" \
  --meta "llama-2-70b"

# Set provider-specific thresholds
hive failover thresholds \
  --response-time 5s \
  --error-rate 15% \
  --success-rate 85%

# Configure different rules for different task types
hive failover rules create coding \
  --primary "code-llama" \
  --backup "gpt-4" \
  --threshold-error-rate 10%
```

### Health Check Configuration

Customize monitoring behavior:

```bash
# Set health check frequency
hive failover health-checks \
  --frequency 30s \
  --timeout 10s \
  --retries 3

# Configure what to monitor
hive failover monitoring \
  --check-response-time true \
  --check-error-rate true \
  --check-rate-limits true \
  --check-cost-changes true

# Set up alerting
hive failover alerts \
  --email your@email.com \
  --slack #ai-alerts \
  --webhook https://your-api.com/failover-alert
```

## Understanding Failover Status

### Monitoring Dashboard

Check your failover system status:

```bash
# Quick status check
hive failover status

# Detailed health report
hive failover health --detailed

# Recent failover events
hive failover history --last 24h
```

**Example Status Output:**
```
🛡️ Failover System Status

Overall Status: HEALTHY ✅
Active Monitoring: 4 providers
Last Failover: 2 hours ago (OpenAI → Anthropic)

Provider Health:
┌─────────────┬────────┬─────────────┬───────────┬─────────┐
│ Provider    │ Status │ Response    │ Error     │ Uptime  │
│             │        │ Time        │ Rate      │         │
├─────────────┼────────┼─────────────┼───────────┼─────────┤
│ OpenAI      │ 🟢 GOOD│ 2.1s        │ 0.8%      │ 99.2%   │
│ Anthropic   │ 🟢 GOOD│ 1.9s        │ 0.2%      │ 99.8%   │
│ Google      │ 🟡 SLOW│ 6.2s        │ 2.1%      │ 98.1%   │
│ Meta        │ 🔴 DOWN│ Timeout     │ 100%      │ 87.3%   │
└─────────────┴────────┴─────────────┴───────────┴─────────┘

Current Routing:
- Consensus requests → Anthropic (best overall)
- Coding tasks → OpenAI (preferred for coding)
- Simple questions → Google (cost-effective)
- Meta → Disabled (poor reliability)

💡 Recommendation: Consider removing Meta as backup due to poor performance
```

### Failover Event Logs

Track when and why failovers occur:

```bash
# Recent failover events
hive failover events --last 7days

# Specific provider events
hive failover events --provider openai

# Events by type
hive failover events --type timeout
```

**Example Event Log:**
```
📋 Recent Failover Events (Last 7 Days)

2024-01-15 14:32:18 - FAILOVER TRIGGERED
├─ From: OpenAI (GPT-4)
├─ To: Anthropic (Claude-3-Opus)  
├─ Reason: Error rate 25.3% > 20% threshold
├─ Duration: 00:23:45
└─ Impact: 0 failed requests (seamless switch)

2024-01-14 09:15:42 - FAILOVER RECOVERED  
├─ Provider: Google (Gemini-Pro)
├─ Issue: Response time improved 8.2s → 3.1s
├─ Restored: As backup option
└─ Status: Monitoring for stability

2024-01-13 16:44:33 - COST FAILOVER
├─ From: GPT-4 ($0.030/1K tokens)
├─ To: GPT-3.5-Turbo ($0.002/1K tokens)
├─ Reason: Daily budget 90% consumed
└─ Savings: $12.30 prevented overspend
```

## Advanced Failover Strategies

### Intelligent Load Balancing

Distribute requests across multiple healthy providers:

```bash
# Enable load balancing
hive failover load-balance enable

# Set distribution strategy
hive failover strategy \
  --method "performance_weighted" \
  --weights "speed:40,cost:30,quality:30"

# Configure provider weights
hive failover weights \
  --openai 0.5 \
  --anthropic 0.3 \
  --google 0.2
```

**How it works:**
```
Request Distribution (based on current performance):

OpenAI (50% weight):
- Speed: 2.1s (Good)
- Cost: $0.030 (High)  
- Quality: 94/100 (Excellent)
→ Gets 40% of requests

Anthropic (30% weight):
- Speed: 1.9s (Excellent)
- Cost: $0.015 (Medium)
- Quality: 92/100 (Excellent)  
→ Gets 45% of requests (bonus for speed)

Google (20% weight):
- Speed: 3.2s (Fair)
- Cost: $0.001 (Excellent)
- Quality: 85/100 (Good)
→ Gets 15% of requests
```

### Geographic Failover

Ensure access from anywhere in the world:

```bash
# Configure regional providers
hive failover regions \
  --us-east "openai,anthropic" \
  --eu-west "anthropic,mistral" \
  --asia-pacific "google,anthropic"

# Auto-detect optimal region
hive failover geo-optimization enable

# Set region-specific failover rules
hive failover region-rules \
  --prefer-local true \
  --max-latency 3s
```

### Consensus-Specific Failover

Configure failover for each consensus stage:

```bash
# Different failover rules per stage
hive failover consensus \
  --generator "openai,anthropic,google" \
  --refiner "anthropic,openai" \
  --validator "gpt-4,claude-3-opus" \
  --curator "anthropic,openai"

# Stage-specific thresholds
hive failover consensus-thresholds \
  --validator-error-rate 5% \
  --generator-response-time 10s
```

## Cost-Aware Failover

### Budget Protection

Automatically switch to cheaper alternatives:

```bash
# Set budget thresholds
hive failover budget \
  --daily-limit 10.00 \
  --monthly-limit 200.00 \
  --warning-threshold 80%

# Configure cost-based switching
hive failover cost-rules \
  --prefer-cheap-when-over 50% \
  --emergency-budget-mode 90% \
  --cheap-alternatives "gpt-3.5,gemini-pro"
```

**Budget failover example:**
```
💰 Budget Protection Active

Daily Budget: $10.00
Current Spending: $8.50 (85%)
Remaining: $1.50

Next Request Analysis:
- GPT-4: $0.45 (would exceed 90% threshold)
- Claude-3-Opus: $0.23 (acceptable)
- GPT-3.5-Turbo: $0.08 (preferred for budget mode)

Action: Switching to GPT-3.5-Turbo
Reason: Budget protection (85% > 80% threshold)
```

### Value-Based Switching

Automatically choose best value providers:

```bash
# Enable value optimization
hive failover value-optimization \
  --quality-threshold 85 \
  --cost-sensitivity high \
  --performance-weight 0.4

# Set minimum quality standards
hive failover quality-gates \
  --min-coding-score 80 \
  --min-writing-score 85 \
  --min-reasoning-score 90
```

## Real-World Failover Scenarios

### Scenario 1: OpenAI Outage

**What happened:** OpenAI had a 2-hour outage during peak work hours.

**Without failover:**
- 🔴 Complete work stoppage
- 🔴 Lost 2 hours of productivity  
- 🔴 Stress and frustration
- 🔴 Had to manually find alternatives

**With hive-tools failover:**
```
2024-01-15 10:32:00 - OpenAI error detected
2024-01-15 10:32:03 - Switched to Anthropic (3 seconds)
2024-01-15 12:45:00 - OpenAI recovered, switched back
Result: Zero downtime, seamless work continuation
```

### Scenario 2: Rate Limit Hit

**What happened:** Heavy usage day hit OpenAI rate limits at 3 PM.

**Without failover:**
- 🔴 "Rate limit exceeded" errors
- 🔴 Manual switching between providers
- 🔴 Inconsistent results from different providers

**With hive-tools failover:**
```
2024-01-12 15:00:00 - OpenAI rate limit detected
2024-01-12 15:00:01 - Automatically switched to Anthropic
2024-01-12 15:00:02 - User continued working normally
2024-01-13 00:00:00 - Rate limits reset, switched back
Result: Uninterrupted workflow
```

### Scenario 3: Cost Spike Protection

**What happened:** Mid-month budget nearly exhausted due to complex project.

**Without failover:**
- 🔴 Choose between stopping work or overspending
- 🔴 Difficult manual cost management
- 🔴 Stress about unexpected bills

**With hive-tools failover:**
```
Budget Status: $47.50 used of $50.00 monthly limit (95%)
Action: Automatically switched to cost-effective models
Models used: GPT-3.5-Turbo, Gemini-Pro instead of GPT-4
Result: Completed project within budget
Final spending: $49.20 (98.4% of budget)
```

## Troubleshooting Failover

### Common Issues

**"Failover not triggering when it should"**
```bash
# Check if failover is enabled
hive failover status

# Verify thresholds aren't too strict
hive failover thresholds show

# Test failover manually
hive failover test --provider openai
```

**"Too many failovers happening"**
```bash
# Check if thresholds are too sensitive
hive failover sensitivity conservative

# Increase tolerance levels
hive failover thresholds \
  --error-rate 25% \
  --response-time 8s

# Review recent events
hive failover events --analysis
```

**"Switched to poor-quality provider"**
```bash
# Set minimum quality requirements
hive failover quality-gates \
  --min-overall-score 80

# Configure provider preferences
hive failover preferences \
  --avoid google \
  --prefer "openai,anthropic"

# Update provider rankings
hive failover rankings update
```

### Performance Optimization

**Reduce failover latency:**
```bash
# Increase health check frequency
hive failover health-checks --frequency 15s

# Pre-test backup providers
hive failover pre-testing enable

# Use faster detection methods
hive failover detection fast-mode
```

**Prevent false positives:**
```bash
# Require multiple failures before switching
hive failover confirmation \
  --required-failures 3 \
  --time-window 60s

# Add stability requirements
hive failover stability \
  --min-stable-time 2m \
  --recovery-confirmation 3-checks
```

## Integration with Other Features

### Failover + Analytics

Track failover effectiveness:

```bash
# Failover analytics
hive analytics failover-report

# Cost savings from failover
hive analytics failover-savings

# Downtime prevented
hive analytics failover-uptime
```

### Failover + Model Discovery

Automatically include new providers in failover:

```bash
# Auto-add discovered providers
hive failover auto-discovery enable

# Set criteria for auto-inclusion
hive failover discovery-criteria \
  --min-reliability 95% \
  --min-speed-score 80 \
  --max-cost 0.02
```

### Failover + Cost Intelligence

Smart cost-aware failover decisions:

```bash
# Cost-performance optimization
hive failover cost-performance-mode enable

# Budget-aware provider selection
hive failover budget-awareness high

# Real-time cost comparison
hive failover cost-comparison enable
```

## Frequently Asked Questions

### General Questions

**Q: Does failover work automatically?**
A: Yes, once configured, failover works completely automatically with no manual intervention needed.

**Q: How fast is the switching?**
A: Typically 1-3 seconds. The next request after a failure automatically goes to the backup provider.

**Q: Will I know when failover happens?**
A: You can choose - silent operation or notifications. Check logs anytime with `hive failover events`.

### Technical Questions

**Q: What if all my providers fail?**
A: The system will retry with longer intervals and can fall back to local models if configured.

**Q: Can I prioritize certain providers?**
A: Yes, set preferences with `hive failover preferences --primary openai --backup anthropic`.

**Q: Does failover work with consensus pipeline?**
A: Yes, each consensus stage can have independent failover configuration.

### Performance Questions

**Q: Does failover slow down responses?**
A: No, failover only adds 50-100ms for health monitoring, which runs in the background.

**Q: How reliable is the health monitoring?**
A: Very reliable - it uses the same API endpoints you use, so it accurately reflects real conditions.

**Q: Can I test my failover setup?**
A: Yes, use `hive failover test` to simulate failures and verify your configuration works.

## Next Steps

### Getting Started Checklist

1. **✅ Enable failover**: `hive failover enable`
2. **✅ Configure providers**: `hive failover configure --primary openai --backup anthropic`
3. **✅ Set thresholds**: `hive failover thresholds --error-rate 20%`
4. **✅ Test the system**: `hive failover test`
5. **✅ Monitor status**: `hive failover status`

### Advanced Configuration

1. **Set up cost-aware failover** for budget protection
2. **Configure region-specific failover** for global access
3. **Implement load balancing** for optimal performance
4. **Create custom failover rules** for specific use cases

### Related Features

- **[Cost Intelligence](/documentation/cost-intelligence)** - Budget-aware failover decisions
- **[Performance Benchmarking](/documentation/performance-benchmarking)** - Quality-aware provider selection
- **[Analytics & Insights](/documentation/analytics-insights)** - Track failover effectiveness

---

**Ready to protect your AI workflow with automatic failover?**

```bash
hive failover enable
```

Set up your backup providers now and never worry about AI downtime again. For more help, visit our [support page](/support) or check the [complete CLI guide](/documentation/cli-tools-guide).