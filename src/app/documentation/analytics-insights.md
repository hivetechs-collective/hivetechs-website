# 📊 Analytics & Insights Documentation

## What is Analytics & Insights?

Analytics & Insights is like having a personal data scientist that watches how you use AI and gives you smart recommendations to save money and improve results. It's like having a fitness tracker, but for your AI usage instead of your steps.

Imagine if your smartphone told you: "You used maps 50 times this month, spending 3 hours in traffic. Here's a better route that saves 20 minutes daily." That's exactly what our analytics does for your AI usage.

## Why Do You Need Analytics?

### The Problem Without Analytics

Using AI without analytics is like driving with your eyes closed:

**❌ You don't know:**
- How much you're spending on AI each month
- Which AI models work best for your tasks
- When you're wasting money on expensive models for simple questions
- How to optimize your usage for better results

**❌ This leads to:**
- Surprise bills at the end of the month
- Using the wrong (expensive) model for simple tasks
- Missing opportunities to save money
- Poor performance because you don't know what works

### How Analytics Helps

**✅ You get:**
- Real-time spending tracking (like a budget app)
- Smart recommendations (like Netflix suggestions, but for AI models)
- Usage patterns (see when and how you use AI most)
- Cost optimization tips (automatic money-saving suggestions)

**✅ This means:**
- Predictable, controlled AI spending
- Always using the best model for each task
- Automatic alerts before you overspend
- Continuously improving results

## How Analytics Works (Simple Explanation)

### Step 1: Automatic Tracking

Every time you use hive-tools, the system automatically records:

```
📝 What gets tracked:
- Question asked: "How do I center a div?"
- Model used: GPT-4
- Response time: 3.2 seconds
- Cost: $0.045
- Success: ✅ Good response
- Category: Coding question
- Time: 2:30 PM, Tuesday
```

**This happens automatically** - you don't need to do anything.

### Step 2: Smart Analysis

The system analyzes your patterns:

```
🔍 Pattern Recognition:
- 60% of questions are about coding
- Most coding questions could use cheaper models
- You spend most on Thursday afternoons
- GPT-3.5 works just as well for simple tasks
- You're spending 40% more than needed
```

### Step 3: Intelligent Recommendations

Based on your patterns, you get suggestions:

```
💡 Smart Insights:
"You asked 15 coding questions this week using GPT-4 ($1.23).
Claude-3-Haiku could handle 12 of these for $0.18.
Potential savings: $1.05/week ($54/year)"

"Your usage spiked 200% on Thursday. Consider setting 
a daily budget alert to avoid surprises."
```

## Understanding Your Analytics Dashboard

### Main Dashboard Overview

When you run `hive analytics menu`, you see:

```
📊 hive-tools Analytics Dashboard

💰 This Month's Spending
    Total: $12.45
    Budget: $25.00 (50% used)
    Trend: ↗️ 15% increase from last month

🎯 Most Used Models
    1. GPT-4: 45 requests ($8.20)
    2. Claude-3-Opus: 23 requests ($3.15)
    3. GPT-3.5-Turbo: 12 requests ($1.10)

⚡ Performance Summary
    Average response time: 3.4 seconds
    Success rate: 98.7%
    User satisfaction: 4.8/5

💡 Top Insight
    "Switch to GPT-3.5 for simple questions to save $5.30/month"
```

### Usage Patterns

See exactly how you use AI:

```bash
# View usage by time
hive analytics usage --timeframe week

# Usage by category
hive analytics usage --group-by category

# Usage by model
hive analytics usage --group-by model
```

**Example Output:**
```
📈 Weekly Usage Pattern:

Monday:    ████████░░ 12 requests
Tuesday:   ██████░░░░ 8 requests
Wednesday: ███████░░░ 10 requests
Thursday:  ██████████ 15 requests (peak day)
Friday:    █████░░░░░ 7 requests
Saturday:  ██░░░░░░░░ 3 requests
Sunday:    █░░░░░░░░░ 2 requests

💡 Insight: Thursday is your busiest day. Consider pre-loading 
common questions or using faster models for routine tasks.
```

### Cost Analysis

Understand where your money goes:

```bash
# Monthly cost breakdown
hive analytics cost --month current

# Cost by model
hive analytics cost --group-by model

# Cost trends over time
hive analytics cost --timeframe 3months
```

**Example Cost Analysis:**
```
💰 October 2024 Cost Breakdown:

By Model:
GPT-4:           $8.20 (66%) ████████████
Claude-3-Opus:   $3.15 (25%) █████
GPT-3.5-Turbo:   $1.10 (9%)  ██

By Category:
Coding:          $7.45 (60%) ███████████
Writing:         $3.50 (28%) █████
General:         $1.50 (12%) ██

By Day:
Weekdays:        $10.20 (82%)
Weekends:        $2.25 (18%)

💡 Money-saving opportunity: Use Code Llama for coding tasks 
instead of GPT-4 to save $4.20/month (56% reduction)
```

### Performance Metrics

See how well your AI usage performs:

```bash
# Response quality scores
hive analytics performance --metric quality

# Speed analysis
hive analytics performance --metric speed

# Success rates
hive analytics performance --metric success
```

**Example Performance Report:**
```
⚡ Performance Summary (Last 30 Days):

Response Quality:  ████████░░ 8.2/10
Response Speed:    ██████░░░░ 6.0/10  (3.4s average)
Success Rate:      ██████████ 98.7%
User Satisfaction: █████████░ 9.1/10

🎯 Model Performance Comparison:
GPT-4:        Quality: 9.1  Speed: 5.8  Cost: $$$
Claude-3:     Quality: 8.9  Speed: 7.2  Cost: $$
GPT-3.5:      Quality: 7.8  Speed: 8.5  Cost: $

💡 Recommendation: Claude-3 offers the best balance of 
quality and speed for your usage pattern.
```

## Getting Smart Insights

### Understanding Insights

Insights are like having an AI consultant analyze your usage and give personalized advice:

```bash
# Get all insights
hive analytics insights

# Cost-focused insights
hive analytics insights --focus cost

# Performance-focused insights
hive analytics insights --focus performance

# Weekly insight summary
hive analytics insights --weekly-summary
```

### Types of Insights You'll Get

**💰 Cost Optimization Insights:**
```
"You spent $15.30 this week vs $11.20 last week (+37%).
The increase came from using GPT-4 for simple questions.

Recommendation: Create a 'simple_questions' profile using 
GPT-3.5-Turbo. This could save you $8.20/month."
```

**⚡ Performance Optimization Insights:**
```
"Your average response time increased to 4.2 seconds.
This is because 60% of requests went to slower models.

Recommendation: Use Claude-3-Haiku for quick tasks. 
It's 2x faster and 3x cheaper for simple questions."
```

**📈 Usage Pattern Insights:**
```
"Your AI usage peaks on Thursdays (3x normal volume).
You might be cramming work into one day.

Recommendation: Spread work across the week for better 
time management and more consistent costs."
```

**🎯 Model Selection Insights:**
```
"You're using GPT-4 for all coding tasks, but analysis 
shows Code Llama performs equally well for 80% of them.

Recommendation: Switch to Code Llama for routine coding.
Potential monthly savings: $23.50"
```

### Acting on Insights

The system doesn't just tell you what's wrong - it shows you how to fix it:

```bash
# Apply suggested optimizations
hive insights apply cost-optimization

# Create suggested profiles
hive insights apply profile-recommendations

# Set up suggested alerts
hive insights apply alert-recommendations
```

**Example Auto-Application:**
```
✅ Applied cost optimization recommendations:

1. Created "simple_tasks" profile with GPT-3.5-Turbo
2. Set up budget alert at 80% of monthly limit  
3. Configured auto-model-selection for routine tasks
4. Enabled weekly cost review reminders

💰 Estimated monthly savings: $18.40 (35% reduction)
```

## Setting Up Analytics

### Basic Setup (Automatic)

Analytics work automatically, but you can customize them:

```bash
# Check analytics status
hive analytics status

# Enable/disable analytics
hive analytics enable
hive analytics disable

# Set privacy level (local only vs cloud sync)
hive analytics privacy local
```

### Configuring Budget Tracking

Set spending limits and alerts:

```bash
# Set monthly budget
hive analytics budget set 50

# Set spending alerts
hive analytics alerts add --threshold 80 --type percentage
hive analytics alerts add --threshold 40 --type absolute

# Daily spending limits
hive analytics daily-limit 5
```

**Example Budget Setup:**
```
💰 Budget Configuration:

Monthly Budget: $50.00
Current Spending: $12.45 (25%)
Remaining: $37.55

Alerts:
✅ 50% budget used ($25) - Email notification
✅ 80% budget used ($40) - Email + SMS
✅ 90% budget used ($45) - All notifications + pause usage
✅ Daily limit: $3.00 - Pause if exceeded

Next Alert: $12.55 remaining until 50% notification
```

### Custom Categories

Organize your analytics by creating custom categories:

```bash
# Create custom categories
hive analytics category create "client-work"
hive analytics category create "personal-projects"  
hive analytics category create "learning"

# Tag requests with categories
hive consensus "Question about React" --category client-work

# View analytics by category
hive analytics usage --category client-work
```

## Advanced Analytics Features

### Custom Reports

Create detailed reports for specific needs:

```bash
# Monthly report for specific category
hive analytics report --month october --category coding

# Cost efficiency report
hive analytics report --focus cost-efficiency --timeframe quarter

# Model performance comparison report
hive analytics report --compare-models gpt-4,claude-3,gpt-3.5

# Export report as PDF
hive analytics report --export pdf --email boss@company.com
```

### Usage Forecasting

Predict future usage and costs:

```bash
# Predict next month's costs
hive analytics forecast --timeframe month

# Forecast based on current trends
hive analytics forecast --trend current

# What-if scenarios
hive analytics forecast --scenario "20% more usage"
```

**Example Forecast:**
```
🔮 Cost Forecast for November 2024:

Based on October trends:
Predicted spending: $14.25 (±$2.30)
Budget: $25.00
Expected budget usage: 57%

Trend analysis:
- 15% increase in coding questions (seasonal?)
- Slight shift toward cheaper models (good!)
- Thursday usage spike continuing

Recommendations:
- Current budget is sufficient
- Consider upgrading to faster models for Thursday peak
- Set up auto-scaling budget for seasonal increases
```

### Team Analytics

For team usage, get aggregated insights:

```bash
# Team usage summary
hive analytics team --summary

# Individual team member usage
hive analytics team --member john@company.com

# Team cost allocation
hive analytics team --allocate-costs

# Team performance comparison
hive analytics team --compare-performance
```

## Data Export and Integration

### Exporting Analytics Data

Get your data for external analysis:

```bash
# Export as CSV
hive analytics export csv --timeframe month

# Export as JSON
hive analytics export json --detailed

# Export specific metrics
hive analytics export csv --metrics "cost,performance,usage"

# Scheduled exports
hive analytics export schedule weekly --format csv --email report@company.com
```

### Integration with Other Tools

Connect analytics with your existing tools:

```bash
# Send to Google Sheets
hive analytics export google-sheets --spreadsheet-id ABC123

# Webhook integration
hive analytics webhook add https://your-api.com/analytics

# Slack notifications
hive analytics slack configure --channel #ai-usage

# Dashboard integration
hive analytics api-key generate  # For custom dashboards
```

## Privacy and Data Security

### What Data is Collected

**✅ We track:**
- Model usage (which model, when, cost)
- Response times and success rates
- Usage patterns and trends
- Cost and performance metrics

**❌ We DON'T track:**
- Your actual questions or prompts
- The responses you receive
- Personal information
- Sensitive data content

### Data Storage Options

Choose how your analytics data is stored:

```bash
# Local storage only (most private)
hive analytics storage local-only

# Cloud sync for multi-device access
hive analytics storage cloud-sync

# Team shared analytics
hive analytics storage team-shared

# Export and delete (compliance)
hive analytics storage export-and-delete
```

### Data Retention

Control how long data is kept:

```bash
# Set retention period
hive analytics retention 90days

# Auto-delete old data
hive analytics auto-cleanup enable

# Manual data cleanup
hive analytics cleanup --older-than 6months
```

## Troubleshooting Analytics

### Common Issues

**"Analytics not showing recent data"**
```bash
# Force analytics refresh
hive analytics refresh

# Check if tracking is enabled
hive analytics status

# Rebuild analytics database
hive analytics rebuild
```

**"Cost calculations seem wrong"**
```bash
# Verify provider pricing updates
hive analytics update-pricing

# Check for missing cost data
hive analytics validate-costs

# Recalculate all costs
hive analytics recalculate-costs
```

**"Performance metrics are inaccurate"**
```bash
# Validate performance data
hive analytics validate-performance

# Reset performance baselines
hive analytics reset-baselines

# Check system clock synchronization
hive analytics check-timing
```

### Performance Optimization

If analytics are slow:

```bash
# Optimize analytics database
hive analytics optimize-db

# Reduce data granularity
hive analytics granularity daily  # instead of hourly

# Archive old data
hive analytics archive --older-than 1year
```

## Beginner's Analytics Workflow

### Week 1: Getting Started

```bash
# Day 1: Check initial status
hive analytics status

# Day 3: Set your first budget
hive analytics budget set 25

# Day 7: Review your first week
hive analytics usage --timeframe week
```

### Week 2: Understanding Patterns

```bash
# Compare week 1 vs week 2
hive analytics compare --week1 --week2

# Look at your first insights
hive analytics insights

# Set up basic alerts
hive analytics alerts add --threshold 50 --type percentage
```

### Month 1: Optimization

```bash
# Monthly review
hive analytics report --month current

# Apply first optimizations
hive insights apply cost-optimization

# Set up automatic monthly reports
hive analytics schedule monthly-report
```

### Month 2+: Advanced Usage

```bash
# Create custom categories
hive analytics category create "work-projects"

# Set up forecasting
hive analytics forecast --setup

# Export data for advanced analysis
hive analytics export csv --detailed
```

## Frequently Asked Questions

### General Questions

**Q: Is my data private?**
A: Yes. We only track usage patterns and costs, never your actual questions or responses. All data stays on your machine by default.

**Q: Does analytics tracking cost extra?**
A: No. Analytics tracking is free and uses minimal resources.

**Q: Can I turn off analytics?**
A: Yes: `hive analytics disable`. But you'll lose cost tracking and optimization recommendations.

### Usage Questions

**Q: How accurate are the cost calculations?**
A: Very accurate. We track actual API costs to the cent and update pricing daily.

**Q: Why don't I see immediate insights?**
A: Insights improve with more data. After a week of usage, you'll get meaningful recommendations.

**Q: Can I compare my usage to others?**
A: For privacy, we don't share individual data. But we can show anonymized industry benchmarks.

### Technical Questions

**Q: How much storage does analytics use?**
A: Minimal - usually under 50MB even after months of usage.

**Q: Can I sync analytics across devices?**
A: Yes, with cloud sync: `hive analytics storage cloud-sync`

**Q: Can I integrate with business intelligence tools?**
A: Yes, via CSV export or API integration: `hive analytics api-key generate`

## Next Steps

### Getting More Value from Analytics

1. **Set up budgets and alerts** to control spending
2. **Review insights weekly** to continuously optimize
3. **Create custom categories** for better organization
4. **Export data regularly** for long-term analysis
5. **Share insights with your team** for collective optimization

### Related Features to Explore

- **[Cost Intelligence](/documentation/cost-intelligence)** - Advanced budget management
- **[Performance Benchmarking](/documentation/performance-benchmarking)** - Detailed model testing
- **[Model Discovery](/documentation/model-discovery)** - Find better models based on analytics

---

**Ready to optimize your AI usage?**

```bash
hive analytics menu
```

Start with your dashboard and begin optimizing immediately. For more help, visit our [support page](/support) or check the [complete CLI guide](/documentation/cli-tools-guide).