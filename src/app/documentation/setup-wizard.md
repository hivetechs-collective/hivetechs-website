# 🛠️ Interactive Setup Wizard & Onboarding Documentation

## What is the Interactive Setup Wizard?

The Interactive Setup Wizard is like having a **personal AI assistant guide you through setting up your perfect AI development environment**. Think of it as the "welcome tour" you get when installing a new app, but much more intelligent - it learns about your needs and configures everything automatically.

Instead of reading documentation and manually configuring dozens of settings, the setup wizard asks you simple questions and does all the technical work for you. It's like having an expert friend set up your entire AI toolkit while explaining what everything does.

## Why Do You Need the Setup Wizard?

### The Problem Without Guided Setup

Setting up AI tools manually is like assembling furniture without instructions:

**❌ You face:**
- Overwhelming configuration options with no guidance
- Hours spent reading documentation to understand settings
- Trial and error to find optimal configurations
- Risk of misconfigurations that affect performance
- No clear path from beginner to advanced usage

**❌ This leads to:**
- Frustration and abandoned setups
- Suboptimal configurations that waste money
- Missing important features and capabilities
- Inconsistent settings across different use cases
- No understanding of best practices

### How the Setup Wizard Helps

**✅ You get:**
- **Guided Experience** - Step-by-step setup with clear explanations
- **Intelligent Configuration** - AI-powered recommendations based on your needs
- **Best Practices Built-in** - Proven configurations that work well
- **Quick vs Complete Options** - Choose your level of involvement
- **Educational Approach** - Learn while you configure

**✅ This means:**
- Setup in minutes instead of hours
- Optimal configurations from day one
- Understanding of how everything works
- Confidence to use advanced features
- Ready-to-use AI environment immediately

## How the Setup Wizard Works (Simple Explanation)

### The Intelligent Interview Process

The wizard works like a smart interview that adapts to your answers:

```
🤖 Setup Assistant: "Hi! I'm here to help you set up hive-tools perfectly for your needs."

Step 1: Understanding Your Goals
"What's your primary use case?"
- Professional development work
- Learning and experimentation  
- Team collaboration
- Cost-conscious usage

Step 2: Technical Environment
"What's your technical background?"
- Complete beginner to AI tools
- Some experience with AI/APIs
- Advanced user wanting optimization
- Developer needing integration

Step 3: Budget and Usage Preferences
"How do you prefer to manage costs?"
- Strict budget limits with alerts
- Balanced cost and performance
- Quality-first regardless of cost
- Let me recommend the best approach

Based on your answers, I'll configure:
✅ API providers and keys
✅ Budget limits and monitoring
✅ Usage profiles and defaults
✅ Alert preferences
✅ Dashboard layout
```

## Available Setup Options

### 🚀 Quick Setup (5 minutes)
**Best for:** Getting started immediately with smart defaults

```bash
# Start quick setup
hive setup quick
```

**What it does:**
- Tests your system compatibility
- Sets up one primary AI provider
- Configures basic budget monitoring
- Creates essential profiles (cost_effective, balanced)
- Enables basic monitoring and alerts
- Sets up the default dashboard layout

**Perfect when:** You want to start using AI immediately with sensible defaults.

### 🔧 Complete Setup Wizard (15-20 minutes)
**Best for:** Comprehensive configuration with full control

```bash
# Start complete setup wizard
hive setup wizard
```

**What it covers:**
1. **Provider Configuration** - Set up multiple AI providers with testing
2. **Budget Management** - Detailed budget planning and alert configuration
3. **Profile Creation** - Custom profiles for different use cases
4. **Monitoring Setup** - Advanced monitoring and notification preferences
5. **Dashboard Customization** - Personalized dashboard layout and metrics
6. **Integration Setup** - Export preferences and third-party integrations

**Perfect when:** You want full control and understanding of all features.

### 🎯 Specialized Setup Wizards

**Provider-Only Setup:**
```bash
# Focus just on AI provider configuration
hive setup providers
```

**Budget & Cost Management:**
```bash
# Set up comprehensive cost tracking
hive setup budget
```

**Team Collaboration:**
```bash
# Configure for team usage
hive setup team
```

**Development Environment:**
```bash
# Set up for development work
hive setup dev
```

## Understanding Each Setup Stage

### Stage 1: System Check & Compatibility

**What happens:**
```
🔍 System Compatibility Check
✅ Node.js version: 18.0+ (Compatible)
✅ NPM access: Available
✅ Network connectivity: Good
✅ Storage space: 500MB available
✅ Platform: macOS/Linux/Windows (Supported)

📋 Current Configuration Status:
❌ No API providers configured
❌ No budgets set
❌ Default profiles only
✅ Analytics enabled
❌ Monitoring not active
```

**Why this matters:** Ensures your system is ready and identifies what needs configuration.

### Stage 2: Use Case Analysis

**Example interaction:**
```
🎯 Understanding Your AI Usage

Primary use case:
1. Software development and coding
2. Content writing and marketing
3. Research and analysis
4. General productivity and assistance
5. Team collaboration and knowledge sharing

Choice [1-5]: 1

Follow-up questions based on "Software development":
- What programming languages do you primarily use?
- Do you work on personal projects or professional work?
- What's your typical project complexity level?
- Do you need code review and optimization features?

🤖 Based on your answers, I recommend:
✅ Coding-optimized profile as default
✅ Code quality metrics in dashboard
✅ Cost-effective models for routine tasks
✅ High-quality models for complex problems
```

### Stage 3: Provider Configuration

**Guided API Setup:**
```
🔑 AI Provider Configuration

I'll help you set up AI providers. You'll need API keys, but don't worry - 
I'll guide you through getting them and test everything.

Available providers:
1. OpenAI (GPT models) - Most popular, great for general use
2. Anthropic (Claude) - Excellent for analysis and safety
3. Google (Gemini) - Fast and cost-effective
4. Others (50+ more available)

For coding work, I recommend starting with:
✅ OpenAI (primary) + Anthropic (backup)

Would you like me to:
1. Guide you through getting API keys
2. Set up provider priority and failover
3. Test connectivity and performance
4. Configure cost limits per provider
```

### Stage 4: Budget & Cost Management

**Smart Budget Planning:**
```
💰 Budget & Cost Management Setup

Let's set up cost tracking to prevent surprises and optimize spending.

Monthly AI usage estimate:
1. Light usage (< $10/month) - Occasional questions, learning
2. Moderate usage ($10-50/month) - Regular development work
3. Heavy usage ($50-200/month) - Professional daily use
4. Enterprise usage ($200+/month) - Team or intensive use

Choice [1-4]: 2

Based on "Moderate usage ($10-50/month)":
✅ Monthly budget: $35 (with 30% buffer)
✅ Alert at 50% ($17.50) - Email notification
✅ Alert at 80% ($28) - Email + Slack notification  
✅ Alert at 95% ($33.25) - All notifications + model switching
✅ Daily limit: $3 (prevents single-day overspending)

Cost optimization features:
✅ Auto-switch to cheaper models when approaching limits
✅ Weekly cost review emails
✅ Monthly usage reports
```

### Stage 5: Profile Creation

**Intelligent Profile Setup:**
```
👤 Profile Configuration

Profiles are like different "modes" for your AI usage. Based on your 
coding focus, I'll create these profiles:

🎯 coding_primary
- Primary: GPT-4 (best code quality)
- Backup: Claude-3-Opus
- Budget: $1 per request limit
- Use for: Complex coding, architecture, debugging

💰 coding_budget  
- Primary: GPT-3.5-Turbo (fast and cheap)
- Backup: Code Llama
- Budget: $0.10 per request limit
- Use for: Simple questions, code completion

⚖️ coding_balanced
- Primary: Claude-3-Sonnet
- Backup: GPT-4
- Budget: $0.50 per request limit  
- Use for: Most daily coding tasks

Would you like to:
1. Accept these recommendations
2. Customize the profiles
3. Add additional profiles for other use cases
```

### Stage 6: Monitoring & Alerts

**Comprehensive Alert Setup:**
```
🔔 Monitoring & Alert Configuration

Let's set up intelligent monitoring to keep you informed without being annoying.

Notification preferences:
1. Email notifications (recommended)
2. Slack integration
3. Desktop notifications
4. Webhook for custom integrations

Email setup for alerts:
📧 Email: your@email.com
✅ Budget alerts: Enabled
✅ Usage spike detection: Enabled  
✅ Provider health alerts: Enabled
✅ Weekly summary reports: Enabled
✅ Model recommendation updates: Enabled

Alert intelligence:
✅ Smart timing (no alerts during nights/weekends)
✅ Grouped notifications (multiple alerts = single digest)
✅ Escalation (repeat important alerts if not acknowledged)
```

### Stage 7: Dashboard Customization

**Personalized Dashboard:**
```
📊 Dashboard Layout Configuration

Your dashboard is mission control for AI operations. Based on your coding 
focus, here's your recommended layout:

Top Section - Key Metrics:
✅ Current spending vs budget
✅ Active requests and queue status
✅ Top-performing models today

Middle Section - Development Focus:
✅ Code-related usage patterns
✅ Model efficiency for coding tasks
✅ Recent coding conversations

Bottom Section - Optimization:
✅ Cost-saving opportunities  
✅ Model recommendations
✅ Usage trends and insights

Refresh rate: Every 30 seconds (customizable)
Compact mode: Disabled (full details shown)

Would you like to:
1. Use this layout
2. Customize sections and metrics
3. See other layout templates
```

## Using the Setup Wizard (Step-by-Step)

### First-Time User Journey

**Complete Beginner Path:**
```bash
# Start with the guided onboarding
hive setup first-time --guided

# This provides:
✅ Platform overview and capabilities explanation
✅ Simple language explanations for all concepts
✅ Extra help and tips throughout
✅ Validation and testing at each step
✅ Comprehensive help documentation links
```

**Example beginner interaction:**
```
👋 Welcome to hive-tools! 

I'm your setup assistant. I'll help you configure everything perfectly 
for your needs. Don't worry if you're new to AI tools - I'll explain 
everything as we go.

What would you like to know first?
1. What is hive-tools and what can it do?
2. How much will it cost to use?
3. What do I need to get started?
4. Just set me up with good defaults

Choice [1-4]: 1

🧠 hive-tools explained simply:

Think of hive-tools as your AI assistant that:
- Asks multiple AI models the same question
- Compares their answers to find the best one
- Gives you one trustworthy, verified response
- Tracks costs so you don't overspend
- Learns what works best for your tasks

It's like having a team of AI experts working together, 
but you only pay for the best answer.

Ready to set this up? [Y/n]: Y
```

### Advanced User Path

**Power User Setup:**
```bash
# Advanced configuration with full control
hive setup advanced

# Or migrate from existing configuration
hive setup migrate --from-config existing_config.json
```

**Advanced options include:**
- Custom consensus pipeline configuration
- Advanced failover strategies
- Custom model selection algorithms
- API rate limiting and optimization
- Advanced monitoring and alerting rules
- Integration with existing DevOps tools

### Team Setup Path

**Team Administrator Setup:**
```bash
# Configure for team usage
hive setup team --shared-config

# Options include:
✅ Shared budget pools and allocation
✅ Team member role configuration
✅ Centralized monitoring and reporting
✅ Shared profiles and best practices
✅ Usage analytics and team insights
```

## Setup Wizard Features

### Intelligent Recommendations

**Context-Aware Suggestions:**
The wizard analyzes your responses and makes smart recommendations:

```
🤖 Smart Analysis:

Based on your responses:
- Primary use: Software development
- Experience: Intermediate 
- Budget preference: Cost-conscious
- Team size: Individual

My recommendations:
✅ Start with OpenAI + Anthropic (best balance)
✅ $25 monthly budget (suitable for regular coding)
✅ Focus on coding and balanced profiles
✅ Enable daily cost monitoring
✅ Set up GitHub integration for code review

Confidence: 94% (High)
Alternative options available if preferences change.
```

### Configuration Validation

**Real-Time Testing:**
Every configuration is tested immediately:

```
🔧 Testing Configuration...

✅ OpenAI API: Connected (250ms response time)
✅ Anthropic API: Connected (180ms response time)  
✅ Budget system: Active and monitoring
✅ Profile creation: 3 profiles created successfully
✅ Monitoring alerts: Email integration working
✅ Dashboard: Layout loaded successfully

🎉 Setup complete! All systems operational.

Next steps:
1. Try your first consensus query
2. Explore the interactive dashboard  
3. Set up any additional integrations
```

### Educational Approach

**Learning While Configuring:**
The wizard explains concepts as you encounter them:

```
💡 Understanding Profiles:

Profiles are like presets on a camera - each one is optimized for 
different situations:

📸 Portrait mode = High Quality profile (best results, higher cost)
📸 Sport mode = Fast profile (quick responses, good enough quality)  
📸 Night mode = Balanced profile (good quality, reasonable cost)

You can switch between profiles anytime:
- Use 'high_quality' for important decisions
- Use 'cost_effective' for quick questions
- Use 'balanced' for most daily work

This flexibility means you always get the right balance of speed, 
quality, and cost for each task.
```

## Advanced Setup Options

### Environment-Specific Setup

**Development Environment:**
```bash
# Set up for development work
hive setup dev --enable-debug --test-mode

# Includes:
✅ Debug logging and detailed analytics
✅ Test mode for experimenting safely
✅ Development-friendly defaults
✅ Integration with common dev tools
✅ Enhanced error reporting
```

**Production Environment:**
```bash
# Set up for production use
hive setup production --monitoring --alerts --budgets

# Includes:
✅ Comprehensive monitoring and alerting
✅ Strict budget controls and safeguards
✅ High availability and failover
✅ Performance optimization
✅ Compliance and audit logging
```

### Migration and Updates

**Existing Configuration Migration:**
```bash
# Migrate from manual configuration
hive setup migrate --from-config manual_config.json

# Update existing setup
hive setup update --preserve-settings

# Reset and start over
hive setup reset --backup-current
```

## Configuration Templates

### Pre-Built Templates

**Individual Developer:**
```bash
hive setup template individual-developer

# Optimized for:
✅ Single-user coding workflows
✅ Budget-conscious spending ($20-50/month)
✅ Balance of quality and cost
✅ Personal project management
```

**Enterprise Team:**
```bash
hive setup template enterprise-team

# Optimized for:
✅ Multi-user team collaboration
✅ Shared budgets and reporting
✅ Role-based access and profiles
✅ Comprehensive monitoring and compliance
```

**AI Research:**
```bash
hive setup template ai-research

# Optimized for:
✅ Model experimentation and comparison
✅ Detailed analytics and benchmarking
✅ High-quality results prioritized
✅ Advanced features and customization
```

### Custom Template Creation

**Save Your Configuration:**
```bash
# Create template from current setup
hive setup template create my-perfect-setup

# Share with team
hive setup template export my-perfect-setup --format json

# Apply to other environments
hive setup template apply my-perfect-setup --environment production
```

## Troubleshooting Setup Issues

### Common Setup Problems

**API Key Issues:**
```bash
# Test API connectivity
hive setup test-apis

# Re-configure specific provider
hive setup provider-wizard openai

# Validate all connections
hive setup validate
```

**Budget Configuration Problems:**
```bash
# Reset budget settings
hive setup budget --reset

# Re-run budget wizard
hive setup budget --guided

# Check budget validation
hive setup budget --validate
```

**Profile Issues:**
```bash
# Reset to default profiles
hive setup profiles --reset-defaults

# Re-create custom profiles
hive setup profiles --wizard

# Validate profile configuration
hive setup profiles --validate
```

### Setup Validation

**Comprehensive System Check:**
```bash
# Validate entire setup
hive setup validate --comprehensive

# Check specific components
hive setup validate --providers --budgets --profiles

# Generate setup report
hive setup report --detailed
```

## Best Practices for Setup

### For Beginners

1. **Start with Quick Setup** - Get running immediately, customize later
2. **Use Guided Mode** - Take advantage of explanations and help
3. **Accept Recommendations** - The AI suggestions are based on proven patterns
4. **Test Everything** - Use the built-in testing at each stage
5. **Start Small** - Begin with conservative budgets and expand as needed

### For Advanced Users

1. **Use Templates** - Create reusable configurations for different environments
2. **Validate Thoroughly** - Test configurations before deploying
3. **Document Changes** - Export configurations for backup and sharing
4. **Monitor Performance** - Set up comprehensive monitoring from the start
5. **Plan for Scale** - Configure for growth and team expansion

### For Teams

1. **Standardize Setup** - Use shared templates and configurations
2. **Role-Based Configuration** - Set up appropriate access and budgets per role
3. **Centralized Monitoring** - Configure team-wide visibility and reporting
4. **Budget Allocation** - Plan and allocate budgets across team members
5. **Regular Reviews** - Schedule periodic setup reviews and optimizations

## Frequently Asked Questions

### General Setup Questions

**Q: How long does setup take?**
A: Quick setup takes 5 minutes, complete setup takes 15-20 minutes. You can always start quick and enhance later.

**Q: Can I change my configuration after setup?**
A: Absolutely! All settings are customizable anytime. You can also re-run setup wizards for specific components.

**Q: Do I need technical knowledge?**
A: No! The setup wizard is designed for complete beginners and explains everything in simple terms.

### Configuration Questions

**Q: What if I don't have API keys yet?**
A: The wizard guides you through getting API keys and provides direct links to provider registration pages.

**Q: Can I set up multiple environments?**
A: Yes! You can create different configurations for development, testing, and production environments.

**Q: What if I make a mistake during setup?**
A: No worries! You can re-run any part of the setup or reset completely. All configurations are reversible.

### Budget and Cost Questions

**Q: How do I know what budget to set?**
A: The wizard analyzes your intended usage and recommends appropriate budgets. You can always adjust them later.

**Q: What happens if I exceed my budget?**
A: The system can automatically switch to cheaper models, pause requests, or just alert you - you choose during setup.

**Q: Can I track costs by project or category?**
A: Yes! Advanced setup includes project-based budget allocation and category tracking.

## Next Steps After Setup

### Immediate Actions

1. **Test Your Configuration** - Try your first consensus query
2. **Explore the Dashboard** - Familiarize yourself with the monitoring interface
3. **Try Different Profiles** - Experiment with various quality/cost profiles
4. **Set Up Integrations** - Connect with your favorite tools and workflows

### Within Your First Week

1. **Review Usage Patterns** - Check analytics to understand your AI usage
2. **Optimize Settings** - Adjust based on actual usage vs initial estimates
3. **Explore Advanced Features** - Try export, visualization, and recommendation features
4. **Share with Team** - If working in a team, set up collaboration features

### Ongoing Optimization

1. **Monthly Setup Reviews** - Regularly assess and optimize your configuration
2. **Stay Updated** - Keep configurations current with new features and providers
3. **Share Knowledge** - Document what works for your team and use cases
4. **Expand Capabilities** - Gradually adopt more advanced features as you grow

---

## 🚀 **Ready to Get Started with Perfect Setup?**

Transform your AI development experience with **intelligent, guided setup** that gets you from zero to production-ready in minutes.

**Why our setup wizard is revolutionary:**
- 🧠 **AI-Powered Configuration** - Smart recommendations based on your specific needs
- ⚡ **Minutes Not Hours** - Complete setup in 5-20 minutes with full explanation
- 🎯 **Proven Best Practices** - Built-in configurations that actually work
- 🔧 **Infinitely Customizable** - Start simple, expand as you grow

### **Start Your Perfect Setup**

```bash
# Install the platform
npm install -g @hivetechs/hive-ai

# Start with guided setup for beginners
hive setup first-time --guided

# Or quick setup for immediate productivity
hive setup quick
```

### **Next Steps**
1. **[Start Free Trial](https://store.hivetechs.io)** - Get your license key and begin setup
2. **[Interactive Dashboard](/documentation/interactive-dashboard)** - Monitor your AI operations in real-time
3. **[CLI Tools Guide](/documentation/cli-tools-guide)** - Master all platform capabilities

**Stop struggling with complex AI tool configuration. Get perfect setup in minutes.**

For complete documentation, visit our [support page](/support) or check the [complete CLI guide](/documentation/cli-tools-guide).