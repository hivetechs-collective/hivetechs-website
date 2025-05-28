# 🎨 Rich Terminal UI Documentation

The Rich Terminal UI transforms your command-line experience from boring black text to a beautiful, interactive interface with colors, tables, progress indicators, and intuitive menus. Think of it as upgrading from a 1980s text editor to a modern IDE - same powerful functionality, but much more pleasant to use.

## Why Beautiful Terminal UI Matters

### Traditional CLI Problems:
- ❌ Plain text output is hard to scan
- ❌ No visual feedback for long operations  
- ❌ Difficult to compare data without formatting
- ❌ Poor user experience discourages usage

### Rich Terminal UI Benefits:
- ✅ **Visual Clarity** - Color-coded information for instant understanding
- ✅ **Interactive Menus** - Point-and-click navigation in terminal
- ✅ **Progress Feedback** - See exactly what's happening during operations
- ✅ **Beautiful Tables** - Data formatted for easy comparison
- ✅ **Consistent Design** - Professional appearance across all commands

## Terminal UI Features

### 1. Interactive Menus
Navigate features without memorizing commands:
```bash
hive  # Opens main interactive menu
```

Menu features:
- **Keyboard Navigation** - Arrow keys and shortcuts
- **Mouse Support** - Click to select options
- **Categorized Options** - Features grouped logically
- **Search** - Find commands quickly
- **Help Integration** - Context-sensitive help

### 2. Colorized Output
Information is color-coded for instant recognition:
- 🟢 **Success** - Green for completed operations
- 🔴 **Errors** - Red for failures and warnings
- 🔵 **Information** - Blue for status updates  
- 🟡 **Warnings** - Yellow for cautions
- ⚪ **Neutral** - White/gray for regular text

### 3. Progress Visualization
See real-time progress for operations:
```
🎯 Consensus Pipeline Progress:
├─ Generator ████████████████████ 100% ✅ Complete (3.2s)
├─ Refiner   ██████████████████── 90%  ⏳ Processing...
├─ Validator ────────────────────  0%  ⏸️ Waiting
└─ Curator   ────────────────────  0%  ⏸️ Waiting

Overall Progress: ████████████──── 70% (8.1s elapsed)
```

### 4. Data Tables
Complex data formatted beautifully:
```
┌──────────────┬───────┬─────────┬──────────┬─────────────┐
│ Model        │ Score │ Speed   │ Cost/1K  │ Best For    │
├──────────────┼───────┼─────────┼──────────┼─────────────┤
│ GPT-4        │ 94/100│ 4.2s    │ $0.030   │ General     │
│ Claude-3-Opus│ 92/100│ 3.1s    │ $0.015   │ Writing     │
│ Code Llama   │ 96/100│ 2.1s    │ $0.0008  │ Coding      │
└──────────────┴───────┴─────────┴──────────┴─────────────┘
```

### 5. Status Indicators
Visual status at a glance:
- ✅ Success indicators
- ❌ Error markers  
- ⚠️ Warning symbols
- 🔄 Loading spinners
- 📊 Charts and graphs

## Using Interactive Menus

### Main Menu Navigation
```bash
# Open main menu
hive

# Use arrow keys to navigate
# Press Enter to select
# Press 'q' to quit
```

Menu structure:
```
🏠 Main Menu
├─ 🧠 Consensus Pipeline
├─ 📊 Analytics & Insights  
├─ 🏆 Performance Benchmarking
├─ 🛡️ Automatic Failover
├─ 💰 Cost Intelligence
├─ 🔍 Model Discovery
├─ ⚙️ Configuration
└─ ❓ Help & Support
```

### Feature-Specific Menus
Each feature has its own interactive menu:
```bash
hive analytics menu    # Analytics dashboard
hive benchmark menu   # Benchmarking interface
hive cost menu        # Cost management
hive failover menu    # Failover controls
```

### Menu Customization
```bash
# Customize menu appearance
hive ui theme dark      # Dark theme
hive ui theme light     # Light theme
hive ui compact true    # Compact layout
hive ui animations off  # Disable animations
```

## Progress Visualization Types

### 1. Consensus Pipeline Progress
Shows each stage in real-time:
```
🎯 Processing: "Explain quantum computing"

Stage Progress:
🔹 Generator  ████████████████████ 100% ✅ (3.2s)
🔹 Refiner    ██████████████████── 90%  ⏳ (2.1s)  
🔹 Validator  ────────────────────  0%  ⏸️
🔹 Curator    ────────────────────  0%  ⏸️

Quality Estimate: 94/100 ⭐⭐⭐⭐⭐
Time Remaining: ~12 seconds
```

### 2. Benchmark Progress
Visual feedback during model testing:
```
🏆 Benchmarking GPT-4 vs Claude-3

Test Progress:
├─ Reasoning Tests   ████████████████████ 100% ✅
├─ Coding Tests      ████████████████───  80%  ⏳
├─ Writing Tests     ──────────────────── 0%   ⏸️
├─ Math Tests        ──────────────────── 0%   ⏸️
└─ Creative Tests    ──────────────────── 0%   ⏸️

Current: Testing algorithm optimization...
Completed: 24/120 tests (2.8 min remaining)
```

### 3. Cost Analysis Progress
Real-time cost calculation:
```
💰 Analyzing Cost Data...

Processing:
├─ Usage Data        ████████████████████ 100% ✅
├─ Cost Calculation  ████████████────────  60%  ⏳
├─ Trend Analysis    ──────────────────── 0%   ⏸️
└─ Optimization      ──────────────────── 0%   ⏸️

Records Processed: 12,450 / 20,000
```

## Beautiful Data Tables

### Model Comparison Tables
```bash
hive models compare gpt-4 claude-3-opus
```
Output:
```
┌─────────────────┬──────────┬──────────────┬─────────────┐
│ Feature         │ GPT-4    │ Claude-3-Opus│ Winner      │
├─────────────────┼──────────┼──────────────┼─────────────┤
│ Reasoning Score │ 94/100 🟢│ 92/100 🟢    │ GPT-4 📊    │
│ Writing Score   │ 90/100 🟢│ 96/100 🟢    │ Claude-3 ✍️ │
│ Speed           │ 4.2s 🟡  │ 3.1s 🟢      │ Claude-3 ⚡ │
│ Cost per 1K     │ $0.030 🔴│ $0.015 🟡    │ Claude-3 💰 │
│ Context Window  │ 8K 🟡    │ 200K 🟢     │ Claude-3 📚 │
└─────────────────┴──────────┴──────────────┴─────────────┘

🏆 Overall Winner: Claude-3-Opus (3/5 categories)
💡 Recommendation: Use Claude-3-Opus for most tasks
```

### Cost Analysis Tables
```bash
hive cost analysis
```
Output:
```
┌─────────────┬────────────┬────────────┬─────────────┬──────────┐
│ Model       │ Requests   │ Total Cost │ Avg Cost   │ Trend    │
├─────────────┼────────────┼────────────┼─────────────┼──────────┤
│ GPT-4       │ 145 📊     │ $12.45 💰  │ $0.086     │ ↗️ +15%  │
│ Claude-3    │ 89 📊      │ $4.20 💰   │ $0.047     │ ↘️ -5%   │
│ GPT-3.5     │ 234 📊     │ $3.15 💰   │ $0.013     │ ↗️ +25%  │
├─────────────┼────────────┼────────────┼─────────────┼──────────┤
│ TOTAL       │ 468 📊     │ $19.80 💰  │ $0.042     │ ↗️ +12%  │
└─────────────┴────────────┴────────────┴─────────────┴──────────┘

📈 Monthly Projection: $23.50 (within $25 budget ✅)
💡 Optimization: Switch 30% of GPT-4 requests to Claude-3 → Save $4.20
```

## Color Coding System

### Status Colors
- 🟢 **Green** - Success, healthy, good performance
- 🔴 **Red** - Errors, failures, over budget
- 🟡 **Yellow** - Warnings, approaching limits
- 🔵 **Blue** - Information, neutral status
- ⚪ **White/Gray** - Regular text, inactive items

### Performance Colors
- 🟢 **Green** - Excellent (90-100%)
- 🟡 **Yellow** - Good (70-89%)
- 🔴 **Red** - Poor (below 70%)

### Cost Colors
- 🟢 **Green** - Budget-friendly (under 50% of limit)
- 🟡 **Yellow** - Moderate (50-80% of limit)
- 🔴 **Red** - Expensive (over 80% of limit)

## Customizing Your UI

### Theme Options
```bash
# Dark theme (default)
hive ui theme dark

# Light theme
hive ui theme light

# High contrast
hive ui theme contrast

# Minimal theme
hive ui theme minimal
```

### Layout Options
```bash
# Compact layout
hive ui layout compact

# Spacious layout  
hive ui layout spacious

# Table formatting
hive ui tables bordered    # Add borders
hive ui tables minimal     # Minimal borders
hive ui tables colorful    # More colors
```

### Animation Settings
```bash
# Enable/disable animations
hive ui animations on
hive ui animations off

# Progress bar style
hive ui progress bars      # Traditional bars
hive ui progress spinners  # Spinning indicators  
hive ui progress dots      # Dot animations
```

## Accessibility Features

### Screen Reader Support
- **Alt text** for visual elements
- **Structured headings** for navigation
- **Keyboard shortcuts** for all functions

### High Contrast Mode
```bash
hive ui accessibility high-contrast
```

### Reduced Motion
```bash
hive ui accessibility reduced-motion
```

### Large Text Mode
```bash
hive ui accessibility large-text
```

## Terminal UI Commands

### Quick Commands
```bash
hive ui status         # Show current UI settings
hive ui reset          # Reset to defaults
hive ui test           # Test UI components
hive ui demo           # Show UI demo
```

### Configuration
```bash
hive ui config         # Open UI configuration
hive ui export         # Export UI settings
hive ui import         # Import UI settings
```

## Integration with Features

The Rich Terminal UI enhances every hive-tools feature:

### Consensus Pipeline
- Visual stage progress
- Quality indicators
- Time estimates

### Analytics
- Interactive charts
- Formatted data tables
- Trend visualizations

### Benchmarking  
- Test progress bars
- Score comparisons
- Performance charts

### Cost Intelligence
- Budget visualizations
- Spending trends
- Cost breakdowns

### Failover System
- Provider status indicators
- Health monitoring displays
- Event timelines

For more UI customization options, visit our [Terminal UI Guide](/documentation/terminal-ui).