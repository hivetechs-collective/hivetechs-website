# hive-tools Complete Platform Guide

Welcome to hive-tools - your complete AI development platform! This guide covers everything from basic consensus to advanced analytics, cost tracking, and performance benchmarking. **No coding experience required** - we'll explain everything in simple terms.

## 🎯 What You'll Learn

- **4-Stage Consensus Pipeline** - Get trustworthy AI answers
- **Advanced Analytics** - Track your AI usage and costs  
- **Performance Benchmarking** - Compare AI models easily
- **Automatic Failover** - Never lose AI access again
- **Cost Intelligence** - Control your AI spending
- **Rich Terminal Experience** - Beautiful, easy-to-use menus

---

## 🚀 Quick Start (Complete Beginner)

### Step 1: Install hive-tools
```bash
# Copy and paste this into your terminal
npm install -g @hivetechs/hive-ai
```

### Step 2: Get Your License Key
1. Visit [store.hivetechs.io](https://store.hivetechs.io)
2. Choose a plan (Free plan available!)
3. Copy your license key

### Step 3: Configure hive-tools
```bash
# Replace YOUR_LICENSE_KEY with your actual key
hive configure --api-key YOUR_LICENSE_KEY
```

### Step 4: Ask Your First Question
```bash
# Try this example - no special formatting needed!
hive consensus "How do I make a website responsive?"
```

**That's it!** The system automatically optimizes your question and gives you a verified, trustworthy answer.

---

## 🧠 The 4-Stage Consensus Pipeline

Think of this like having **4 AI experts** review your question:

### How It Works (Simple Explanation)

1. **🎯 Generator** - Creates a comprehensive first answer
2. **✨ Refiner** - Improves clarity and adds examples  
3. **🔍 Validator** - Fact-checks everything for accuracy
4. **🎨 Curator** - Polishes the final response

### Basic Usage
```bash
# Just ask naturally - no special prompting needed
hive consensus "Explain REST APIs"
hive consensus "How to center a div with CSS?"
hive consensus "What's the difference between var and let in JavaScript?"

# Continue conversations naturally
hive consensus "Based on that, how do I handle errors in APIs?"
```

### Advanced Options
```bash
# Use a specific quality profile
hive consensus "Complex database question" --profile high_quality

# Continue from a previous conversation ID
hive consensus "More details please" --conversation-id abc123
```

---

## 📊 Advanced Analytics & Insights

**What it does:** Tracks how you use AI, what it costs, and gives smart recommendations.

### View Your Analytics Dashboard
```bash
# Opens beautiful interactive menu
hive analytics menu
```

### Quick Analytics Commands
```bash
# See model performance rankings
hive analytics performance

# Check your usage patterns  
hive analytics usage

# Get smart recommendations
hive analytics insights

# Export data for spreadsheets
hive analytics export json
```

### Understanding Your Analytics

**Usage Tracking** - See which AI models you use most
**Cost Analysis** - Track spending and get budget alerts
**Performance Scores** - Find the best models for your needs
**Smart Insights** - AI recommendations for optimization

**Example Insight:** "Your usage increased 23% this week. Consider upgrading to Premium for better cost efficiency."

---

## 🏆 Performance Benchmarking

**What it does:** Tests AI models automatically so you know which ones work best.

### View Model Rankings
```bash
# See the leaderboard
hive benchmark leaderboard

# Test a specific model
hive benchmark run gpt-4 openai

# View all test categories
hive benchmark tests
```

### Understanding Benchmarks

**Test Categories:**
- 🧠 **Reasoning** - Logic and problem-solving
- 💻 **Coding** - Programming tasks
- ✍️ **Writing** - Content creation
- 🔢 **Math** - Mathematical problems
- 🔬 **Science** - Technical knowledge
- 🎨 **Creative** - Creative tasks
- 📚 **Knowledge** - Factual information
- 🌐 **Language** - Translation and language tasks

**Performance Score:** Combines accuracy, speed, and cost-effectiveness (0-100 scale)

---

## 🛡️ Automatic Failover & Redundancy

**What it does:** Automatically switches to backup AI providers when one fails, so you never lose access.

### Check System Health
```bash
# See which providers are working
hive failover status

# Test a specific provider
hive failover health openai

# Start automatic monitoring
hive failover start
```

### Understanding Failover

**Health Monitoring** - Continuously checks if AI providers are working
**Automatic Switching** - Instantly switches to backup when problems detected
**Zero Downtime** - Your work continues uninterrupted

**Example:** If OpenAI goes down, automatically switches to Anthropic without you noticing.

---

## 💰 Cost Intelligence & Budget Management

**What it does:** Tracks AI spending, sets budgets, and alerts you before overspending.

### Cost Management Commands
```bash
# View interactive cost dashboard
hive cost menu

# Quick cost analysis
hive cost analysis

# Set a monthly budget
hive cost budget 50

# Export cost data
hive cost export
```

### Understanding Costs

**Cost Tracking** - See exactly what each AI query costs
**Budget Alerts** - Get warned before hitting limits  
**Spending Projections** - Predict future costs
**Optimization Tips** - Save money with smarter model choices

**Example Budget Alert:** "You've used 80% of your monthly budget. Consider switching to cost-effective models."

---

## 🔍 Model Discovery & Search

**What it does:** Finds and compares AI models from 55+ providers automatically.

### Search & Discovery
```bash
# Search for models
hive models search "coding"

# Compare specific models
hive models compare gpt-4 claude-3-opus

# Discover new providers
hive discover providers

# Update model database
hive models update
```

### Understanding Model Discovery

**Auto-Discovery** - Finds 319+ models automatically
**Smart Search** - Filter by capability, cost, speed
**Real-time Updates** - Always current with latest models
**Easy Comparison** - Side-by-side feature comparison

---

## 🎨 Rich Terminal Experience

**What it does:** Makes the command line beautiful and easy to use with colors, tables, and menus.

### Interactive Menus
```bash
# Main menu - explore everything
hive

# Feature-specific menus
hive analytics menu
hive benchmark menu  
hive cost menu
hive failover menu
```

### Visual Features

**Colorized Output** - Important info highlighted
**Beautiful Tables** - Data shown clearly
**Progress Bars** - See what's happening
**Interactive Menus** - Point and click in terminal
**Real-time Status** - Live updates on operations

---

## 👤 Smart Profile Management

**What it does:** Pre-configured setups for different use cases (coding, writing, cost-saving).

### Profile Commands
```bash
# List available profiles
hive profiles list

# Use a specific profile
hive profiles use cost_effective

# Create custom profile
hive profiles create my_profile

# View profile details
hive profiles show high_quality
```

### Built-in Profiles

**🎯 high_quality** - Best accuracy, higher cost
**💰 cost_effective** - Good results, lower cost  
**⚡ balanced** - Good balance of quality and cost
**🚀 fast** - Quick responses, decent quality

---

## 📚 Knowledge Base & Memory

**What it does:** Remembers everything from your conversations and learns over time.

### Query Your Knowledge
```bash
# Search past conversations
hive query search "React hooks"

# List recent conversations
hive query list

# Get specific conversation
hive query conversation abc123

# Export conversation data
hive query export abc123
```

### Understanding Memory

**Unlimited Context** - No token limits like other AI tools
**Cross-Conversation Learning** - Builds knowledge over time
**Thematic Memory** - Connects related conversations
**Source of Truth** - Verified information stored permanently

---

## 🔧 Configuration & Setup

### Provider Setup
```bash
# Add AI providers (you need API keys)
hive configure-provider OpenAI sk-your-key
hive configure-provider Anthropic sk-ant-your-key

# Test connections
hive test-providers

# List configured providers
hive list-providers
```

### Pipeline Configuration
```bash
# Create custom pipeline
hive configure-pipeline my_pipeline \
  --generator "OpenAI:gpt-4:0.7" \
  --refiner "Anthropic:claude-3-opus:0.5" \
  --validator "Google:gemini-pro:0.3" \
  --curator "OpenAI:gpt-4:0.2"

# Set as default
hive set-default-profile my_pipeline
```

---

## 🎯 Best Practices for Beginners

### 1. Start Simple
```bash
# Just ask naturally - no special formatting
hive consensus "How do I learn programming?"
```

### 2. Use Interactive Menus
```bash
# When in doubt, use menus to explore
hive analytics menu
hive benchmark menu
```

### 3. Monitor Your Costs
```bash
# Check spending regularly
hive cost analysis

# Set budgets to avoid surprises
hive cost budget 25
```

### 4. Let Failover Protect You
```bash
# Start monitoring for automatic protection
hive failover start
```

### 5. Learn from Analytics
```bash
# Get smart recommendations
hive analytics insights

# See which models work best for you
hive benchmark leaderboard
```

---

## 🆘 Common Questions & Troubleshooting

### "I got an error about API keys"
```bash
# Check if providers are configured correctly
hive test-providers

# Reconfigure if needed
hive configure-provider OpenAI your-new-key
```

### "The response seems short"
```bash
# Try a higher quality profile
hive consensus "your question" --profile high_quality

# Or ask for more detail
hive consensus "Can you elaborate on that?"
```

### "I want to see my usage"
```bash
# Check analytics dashboard
hive analytics menu

# Or quick usage view
hive analytics usage
```

### "How do I save money?"
```bash
# Get cost optimization tips
hive analytics insights

# Use cost-effective profile
hive profiles use cost_effective
```

---

## 🔗 Related Links

- **[MCP Tools Guide](/documentation/mcp-tool-guide)** - All 41 tools for IDE integration
- **[Features Overview](/features)** - See all platform capabilities
- **[Support](/support)** - Get help when you need it
- **[Pricing](/pricing)** - Choose the right plan

---

## 💡 Remember

- **No prompt engineering needed** - Just ask naturally
- **Everything is remembered** - Build knowledge over time  
- **Stay protected** - Failover keeps you running
- **Monitor costs** - Analytics help optimize spending
- **Use menus** - When in doubt, explore with interactive menus

**You're now ready to use the complete hive-tools platform!** Start with simple questions and explore the advanced features as you become more comfortable.