# 📊 Interactive Dashboard Documentation

## What is the Interactive Dashboard?

The Interactive Dashboard is like having a **mission control center** for all your AI usage. Think of it as your smartphone's screen time report, but for AI - showing you exactly how much you're using, what it's costing, and how well it's performing, all updated in real-time.

Just like how your car's dashboard shows speed, fuel level, and engine status at a glance, our AI dashboard gives you instant visibility into your AI operations without needing to dig through logs or run complex commands.

## Why Do You Need an Interactive Dashboard?

### The Problem Without a Dashboard

Using AI without a dashboard is like driving a car with no speedometer or fuel gauge:

**❌ You don't know:**
- How much AI you're using right now
- Whether you're about to hit your budget limit
- Which AI models are performing best
- If there are any problems that need attention

**❌ This leads to:**
- Surprise budget overruns
- Performance issues going unnoticed
- Missing optimization opportunities
- No early warning of problems

### How the Dashboard Helps

**✅ You get:**
- Real-time usage monitoring (like a live speedometer)
- Budget status at a glance (like a fuel gauge)
- Performance metrics (like engine diagnostics)
- Instant alerts for issues (like warning lights)

**✅ This means:**
- Always know your current status
- Catch problems before they become expensive
- Optimize performance in real-time
- Make informed decisions quickly

## How the Interactive Dashboard Works (Simple Explanation)

### Real-Time Data Collection

Every second, the dashboard automatically gathers information:

```
🔄 Live Data Stream:
- Current AI requests per minute
- Budget used today: $2.45 / $10.00
- Average response time: 2.3 seconds
- Success rate: 98.7%
- Most used model: GPT-4
- Cost trend: ↗️ 15% increase
```

**This happens automatically** - you don't need to refresh or run commands.

### Smart Visualization

The dashboard turns raw numbers into easy-to-understand visuals:

```
📊 Visual Elements:
- Progress bars for budget usage
- Line charts for cost trends
- Color-coded status indicators
- ASCII art charts for terminal display
- Real-time counters
```

### Intelligent Alerts

The dashboard watches for important changes:

```
🚨 Smart Alerts:
"Budget Alert: 80% of daily limit used"
"Performance Alert: Response time increased 40%"
"Cost Alert: Spending 2x normal rate"
"Success Alert: Error rate above 5%"
```

## Understanding Your Dashboard Layout

### Main Dashboard View

When you run `hive dashboard show`, you see:

```
╭─────────────────────────────────────────────────────────────────╮
│                     🎯 HIVE AI DASHBOARD                       │
├─────────────────────────────────────────────────────────────────┤
│ 💰 TODAY'S SPENDING                    ⚡ PERFORMANCE          │
│    $2.45 / $10.00 (24.5%) ████▒▒▒▒▒   📈 Avg Response: 2.3s   │
│    Trend: ↗️ +15% vs yesterday         ✅ Success Rate: 98.7%   │
│                                                                 │
│ 🔥 LIVE ACTIVITY                       🎯 TOP MODELS          │
│    12 requests/min                     1. GPT-4: 45 uses      │
│    Current model: Claude-3             2. Claude-3: 23 uses    │
│    Queue: 0 pending                    3. GPT-3.5: 12 uses     │
│                                                                 │
│ 📊 USAGE PATTERN (Last 6 Hours)                                │
│    ████████▒▒▒▒▒▒▒▒▒▒ Peak: 3 PM                               │
│                                                                 │
│ 💡 INSIGHTS                                                    │
│    • Consider GPT-3.5 for simple tasks to save $3.20/day      │
│    • Usage spike detected at 2 PM - budget accordingly        │
╰─────────────────────────────────────────────────────────────────╯

Last updated: 2 seconds ago | Auto-refresh: ON | Press 'q' to quit
```

### Compact Layout

For smaller terminals, use compact mode:

```bash
hive dashboard show --layout compact
```

```
🎯 HIVE DASHBOARD | $2.45/$10 (24%) | 12 req/min | 2.3s avg
💡 Switch to GPT-3.5 for simple tasks → Save $3.20/day
```

### Detailed Layout

For comprehensive information:

```bash
hive dashboard show --layout detailed
```

Shows expanded metrics, additional charts, and more insights.

## Dashboard Configuration

### Basic Setup

```bash
# Start the dashboard
hive dashboard show

# Live dashboard with auto-refresh
hive dashboard live

# Configure refresh rate (seconds)
hive dashboard config --refresh-interval 10

# Change theme
hive dashboard config --theme dark
hive dashboard config --theme light
```

### Theme Options

**Dark Theme (Default):**
- Best for dark terminals
- Easy on eyes for long viewing
- Professional appearance

**Light Theme:**
- Better for light backgrounds
- Good for screenshots/presentations
- High contrast text

**Auto Theme:**
- Automatically matches terminal settings
- Switches based on time of day
- Adapts to system preferences

### Layout Configuration

```bash
# Set default layout
hive dashboard config --layout detailed

# Available layouts:
hive dashboard config --layout compact     # Minimal information
hive dashboard config --layout detailed    # Full information
hive dashboard config --layout minimal     # Essential metrics only
```

## Real-Time Monitoring Features

### Live Updates

The dashboard updates automatically every few seconds:

```bash
# Start live monitoring
hive dashboard live

# Set custom refresh rate
hive dashboard live --refresh 5

# Monitor specific metrics
hive dashboard live --focus cost,performance
```

### Auto-Refresh Controls

```bash
# Enable/disable auto-refresh
hive dashboard config --auto-refresh true
hive dashboard config --auto-refresh false

# Pause refresh temporarily (press 'p' in live mode)
# Resume refresh (press 'r' in live mode)
# Quit dashboard (press 'q' in live mode)
```

### Alert Integration

The dashboard shows real-time alerts:

```
🚨 ACTIVE ALERTS:
⚠️  Budget: 80% of daily limit used
⚠️  Performance: Response time increased 40%
✅ All systems: Normal operation
```

## Understanding Dashboard Metrics

### Budget Metrics

**Budget Usage Bar:**
```
$2.45 / $10.00 (24.5%) ████▒▒▒▒▒▒
```
- Shows current spending vs daily budget
- Visual progress bar indicates percentage used
- Color changes from green → yellow → red as limit approaches

**Spending Trend:**
```
Trend: ↗️ +15% vs yesterday
```
- Compares today's spending to previous day
- ↗️ = increasing, ↘️ = decreasing, → = stable
- Percentage shows magnitude of change

### Performance Metrics

**Response Time:**
```
📈 Avg Response: 2.3s
```
- Average time for AI to respond
- Updated continuously throughout the day
- Alert if significantly slower than usual

**Success Rate:**
```
✅ Success Rate: 98.7%
```
- Percentage of requests that completed successfully
- Tracks errors, timeouts, and failures
- Alert if rate drops below threshold

### Activity Metrics

**Request Rate:**
```
12 requests/min
```
- How many AI requests you're making per minute
- Shows current activity level
- Helps predict budget usage

**Queue Status:**
```
Queue: 0 pending
```
- Number of requests waiting to be processed
- Indicates system load and performance
- Higher numbers may mean slower responses

### Model Usage

**Top Models:**
```
🎯 TOP MODELS
1. GPT-4: 45 uses (67%)
2. Claude-3: 23 uses (25%)
3. GPT-3.5: 12 uses (8%)
```
- Shows which models you use most
- Percentage of total usage
- Helps identify cost optimization opportunities

## Dashboard Navigation

### Interactive Commands

While viewing the dashboard, you can use these keyboard shortcuts:

```
DASHBOARD CONTROLS:
'r' - Refresh now
'p' - Pause auto-refresh
's' - Resume auto-refresh
'c' - Change layout (cycles through options)
't' - Toggle theme
'h' - Show help
'q' - Quit dashboard
```

### Quick Actions

```bash
# Export current dashboard data
hive dashboard export

# Save dashboard screenshot
hive dashboard screenshot

# Share dashboard summary
hive dashboard share

# Reset dashboard data
hive dashboard reset
```

## Customizing Your Dashboard

### Widget Configuration

Choose which information to display:

```bash
# Show only cost information
hive dashboard config --widgets cost,budget

# Show performance metrics
hive dashboard config --widgets performance,activity

# Show everything (default)
hive dashboard config --widgets all
```

**Available Widgets:**
- `cost` - Spending and budget information
- `budget` - Budget usage and alerts
- `performance` - Response times and success rates
- `activity` - Current usage and request rates
- `models` - Model usage statistics
- `insights` - Optimization recommendations
- `alerts` - Active warnings and notifications

### Display Preferences

```bash
# Hide insights section
hive dashboard config --hide-insights

# Show extended statistics
hive dashboard config --show-extended-stats

# Use ASCII charts
hive dashboard config --ascii-charts true

# Use Unicode characters
hive dashboard config --unicode true
```

## Dashboard for Beginners

### First Time Setup

```bash
# Step 1: Check if dashboard is available
hive dashboard status

# Step 2: Configure basic settings
hive dashboard config --theme dark --layout detailed

# Step 3: Start your first dashboard session
hive dashboard show
```

### Understanding the Colors

**Budget Usage Colors:**
- 🟢 Green (0-50%): Safe spending level
- 🟡 Yellow (50-80%): Moderate usage, watch closely
- 🟠 Orange (80-95%): High usage, consider slowing down
- 🔴 Red (95-100%): Near limit, urgent attention needed

**Performance Colors:**
- 🟢 Green: Normal operation (under 3 seconds)
- 🟡 Yellow: Slower than usual (3-5 seconds)
- 🔴 Red: Performance issues (over 5 seconds)

**Success Rate Colors:**
- 🟢 Green: Excellent (95-100%)
- 🟡 Yellow: Good (90-95%)
- 🔴 Red: Problems detected (under 90%)

### Reading the Charts

**Usage Pattern Chart:**
```
📊 USAGE PATTERN (Last 6 Hours)
████████▒▒▒▒▒▒▒▒▒▒ Peak: 3 PM
```
- Each █ represents high activity
- Each ▒ represents low activity
- Shows when you use AI most
- Helps plan budget and capacity

### Making Sense of Insights

The dashboard provides actionable recommendations:

```
💡 INSIGHTS
• Consider GPT-3.5 for simple tasks to save $3.20/day
• Usage spike detected at 2 PM - budget accordingly
• Claude-3 offers better value for writing tasks
```

**How to use insights:**
1. **Read the suggestion** - What change is recommended?
2. **Understand the benefit** - How much will you save/gain?
3. **Take action** - Implement the suggestion
4. **Monitor results** - Check if the change helped

## Advanced Dashboard Features

### Historical Comparison

```bash
# Compare today vs yesterday
hive dashboard compare --timeframe daily

# Compare this week vs last week
hive dashboard compare --timeframe weekly

# Compare current hour vs same time yesterday
hive dashboard compare --timeframe hourly
```

**Example Comparison:**
```
📊 TODAY VS YESTERDAY
Spending:    $2.45 vs $2.10 (+16.7%) ↗️
Requests:    67 vs 58 (+15.5%) ↗️
Avg Speed:   2.3s vs 2.1s (+9.5%) ↗️
Success:     98.7% vs 99.1% (-0.4%) ↘️

💡 Insight: Similar usage but slightly slower responses
```

### Custom Time Ranges

```bash
# Dashboard for specific time period
hive dashboard show --from "9 AM" --to "5 PM"

# Last N hours
hive dashboard show --last 4h

# Specific date
hive dashboard show --date "2024-01-15"
```

### Export and Sharing

```bash
# Export dashboard as image
hive dashboard export --format png

# Export as data file
hive dashboard export --format json

# Email dashboard summary
hive dashboard email --to boss@company.com

# Generate dashboard URL
hive dashboard share --generate-link
```

## Dashboard Alerts and Notifications

### Setting Up Alerts

```bash
# Budget alerts
hive dashboard alerts add --type budget --threshold 80

# Performance alerts
hive dashboard alerts add --type performance --threshold 5s

# Usage spike alerts
hive dashboard alerts add --type usage --threshold 200%
```

### Alert Types

**Budget Alerts:**
- Trigger when spending reaches percentage of limit
- Can set multiple thresholds (50%, 80%, 95%)
- Available for daily, weekly, monthly budgets

**Performance Alerts:**
- Trigger when response time exceeds threshold
- Can set for average or individual request times
- Helps catch performance degradation early

**Usage Alerts:**
- Trigger when request rate spikes significantly
- Compares to historical patterns
- Helps identify unusual activity

### Notification Methods

```bash
# Desktop notifications
hive dashboard alerts config --desktop true

# Email notifications
hive dashboard alerts config --email your@email.com

# Webhook notifications
hive dashboard alerts config --webhook https://your-api.com/alerts

# Slack notifications
hive dashboard alerts config --slack #ai-monitoring
```

## Troubleshooting Dashboard Issues

### Common Problems

**Dashboard not updating:**
```bash
# Check if auto-refresh is enabled
hive dashboard config --show

# Force refresh
hive dashboard refresh

# Restart dashboard service
hive dashboard restart
```

**Missing data:**
```bash
# Check if monitoring is running
hive monitoring status

# Start monitoring if stopped
hive monitoring start

# Rebuild dashboard data
hive dashboard rebuild
```

**Performance issues:**
```bash
# Reduce refresh rate
hive dashboard config --refresh-interval 30

# Use compact layout
hive dashboard config --layout compact

# Disable expensive widgets
hive dashboard config --widgets cost,budget
```

### Dashboard Performance

**Making the dashboard faster:**
- Use compact or minimal layout for faster updates
- Increase refresh interval for less frequent updates
- Disable widgets you don't need
- Use ASCII charts instead of Unicode

**Reducing resource usage:**
- Set longer refresh intervals (10-30 seconds)
- Use minimal layout for always-on monitoring
- Disable real-time charts if not needed

## Integration with Other Features

### Dashboard + Cost Intelligence

```bash
# Dashboard focused on cost metrics
hive dashboard show --focus cost

# Include budget predictions
hive dashboard config --show-predictions true

# Cost optimization suggestions
hive dashboard insights --focus cost
```

### Dashboard + Analytics

```bash
# Include analytics insights in dashboard
hive dashboard config --include-analytics true

# Show usage trends
hive dashboard config --show-trends true

# Historical comparison overlay
hive dashboard config --show-history true
```

### Dashboard + Model Discovery

```bash
# Show model performance in dashboard
hive dashboard config --show-model-performance true

# Include model recommendations
hive dashboard config --show-recommendations true

# Display new model alerts
hive dashboard config --show-new-models true
```

## Frequently Asked Questions

### General Questions

**Q: Does the dashboard slow down my AI requests?**
A: No. The dashboard only reads usage data and doesn't interfere with AI processing.

**Q: Can I run the dashboard 24/7?**
A: Yes. The dashboard is designed for continuous monitoring and uses minimal resources.

**Q: Does dashboard data count against my usage limits?**
A: No. Dashboard operations don't count toward your AI request limits.

### Usage Questions

**Q: Why don't I see recent requests in the dashboard?**
A: There may be a small delay (1-2 seconds) for data to appear. Check if auto-refresh is enabled.

**Q: Can I see data from last week?**
A: Yes, use time range commands: `hive dashboard show --last 7d`

**Q: How accurate is the cost information?**
A: Very accurate. Costs are calculated using real-time pricing data from providers.

### Technical Questions

**Q: Can I customize the dashboard layout completely?**
A: Yes, you can configure widgets, themes, layouts, and what information to show.

**Q: Does the dashboard work without internet?**
A: Local usage data works offline, but real-time pricing and model updates require internet.

**Q: Can I integrate dashboard data with other tools?**
A: Yes, via export functions and webhook notifications.

## Next Steps

### Getting Started Checklist

1. **✅ Start your first dashboard**: `hive dashboard show`
2. **✅ Configure your preferences**: `hive dashboard config`
3. **✅ Set up alerts**: `hive dashboard alerts add --type budget --threshold 80`
4. **✅ Try live monitoring**: `hive dashboard live`
5. **✅ Export your first report**: `hive dashboard export`

### Advanced Usage

1. **Create custom dashboard layouts** for different use cases
2. **Set up automated alerts** for budget and performance monitoring
3. **Integrate with team workflows** using export and sharing features
4. **Build custom reports** combining dashboard data with analytics

### Learning More

- **[Cost Intelligence](/documentation/cost-intelligence)** - Advanced budget management features
- **[Analytics & Insights](/documentation/analytics-insights)** - Deep usage analysis and recommendations
- **[Real-time Monitoring](/documentation/real-time-monitoring)** - Comprehensive monitoring and alerting

---

## 🚀 **Ready to Master Your AI Operations?**

Transform your AI usage visibility with the **most advanced interactive dashboard** designed specifically for multi-model AI platforms.

**Why our dashboard is essential:**
- 📊 **Real-Time Intelligence** - Live monitoring with instant updates and alerts
- 💰 **Cost Control** - Never exceed budgets with visual spending tracking
- ⚡ **Performance Insights** - Optimize response times and success rates
- 🎯 **Smart Recommendations** - AI-powered suggestions for better efficiency

### **Start Your Dashboard Journey**

```bash
# Install the platform
npm install -g @hivetechs/hive-ai

# Launch your first dashboard
hive dashboard show

# Set up live monitoring
hive dashboard live --refresh 5
```

### **Next Steps**
1. **[Start Free Trial](https://store.hivetechs.io)** - Access full dashboard features instantly
2. **[Cost Intelligence](/documentation/cost-intelligence)** - Advanced budget management integration
3. **[Real-time Monitoring](/documentation/real-time-monitoring)** - Comprehensive alerting and monitoring

**Stop flying blind with your AI usage. Get complete visibility with interactive dashboards.**

For complete documentation, visit our [support page](/support) or check the [complete CLI guide](/documentation/cli-tools-guide).