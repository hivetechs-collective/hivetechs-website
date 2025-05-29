# Quick Start Guide

Get up and running with hive-tools in **under 5 minutes**! This guide covers the essentials for new users.

## 🚀 Installation

### 1. Install hive-tools
Open your terminal and run:
```bash
npm install -g @hivetechs/hive-ai
```

### 2. Get Your License Key
1. Visit **[store.hivetechs.io](https://store.hivetechs.io)**
2. Choose a plan (**Free plan available!**)
3. Copy your license key

### 3. Configure Your License
Replace `YOUR_LICENSE_KEY` with your actual key:
```bash
hive configure --api-key YOUR_LICENSE_KEY
```

### 4. Run Setup Wizard
For the best first-time experience:
```bash
hive setup wizard
```

## ✅ Verify Installation

Test that everything is working:
```bash
# Ask your first question
hive consensus "What is React?"

# Check system status
hive test-providers
```

## 🎯 First Steps

### Basic Usage
```bash
# Ask questions naturally - no special formatting needed
hive consensus "How do I center a div in CSS?"
hive consensus "Explain async/await in JavaScript"
hive consensus "What's the difference between let and const?"
```

### Explore Features
```bash
# Open the main menu
hive

# View the interactive dashboard
hive dashboard

# Check analytics
hive analytics menu
```

## 🔧 Essential Configuration

### Add AI Provider Keys (Optional)
If you have your own API keys:
```bash
# OpenAI
hive configure-provider OpenAI sk-your-openai-key

# Anthropic (Claude)
hive configure-provider Anthropic sk-ant-your-anthropic-key

# Test connections
hive test-providers
```

### Set Your Budget
Protect yourself from unexpected costs:
```bash
# Set a monthly budget (in USD)
hive cost budget 25

# Enable monitoring
hive monitor start
```

### Choose a Profile
Select based on your needs:
```bash
# For best quality
hive profiles use high_quality

# For cost savings
hive profiles use cost_effective

# View all profiles
hive profiles list
```

## 🆘 Common Issues

### "Command not found"
```bash
# Check if npm is installed
npm --version

# If not, install Node.js from nodejs.org
# Then reinstall hive-tools
npm install -g @hivetechs/hive-ai
```

### "Invalid API key"
```bash
# Reconfigure your license
hive configure --api-key YOUR_LICENSE_KEY

# Check configuration
hive config show
```

### "Provider connection failed"
```bash
# Test all providers
hive test-providers

# Check failover status
hive failover status
```

### "Responses are too short/long"
```bash
# Use a different profile
hive profiles use high_quality

# Or specify profile per request
hive consensus "your question" --profile high_quality
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

**Ready to go?** Start with `hive consensus "your first question"` and explore from there!