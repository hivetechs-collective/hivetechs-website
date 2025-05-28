# 👤 Profile Management Documentation

Profile Management is like having different "modes" for your AI tools - similar to how a camera has portrait mode, landscape mode, and night mode. Each profile is optimized for specific types of work, with pre-configured settings for models, quality levels, cost preferences, and performance priorities.

## Why You Need Profile Management

### Without Profiles:
- ❌ Manual configuration for each task type
- ❌ Inconsistent settings across different work
- ❌ Forgetting optimal configurations
- ❌ No easy way to switch between setups

### With Profiles:
- ✅ **Instant Optimization** - One command switches to perfect settings
- ✅ **Consistent Quality** - Same great results every time
- ✅ **Task-Specific Tuning** - Optimized for coding, writing, research, etc.
- ✅ **Team Collaboration** - Share proven configurations
- ✅ **Cost Control** - Different budgets for different work types

## Built-in Profiles

### 🎯 High Quality Profile
**Best for:** Critical work, research, important decisions
- **Models:** GPT-4, Claude-3-Opus (top-tier models)
- **Quality:** Maximum thoroughness and accuracy
- **Cost:** Higher cost for superior results
- **Speed:** Slower but comprehensive

```bash
hive profiles use high_quality
```

### 💰 Cost Effective Profile  
**Best for:** High-volume tasks, experimentation, learning
- **Models:** GPT-3.5-Turbo, Claude-3-Haiku (budget-friendly)
- **Quality:** Good quality at low cost
- **Cost:** Optimized for savings
- **Speed:** Fast responses

```bash
hive profiles use cost_effective
```

### ⚖️ Balanced Profile
**Best for:** Daily work, general use, most tasks
- **Models:** Mix of mid-tier models
- **Quality:** Good balance of quality and cost
- **Cost:** Reasonable spending
- **Speed:** Moderate speed

```bash
hive profiles use balanced
```

### ⚡ Fast Profile
**Best for:** Real-time applications, quick questions, brainstorming
- **Models:** Fastest available models
- **Quality:** Good enough for quick tasks
- **Cost:** Low to moderate
- **Speed:** Prioritizes response time

```bash
hive profiles use fast
```

### 💻 Coding Profile
**Best for:** Programming, debugging, code reviews
- **Models:** Code Llama, GPT-4 (coding-optimized)
- **Quality:** High accuracy for technical content
- **Cost:** Moderate cost for quality code
- **Speed:** Balanced for development workflow

```bash
hive profiles use coding
```

### ✍️ Writing Profile
**Best for:** Content creation, documentation, creative writing
- **Models:** Claude-3-Opus, GPT-4 (creative writing strengths)
- **Quality:** Emphasis on creativity and style
- **Cost:** Moderate to high for quality content
- **Speed:** Allows time for thoughtful responses

```bash
hive profiles use writing
```

## Creating Custom Profiles

### Basic Custom Profile
```bash
# Create a new profile
hive profiles create my_profile \
  --primary gpt-4 \
  --backup claude-3-opus \
  --quality medium \
  --cost-limit 0.05
```

### Advanced Custom Profile
```bash
# Create detailed profile
hive profiles create client_work \
  --generator "gpt-4" \
  --refiner "claude-3-opus" \
  --validator "gpt-4" \
  --curator "claude-3-opus" \
  --quality high \
  --daily-budget 10.00 \
  --response-time-max 15s
```

### Team Profile
```bash
# Create shared team profile
hive profiles create team_standard \
  --template balanced \
  --shared true \
  --quality medium \
  --cost-per-request-max 0.08 \
  --description "Standard team configuration"
```

## Managing Profiles

### List All Profiles
```bash
hive profiles list
```
Output:
```
📋 Available Profiles:

Built-in Profiles:
├─ 🎯 high_quality     - Maximum accuracy and thoroughness
├─ 💰 cost_effective   - Budget-friendly with good quality  
├─ ⚖️ balanced         - Good balance of cost and quality
├─ ⚡ fast             - Optimized for speed
├─ 💻 coding           - Specialized for programming tasks
└─ ✍️ writing          - Optimized for content creation

Custom Profiles:
├─ 🏢 client_work      - High-quality for client projects
├─ 🧪 experimental     - Testing new models and features
└─ 📚 research         - Deep analysis and fact-checking

Current Profile: coding 💻
```

### View Profile Details
```bash
hive profiles show coding
```
Output:
```
💻 Coding Profile Details:

Configuration:
├─ Primary Model: Code Llama 34B
├─ Backup Model: GPT-4
├─ Quality Level: High
├─ Max Cost/Request: $0.08
├─ Response Time: Balanced
└─ Consensus Pipeline: Enabled

Performance (Last 30 days):
├─ Average Quality Score: 94/100
├─ Average Response Time: 3.2s
├─ Average Cost: $0.052/request
├─ Success Rate: 98.7%
└─ User Satisfaction: 4.8/5

Optimization Suggestions:
💡 Consider Code Llama 70B for complex algorithms
💡 Switch to GPT-3.5 for simple syntax questions
```

### Switch Between Profiles
```bash
# Switch to a different profile
hive profiles switch writing

# Quick switch for one request
hive consensus "Your question" --profile fast

# Switch back to default
hive profiles switch balanced
```

### Update Existing Profiles
```bash
# Update profile settings
hive profiles update coding \
  --primary "code-llama-70b" \
  --cost-limit 0.10

# Add backup model
hive profiles update client_work \
  --add-backup "anthropic:claude-3-haiku"
```

### Delete Profiles
```bash
# Delete custom profile
hive profiles delete experimental

# Delete with confirmation
hive profiles delete old_profile --confirm
```

## Profile Performance Analytics

### Performance Comparison
```bash
hive profiles compare coding writing balanced
```
Output:
```
📊 Profile Performance Comparison (Last 30 Days):

┌─────────────┬─────────┬───────────┬─────────────┬──────────────┐
│ Profile     │ Quality │ Avg Cost  │ Avg Speed   │ Satisfaction │
├─────────────┼─────────┼───────────┼─────────────┼──────────────┤
│ 💻 Coding   │ 94/100  │ $0.052    │ 3.2s       │ 4.8/5        │
│ ✍️ Writing  │ 96/100  │ $0.078    │ 4.1s       │ 4.9/5        │  
│ ⚖️ Balanced │ 89/100  │ $0.035    │ 2.8s       │ 4.5/5        │
└─────────────┴─────────┴───────────┴─────────────┴──────────────┘

🏆 Best Quality: Writing (96/100)
💰 Most Cost-Effective: Balanced ($0.035/request)
⚡ Fastest: Balanced (2.8s average)
😊 Highest Satisfaction: Writing (4.9/5)
```

### Usage Analytics by Profile
```bash
hive profiles analytics coding --timeframe month
```
Output:
```
💻 Coding Profile Analytics (November 2024):

Usage Statistics:
├─ Total Requests: 234
├─ Total Cost: $12.18
├─ Average Daily Usage: 7.8 requests
├─ Peak Usage Day: Thursday (15 requests)
└─ Most Common Tasks: Code generation (45%), Debugging (32%), Code review (23%)

Model Performance:
├─ Code Llama 34B: 89% of requests (primary)
├─ GPT-4: 11% of requests (backup/failover)
└─ Average Model Switch Rate: 2.3%

Cost Breakdown:
├─ Model Costs: $11.85 (97%)
├─ Processing Overhead: $0.33 (3%)
└─ Average Cost per Request: $0.052

Quality Trends:
├─ Week 1: 92/100 ████████░░
├─ Week 2: 94/100 █████████░  
├─ Week 3: 95/100 █████████▪
└─ Week 4: 96/100 ██████████

💡 Insights:
- Quality improved 4% over the month
- Thursday is your most productive coding day
- Consider using GPT-3.5 for simple syntax questions to save 60%
```

## Profile Optimization

### Automatic Optimization
```bash
# Enable automatic profile optimization
hive profiles auto-optimize enable

# Set optimization goals
hive profiles optimize-for cost    # Minimize cost
hive profiles optimize-for quality # Maximize quality  
hive profiles optimize-for speed   # Maximize speed
hive profiles optimize-for balance # Balance all factors
```

### Manual Optimization
```bash
# Get optimization suggestions
hive profiles suggest-optimizations coding

# Apply specific optimizations
hive profiles optimize coding \
  --reduce-cost 20% \
  --maintain-quality 90%
```

### A/B Testing Profiles
```bash
# Create test variant
hive profiles create coding_v2 \
  --template coding \
  --primary "gpt-4" \
  --description "Testing GPT-4 vs Code Llama"

# Run A/B test
hive profiles ab-test coding coding_v2 \
  --duration 1week \
  --split 50/50
```

## Team Profile Management

### Shared Team Profiles
```bash
# Create team profile
hive profiles create team_standard \
  --shared true \
  --team-access read-write

# Share existing profile
hive profiles share coding --team engineering

# Set team default
hive profiles team-default set team_standard
```

### Profile Permissions
```bash
# Set profile permissions
hive profiles permissions coding \
  --admin john@company.com \
  --edit jane@company.com \
  --read team@company.com

# Lock profile from changes
hive profiles lock production_profile
```

### Team Analytics
```bash
# Team profile usage
hive profiles team-analytics

# Individual usage
hive profiles user-analytics john@company.com
```

## Profile Best Practices

### 1. Start with Built-in Profiles
```bash
# Try built-in profiles first
hive profiles use coding
hive profiles use writing  
hive profiles use balanced
```

### 2. Create Task-Specific Profiles
```bash
# Create profiles for specific work types
hive profiles create blog_writing \
  --template writing \
  --primary claude-3-opus \
  --creativity high

hive profiles create code_review \
  --template coding \
  --quality high \
  --focus accuracy
```

### 3. Monitor and Optimize
```bash
# Regular performance reviews
hive profiles analytics --weekly

# Optimize based on data
hive profiles optimize-for balance
```

### 4. Use Descriptive Names
```bash
# Good profile names
hive profiles create client_presentations
hive profiles create internal_docs
hive profiles create rapid_prototyping

# Avoid generic names
hive profiles create profile1  # ❌ Not descriptive
hive profiles create test      # ❌ Not clear
```

### 5. Set Appropriate Budgets
```bash
# Set different budgets for different work
hive profiles update client_work --daily-budget 15.00
hive profiles update experimental --daily-budget 2.00
hive profiles update personal --daily-budget 5.00
```

## Profile Automation

### Automatic Profile Switching
```bash
# Switch based on time
hive profiles schedule \
  --weekdays coding \
  --evenings personal \
  --weekends writing

# Switch based on project
hive profiles auto-switch \
  --project client-website writing \
  --project internal-tools coding \
  --project research high_quality
```

### Integration with Git
```bash
# Auto-switch based on repository
hive profiles git-integration enable

# Set repository-specific profiles
hive profiles git-repo react-app coding
hive profiles git-repo documentation writing
```

### Context-Aware Switching
```bash
# Switch based on keywords in questions
hive profiles context-rules \
  --keywords "code,function,algorithm" coding \
  --keywords "write,article,content" writing \
  --keywords "analyze,research,study" high_quality
```

## Troubleshooting Profiles

### Common Issues

**Profile not found:**
```bash
# List available profiles
hive profiles list

# Check profile name spelling
hive profiles show profile_name
```

**Poor performance with custom profile:**
```bash
# Check profile configuration
hive profiles validate my_profile

# Compare with built-in profiles
hive profiles compare my_profile coding

# Get optimization suggestions
hive profiles suggest-optimizations my_profile
```

**High costs with profile:**
```bash
# Analyze profile costs
hive profiles cost-analysis expensive_profile

# Set cost limits
hive profiles update expensive_profile --cost-limit 0.05

# Switch to cost-effective alternatives
hive profiles optimize expensive_profile --reduce-cost 30%
```

## Integration Examples

### VS Code Integration
```javascript
// Auto-switch profiles in VS Code based on file type
const fileType = vscode.window.activeTextEditor?.document.languageId;
const profile = fileType === 'javascript' ? 'coding' : 
               fileType === 'markdown' ? 'writing' : 'balanced';

await hive.profiles.switch(profile);
```

### CLI Workflow
```bash
# Morning routine
hive profiles switch coding
hive analytics check-budget
hive consensus "Plan today's development tasks"

# End of day
hive profiles analytics coding --today
hive profiles switch personal
```

## Advanced Profile Features

### Profile Templates
```bash
# Create reusable template
hive profiles template create development_template \
  --quality high \
  --cost-sensitivity medium \
  --speed balanced

# Use template for new profiles
hive profiles create frontend_dev \
  --template development_template \
  --primary "gpt-4" \
  --focus "react,typescript"
```

### Conditional Profiles
```bash
# Create conditional logic
hive profiles condition create budget_aware \
  --if "daily_spending > 80%" \
  --then "switch cost_effective" \
  --else "use balanced"
```

### Profile Inheritance
```bash
# Create profile hierarchy
hive profiles create senior_dev \
  --inherits coding \
  --override quality high \
  --override cost-limit 0.15

hive profiles create junior_dev \
  --inherits coding \
  --override quality medium \
  --override cost-limit 0.05
```

Profile Management gives you complete control over your AI experience, ensuring optimal results for every type of work. Start with built-in profiles and gradually create custom ones as you discover your preferences.

For more advanced profile configuration, visit our [Profile Management Guide](/documentation/profile-management).