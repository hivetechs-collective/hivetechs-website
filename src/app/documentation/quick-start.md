# Quick Start Guide

Get up and running with hive-tools in **under 5 minutes**! This guide covers the essentials for new users.


> **💡 Just Purchased?** If you arrived here after purchasing a subscription, welcome! Follow the steps below to get started.

## 🚀 Installation

```bash
# Install hive-tools globally
npm install -g @hivetechs/hive-ai
```

## ⚡ First-Time Setup

### Run the Setup Wizard
The setup wizard is your **best first step** - it handles everything automatically:

```bash
# Start the interactive setup wizard
hive setup wizard
```

The wizard will guide you through:
1. **License Key** - Enter your license key for full access
2. **AI Provider Setup** - Configure OpenAI, Anthropic, or other providers
3. **Budget Limits** - Protect yourself from unexpected costs
4. **Default Profile** - Optimize for your use case
5. **Quick Test** - Verify everything works

### Quick Setup Option
For the fastest setup:
```bash
# Run quick setup (5 minutes)
hive setup quick
```

## ✨ Your First Commands

Once setup is complete, try these:

```bash
# Open the main menu - great starting point!
hive

# Ask your first question
hive consensus "What is React?"

# View the interactive dashboard
hive dashboard

# Check your configuration
hive config show
```

## 🎯 Essential First Steps

### 1. Explore the Main Menu
The easiest way to discover features:
```bash
hive
```
Navigate with arrow keys, select with Enter.

### 2. Try Basic Queries
```bash
# Ask questions naturally - no special formatting needed
hive consensus "How do I center a div in CSS?"
hive consensus "Explain async/await in JavaScript"
hive consensus "What's the difference between let and const?"
```

### 3. Monitor Your Usage
```bash
# Real-time dashboard
hive dashboard

# Check costs
hive cost summary

# View analytics
hive analytics menu
```

## 🔑 License & Access

### License Key Features
Your license key unlocks:
- Managed AI access without personal API keys
- Advanced analytics and insights
- Priority support
- Commercial usage rights
- All 41 MCP tools

### Community Access
You can also use hive-tools with:
- Your own AI provider API keys (OpenAI, Anthropic, etc.)
- Community features and basic analytics

## 🛠️ Manual Configuration

If you prefer manual setup over the wizard:

### Add AI Providers
```bash
# Add providers one by one
hive provider configure openai YOUR_OPENAI_KEY
hive provider configure anthropic YOUR_ANTHROPIC_KEY

# Test connections
hive test-providers
```

### Set Budget Limits
```bash
# Daily limit
hive budget config --type daily --limit 10.00

# Monthly limit
hive budget config --type monthly --limit 100.00

# Enable alerts
hive budget alerts --desktop
```

## 🆘 Troubleshooting

### "Command not found"
If `hive` command isn't recognized:
```bash
# Reinstall globally
npm install -g @hivetechs/hive-ai

# Verify Node.js is installed
node --version
npm --version

# If not, install from nodejs.org first
```

### "No API providers configured"
```bash
# Run the setup wizard
hive setup wizard

# Or add a provider manually
hive provider configure openai YOUR_KEY
```

### "Provider connection failed"
```bash
# Test all providers
hive test-providers

# Check failover is running
hive failover status

# Start failover if needed
hive failover start
```

### "Budget exceeded" warnings
```bash
# Check current spending
hive cost summary

# Adjust limits
hive budget config --type daily --limit 25.00

# Use cost-effective profile
hive profiles use cost_effective
```

## 📚 What's Next?

### Explore Key Features
- **[Interactive Dashboard](/documentation/cli-tools-guide#-interactive-dashboard)** - Real-time monitoring
- **[Cost Management](/documentation/cli-tools-guide#-cost-intelligence--budget-management)** - Track spending
- **[Analytics](/documentation/cli-tools-guide#-advanced-analytics--insights)** - Usage insights
- **[Benchmarking](/documentation/cli-tools-guide#-performance-benchmarking)** - Compare models

### Learn More
- **[Complete CLI Guide](/documentation/cli-tools-guide)** - All features explained
- **[MCP Tools Guide](/documentation/mcp-tool-guide)** - IDE integration tools
- **[Best Practices](/documentation/cli-tools-guide#-best-practices-for-beginners)** - Pro tips

### Get Help
- **Run:** `hive help` for command reference
- **Visit:** [hivetechs.io/support](/support) for support
- **Email:** support@hivetechs.io

## 💡 Quick Tips

1. **Use menus when stuck** - Just type `hive` for the main menu
2. **No prompt engineering needed** - Ask questions naturally
3. **Set a budget early** - Use `hive cost budget 25` to avoid surprises
4. **Try the dashboard** - `hive dashboard` shows everything at a glance
5. **Failover protects you** - `hive failover start` ensures continuous access

---

**Ready to go?** Start with `hive` to open the main menu and explore from there!

