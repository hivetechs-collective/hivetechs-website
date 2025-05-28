# 🛠️ Complete MCP Tools Reference - All 41 Tools

This is the complete reference guide for all 41 hive-tools MCP (Model Context Protocol) tools. Each tool is documented with detailed usage instructions, parameters, examples, and integration patterns.

## Quick Tool Index

| Category | Tools | Jump To |
|----------|-------|---------|
| **Core Consensus** | 8 tools | [Core Consensus Tools](#core-consensus-tools) |
| **Analytics & Insights** | 5 tools | [Analytics Tools](#analytics--insights-tools) |
| **Performance Benchmarking** | 6 tools | [Benchmarking Tools](#performance-benchmarking-tools) |
| **Automatic Failover** | 7 tools | [Failover Tools](#automatic-failover-tools) |
| **Cost Intelligence** | 4 tools | [Cost Tools](#cost-intelligence-tools) |
| **Model Discovery** | 5 tools | [Discovery Tools](#model-discovery-tools) |
| **Terminal UI** | 3 tools | [Terminal UI Tools](#terminal-ui-tools) |
| **Profile Management** | 3 tools | [Profile Tools](#profile-management-tools) |

---

## Core Consensus Tools

### 1. Consensus Request Tool

**What it does:** Processes questions through the 4-stage consensus pipeline for verified, high-quality responses.

**When to use:** For any question where you want the highest quality, most trustworthy answer.

**Parameters:**
- `prompt` (required): Your question or request
- `quality` (optional): low, medium, high (default: medium)
- `profile` (optional): Specific profile to use
- `conversation_id` (optional): Continue previous conversation

**Usage Examples:**

```typescript
// Basic usage
const response = await mcp.tools.consensusRequest({
  prompt: "How do I implement OAuth in my Node.js app?"
});

// High quality mode
const response = await mcp.tools.consensusRequest({
  prompt: "Explain quantum computing",
  quality: "high"
});

// Continue conversation
const response = await mcp.tools.consensusRequest({
  prompt: "Can you elaborate on that?",
  conversation_id: "conv_123"
});
```

**CLI Example:**
```bash
# Ask your IDE assistant: "Use the consensus request tool to explain React hooks"
```

---

### 2. Pipeline Configuration Tool

**What it does:** Configures which AI models to use for each stage of the consensus pipeline.

**When to use:** To optimize the pipeline for specific needs (speed, cost, accuracy).

**Parameters:**
- `generator_model` (optional): Model for initial response generation
- `refiner_model` (optional): Model for response refinement
- `validator_model` (optional): Model for fact-checking
- `curator_model` (optional): Model for final formatting

**Usage Examples:**

```typescript
// Optimize for coding tasks
await mcp.tools.pipelineConfiguration({
  generator_model: "gpt-4",
  refiner_model: "claude-3-opus",
  validator_model: "gpt-4",
  curator_model: "claude-3-opus"
});

// Cost-effective configuration
await mcp.tools.pipelineConfiguration({
  generator_model: "gpt-3.5-turbo",
  refiner_model: "claude-3-haiku",
  validator_model: "gpt-3.5-turbo",
  curator_model: "claude-3-haiku"
});
```

---

### 3. Profile Management Tool

**What it does:** Creates and manages pre-configured setups for different scenarios.

**When to use:** To quickly switch between optimized configurations for different types of work.

**Parameters:**
- `action` (required): create, list, switch, delete
- `profile_name` (required for create/switch/delete): Name of the profile
- `settings` (required for create): Profile configuration

**Usage Examples:**

```typescript
// Create coding profile
await mcp.tools.profileManagement({
  action: "create",
  profile_name: "coding",
  settings: {
    generator: "gpt-4",
    focus: "accuracy",
    temperature: 0.3
  }
});

// Switch to profile
await mcp.tools.profileManagement({
  action: "switch",
  profile_name: "coding"
});

// List all profiles
await mcp.tools.profileManagement({
  action: "list"
});
```

---

### 4. Conversation Continuation Tool

**What it does:** Continues previous conversations with full context memory.

**When to use:** When you want to build on a previous conversation without repeating context.

**Parameters:**
- `conversation_id` (required): ID of the conversation to continue
- `new_message` (required): Your follow-up message
- `include_history` (optional): Include full conversation history (default: true)

**Usage Examples:**

```typescript
// Continue a conversation
await mcp.tools.conversationContinuation({
  conversation_id: "conv_abc123",
  new_message: "Can you provide more examples?"
});

// Continue with limited history
await mcp.tools.conversationContinuation({
  conversation_id: "conv_abc123",
  new_message: "What about performance implications?",
  include_history: false
});
```

---

### 5. Quality Control Tool

**What it does:** Adjusts the thoroughness and depth of the consensus process.

**When to use:** When you need quick answers vs comprehensive analysis.

**Parameters:**
- `quality_level` (required): low, medium, high, maximum
- `focus_areas` (optional): Array of areas to emphasize
- `time_budget` (optional): Maximum processing time in seconds

**Usage Examples:**

```typescript
// Maximum quality for critical information
await mcp.tools.qualityControl({
  quality_level: "maximum",
  focus_areas: ["accuracy", "completeness"],
  time_budget: 120
});

// Quick response mode
await mcp.tools.qualityControl({
  quality_level: "low",
  time_budget: 10
});
```

---

### 6. Context Injection Tool

**What it does:** Adds specific context or constraints to your consensus request.

**When to use:** When you have specific requirements, standards, or environmental constraints.

**Parameters:**
- `context` (required): Additional context to include
- `constraints` (optional): Specific limitations or requirements
- `format` (optional): Desired output format

**Usage Examples:**

```typescript
// Add coding standards context
await mcp.tools.contextInjection({
  context: "This is for a React TypeScript project using functional components",
  constraints: ["Use modern React patterns", "Include error handling", "Follow ESLint rules"],
  format: "code_with_explanation"
});

// Business context
await mcp.tools.contextInjection({
  context: "Enterprise software for financial services",
  constraints: ["Must comply with SOX regulations", "High security requirements"]
});
```

---

### 7. Pipeline Status Tool

**What it does:** Shows real-time progress as your request moves through the 4 stages.

**When to use:** For complex requests where you want to see what's happening at each stage.

**Parameters:**
- `request_id` (required): ID of the request to monitor
- `show_details` (optional): Include detailed stage information (default: true)

**Usage Examples:**

```typescript
// Monitor request progress
await mcp.tools.pipelineStatus({
  request_id: "req_xyz789",
  show_details: true
});

// Quick status check
await mcp.tools.pipelineStatus({
  request_id: "req_xyz789",
  show_details: false
});
```

---

### 8. Result Comparison Tool

**What it does:** Compares outputs from individual stages vs the final consensus result.

**When to use:** When you want to understand how consensus improved the answer.

**Parameters:**
- `request_id` (required): ID of the completed request
- `include_reasoning` (optional): Show why changes were made (default: true)
- `highlight_improvements` (optional): Highlight specific improvements (default: true)

**Usage Examples:**

```typescript
// Full comparison with reasoning
await mcp.tools.resultComparison({
  request_id: "req_xyz789",
  include_reasoning: true,
  highlight_improvements: true
});
```

---

## Analytics & Insights Tools

### 9. Analytics Event Recording Tool

**What it does:** Automatically tracks every AI interaction with detailed metrics.

**When to use:** Runs automatically - provides the foundation for all analytics.

**Parameters:**
- `event_type` (required): Type of event to record
- `metadata` (required): Event details and metrics
- `user_id` (optional): User identifier for team analytics

**Usage Examples:**

```typescript
// This tool runs automatically, but you can trigger manual events
await mcp.tools.analyticsEventRecording({
  event_type: "custom_benchmark",
  metadata: {
    model: "gpt-4",
    task_type: "coding",
    result_quality: 95,
    cost: 0.08
  }
});
```

---

### 10. Performance Analytics Tool

**What it does:** Shows which AI models perform best for your specific use cases.

**When to use:** To optimize your model choices based on real usage data.

**Parameters:**
- `timeframe` (optional): day, week, month, quarter, year (default: month)
- `model_filter` (optional): Specific models to analyze
- `task_type` (optional): Filter by task type

**Usage Examples:**

```typescript
// Monthly performance analysis
await mcp.tools.performanceAnalytics({
  timeframe: "month"
});

// Coding-specific performance
await mcp.tools.performanceAnalytics({
  timeframe: "week",
  task_type: "coding"
});

// Specific model analysis
await mcp.tools.performanceAnalytics({
  model_filter: ["gpt-4", "claude-3-opus"],
  timeframe: "quarter"
});
```

---

### 11. Usage Analytics Tool

**What it does:** Provides detailed breakdowns of your AI usage patterns.

**When to use:** To understand your AI consumption habits and optimize spending.

**Parameters:**
- `aggregation` (required): daily, weekly, monthly
- `metrics` (optional): Array of metrics to include
- `breakdown_by` (optional): How to group the data

**Usage Examples:**

```typescript
// Weekly usage breakdown
await mcp.tools.usageAnalytics({
  aggregation: "weekly",
  metrics: ["requests", "costs", "response_times"],
  breakdown_by: "model"
});

// Daily cost analysis
await mcp.tools.usageAnalytics({
  aggregation: "daily",
  metrics: ["costs"],
  breakdown_by: "task_type"
});
```

---

### 12. Insights Generation Tool

**What it does:** AI-powered recommendations for optimizing your AI usage.

**When to use:** Regularly, to get smart suggestions for improving efficiency and reducing costs.

**Parameters:**
- `focus` (optional): cost, performance, efficiency, all (default: all)
- `timeframe` (optional): Period to analyze (default: month)
- `include_predictions` (optional): Include future projections (default: true)

**Usage Examples:**

```typescript
// General optimization insights
await mcp.tools.insightsGeneration({
  focus: "all",
  include_predictions: true
});

// Cost-focused insights
await mcp.tools.insightsGeneration({
  focus: "cost",
  timeframe: "week"
});
```

---

### 13. Data Export Tool

**What it does:** Exports your analytics data in JSON or CSV format.

**When to use:** For creating custom reports, sharing with team, or importing into other tools.

**Parameters:**
- `format` (required): json, csv, xlsx
- `data_type` (required): usage, costs, performance, all
- `timeframe` (optional): Period to export (default: month)
- `destination` (optional): email, file, webhook

**Usage Examples:**

```typescript
// Export cost data as CSV
await mcp.tools.dataExport({
  format: "csv",
  data_type: "costs",
  timeframe: "quarter",
  destination: "file"
});

// Export all data as JSON
await mcp.tools.dataExport({
  format: "json",
  data_type: "all",
  destination: "email"
});
```

---

## Performance Benchmarking Tools

### 14. Benchmark Test Runner Tool

**What it does:** Runs standardized tests on AI models across 8 different categories.

**When to use:** To objectively compare models before committing to expensive API usage.

**Parameters:**
- `models` (required): Array of models to test
- `categories` (optional): Test categories to run (default: all)
- `test_intensity` (optional): low, medium, high (default: medium)

**Usage Examples:**

```typescript
// Compare coding models
await mcp.tools.benchmarkTestRunner({
  models: ["gpt-4", "claude-3-opus", "code-llama-34b"],
  categories: ["coding", "reasoning"]
});

// Quick benchmark
await mcp.tools.benchmarkTestRunner({
  models: ["gpt-3.5-turbo"],
  test_intensity: "low"
});
```

---

### 15. Capability Scoring Tool

**What it does:** Generates comprehensive capability scores (0-100) for each model.

**When to use:** To quickly identify the best model for specific types of tasks.

**Parameters:**
- `model` (required): Model to score
- `categories` (optional): Specific categories to score
- `baseline_comparison` (optional): Compare against baseline model

**Usage Examples:**

```typescript
// Score model in all categories
await mcp.tools.capabilityScoring({
  model: "gpt-4"
});

// Score specific categories
await mcp.tools.capabilityScoring({
  model: "claude-3-opus",
  categories: ["writing", "creative"],
  baseline_comparison: "gpt-3.5-turbo"
});
```

---

### 16. Leaderboard Tool

**What it does:** Shows real-time rankings of all AI models across different categories.

**When to use:** To quickly see which models are currently performing best.

**Parameters:**
- `category` (optional): Specific category to show (default: overall)
- `limit` (optional): Number of models to show (default: 10)
- `include_metrics` (optional): Include detailed metrics (default: true)

**Usage Examples:**

```typescript
// Overall leaderboard
await mcp.tools.leaderboard({
  limit: 20,
  include_metrics: true
});

// Coding leaderboard
await mcp.tools.leaderboard({
  category: "coding",
  limit: 5
});
```

---

### 17. Historical Performance Tool

**What it does:** Tracks how model performance changes over time.

**When to use:** To identify performance trends and model improvements/degradations.

**Parameters:**
- `model` (required): Model to analyze
- `timeframe` (required): Period to analyze
- `metrics` (optional): Specific metrics to track

**Usage Examples:**

```typescript
// GPT-4 performance over 6 months
await mcp.tools.historicalPerformance({
  model: "gpt-4",
  timeframe: "6months",
  metrics: ["coding", "writing", "reasoning"]
});
```

---

### 18. Model Comparison Tool

**What it does:** Side-by-side detailed comparison of specific models.

**When to use:** When deciding between 2-3 specific models for your use case.

**Parameters:**
- `models` (required): Array of models to compare (2-5 models)
- `criteria` (optional): Specific comparison criteria
- `include_costs` (optional): Include cost comparison (default: true)

**Usage Examples:**

```typescript
// Compare top models
await mcp.tools.modelComparison({
  models: ["gpt-4", "claude-3-opus", "gemini-ultra"],
  criteria: ["accuracy", "speed", "cost"],
  include_costs: true
});
```

---

### 19. Custom Benchmark Tool

**What it does:** Create your own benchmark tests with your specific criteria.

**When to use:** When standard tests don't match your exact use case.

**Parameters:**
- `test_name` (required): Name for your custom test
- `test_prompts` (required): Array of test prompts
- `evaluation_criteria` (required): How to score responses
- `models_to_test` (required): Models to test against

**Usage Examples:**

```typescript
// Custom React component test
await mcp.tools.customBenchmark({
  test_name: "React Component Generation",
  test_prompts: [
    "Create a responsive navbar component",
    "Build a data table with sorting",
    "Make a form with validation"
  ],
  evaluation_criteria: {
    functionality: 40,
    code_quality: 30,
    best_practices: 30
  },
  models_to_test: ["gpt-4", "claude-3-opus", "code-llama-34b"]
});
```

---

## Automatic Failover Tools

### 20. Provider Health Monitor Tool

**What it does:** Continuously checks if AI providers are responding properly.

**When to use:** Runs automatically in background - provides foundational health data.

**Parameters:**
- `providers` (optional): Specific providers to monitor
- `check_frequency` (optional): How often to check (default: 30s)
- `health_criteria` (optional): Custom health criteria

**Usage Examples:**

```typescript
// Monitor specific providers
await mcp.tools.providerHealthMonitor({
  providers: ["openai", "anthropic", "google"],
  check_frequency: "15s"
});

// Custom health criteria
await mcp.tools.providerHealthMonitor({
  health_criteria: {
    max_response_time: 5000,
    max_error_rate: 0.1,
    min_success_rate: 0.95
  }
});
```

---

### 21. Automatic Failover Tool

**What it does:** Instantly switches to backup providers when primary fails.

**When to use:** Automatically activates when problems detected.

**Parameters:**
- `enabled` (required): Enable/disable automatic failover
- `failover_rules` (optional): Custom failover logic
- `notification_settings` (optional): How to notify about failovers

**Usage Examples:**

```typescript
// Enable with default settings
await mcp.tools.automaticFailover({
  enabled: true
});

// Custom failover rules
await mcp.tools.automaticFailover({
  enabled: true,
  failover_rules: {
    error_threshold: 0.2,
    response_time_threshold: 8000,
    consecutive_failures: 3
  },
  notification_settings: {
    email: true,
    slack: true
  }
});
```

---

### 22. Provider Status Tool

**What it does:** Shows real-time health status of all configured providers.

**When to use:** To check system health or troubleshoot issues.

**Parameters:**
- `providers` (optional): Specific providers to check
- `include_history` (optional): Include recent health history
- `detailed` (optional): Show detailed metrics

**Usage Examples:**

```typescript
// Quick status check
await mcp.tools.providerStatus({});

// Detailed status with history
await mcp.tools.providerStatus({
  providers: ["openai", "anthropic"],
  include_history: true,
  detailed: true
});
```

---

### 23. Failover Configuration Tool

**What it does:** Set up your failover preferences and backup order.

**When to use:** During initial setup or when changing provider priorities.

**Parameters:**
- `primary_provider` (required): Your preferred primary provider
- `backup_providers` (required): Array of backup providers in order
- `failover_settings` (optional): Custom failover behavior

**Usage Examples:**

```typescript
// Basic failover setup
await mcp.tools.failoverConfiguration({
  primary_provider: "openai",
  backup_providers: ["anthropic", "google", "meta"]
});

// Advanced configuration
await mcp.tools.failoverConfiguration({
  primary_provider: "openai",
  backup_providers: ["anthropic", "google"],
  failover_settings: {
    health_check_interval: 30,
    recovery_wait_time: 300,
    cost_aware_switching: true
  }
});
```

---

### 24. Health Test Tool

**What it does:** Manually test connectivity and performance of specific providers.

**When to use:** When troubleshooting issues or verifying new provider setup.

**Parameters:**
- `provider` (required): Provider to test
- `test_type` (optional): connectivity, performance, full (default: full)
- `test_prompts` (optional): Custom test prompts

**Usage Examples:**

```typescript
// Test OpenAI connectivity
await mcp.tools.healthTest({
  provider: "openai",
  test_type: "connectivity"
});

// Full performance test
await mcp.tools.healthTest({
  provider: "anthropic",
  test_type: "full",
  test_prompts: ["Simple test", "Complex reasoning test"]
});
```

---

### 25. Failover History Tool

**What it does:** Shows logs of when automatic failovers occurred.

**When to use:** To understand reliability patterns and optimize your setup.

**Parameters:**
- `timeframe` (optional): Period to show (default: week)
- `provider_filter` (optional): Show events for specific provider
- `event_type` (optional): failover, recovery, health_change

**Usage Examples:**

```typescript
// Recent failover events
await mcp.tools.failoverHistory({
  timeframe: "month"
});

// OpenAI specific events
await mcp.tools.failoverHistory({
  provider_filter: "openai",
  event_type: "failover"
});
```

---

### 26. Alert Configuration Tool

**What it does:** Set up notifications for provider issues and failover events.

**When to use:** When you want to be notified about system health changes.

**Parameters:**
- `alert_types` (required): Types of alerts to enable
- `notification_channels` (required): How to send alerts
- `alert_settings` (optional): Custom alert thresholds

**Usage Examples:**

```typescript
// Basic alert setup
await mcp.tools.alertConfiguration({
  alert_types: ["failover", "provider_down", "high_error_rate"],
  notification_channels: {
    email: "your@email.com",
    slack: "#ai-alerts"
  }
});

// Advanced alerts
await mcp.tools.alertConfiguration({
  alert_types: ["all"],
  notification_channels: {
    email: "team@company.com",
    webhook: "https://api.company.com/alerts"
  },
  alert_settings: {
    error_rate_threshold: 0.15,
    response_time_threshold: 6000
  }
});
```

---

## Cost Intelligence Tools

### 27. Cost Tracking Tool

**What it does:** Tracks exact costs for every AI request across all providers.

**When to use:** Runs automatically - gives you complete cost visibility.

**Parameters:**
- `granularity` (optional): request, hourly, daily (default: request)
- `include_predictions` (optional): Include cost predictions (default: false)

**Usage Examples:**

```typescript
// Detailed cost tracking
await mcp.tools.costTracking({
  granularity: "request",
  include_predictions: true
});

// Daily cost summaries
await mcp.tools.costTracking({
  granularity: "daily"
});
```

---

### 28. Budget Management Tool

**What it does:** Set spending limits and get alerts before exceeding them.

**When to use:** To control AI spending and avoid unexpected bills.

**Parameters:**
- `action` (required): set, check, alert, reset
- `budget_type` (required): daily, weekly, monthly, yearly
- `amount` (required for set): Budget amount in USD
- `alert_thresholds` (optional): When to send alerts

**Usage Examples:**

```typescript
// Set monthly budget
await mcp.tools.budgetManagement({
  action: "set",
  budget_type: "monthly",
  amount: 100,
  alert_thresholds: [50, 80, 95] // Alert at 50%, 80%, 95%
});

// Check current budget status
await mcp.tools.budgetManagement({
  action: "check",
  budget_type: "monthly"
});
```

---

### 29. Cost Analysis Tool

**What it does:** Detailed cost breakdowns and spending pattern analysis.

**When to use:** To understand where your AI budget is going and optimize spending.

**Parameters:**
- `analysis_type` (required): breakdown, trends, comparison, forecast
- `timeframe` (required): Period to analyze
- `group_by` (optional): How to group the analysis

**Usage Examples:**

```typescript
// Monthly cost breakdown
await mcp.tools.costAnalysis({
  analysis_type: "breakdown",
  timeframe: "month",
  group_by: "model"
});

// Cost trends over time
await mcp.tools.costAnalysis({
  analysis_type: "trends",
  timeframe: "quarter",
  group_by: "provider"
});

// Cost forecast
await mcp.tools.costAnalysis({
  analysis_type: "forecast",
  timeframe: "next_month"
});
```

---

### 30. Cost Optimization Tool

**What it does:** AI-powered recommendations for reducing costs without sacrificing quality.

**When to use:** Regularly, to maximize value from your AI budget.

**Parameters:**
- `optimization_focus` (optional): cost, quality, balance (default: balance)
- `acceptable_quality_loss` (optional): Maximum quality reduction (0-20%)
- `include_model_suggestions` (optional): Suggest alternative models (default: true)

**Usage Examples:**

```typescript
// Balanced optimization
await mcp.tools.costOptimization({
  optimization_focus: "balance",
  acceptable_quality_loss: 5,
  include_model_suggestions: true
});

// Aggressive cost cutting
await mcp.tools.costOptimization({
  optimization_focus: "cost",
  acceptable_quality_loss: 15
});
```

---

## Model Discovery Tools

### 31. Model Search Tool

**What it does:** Search through 319+ AI models by capability, cost, speed, or provider.

**When to use:** When looking for models for specific tasks or requirements.

**Parameters:**
- `query` (required): Search terms or requirements
- `filters` (optional): Additional filters to apply
- `sort_by` (optional): How to sort results
- `limit` (optional): Number of results to return

**Usage Examples:**

```typescript
// Search for coding models
await mcp.tools.modelSearch({
  query: "coding programming",
  filters: {
    max_cost: 0.01,
    min_quality_score: 80
  },
  sort_by: "cost_efficiency",
  limit: 10
});

// Search for fast models
await mcp.tools.modelSearch({
  query: "fast response quick",
  filters: {
    max_response_time: 3000
  }
});
```

---

### 32. Provider Discovery Tool

**What it does:** Finds and catalogs new AI providers and their available models.

**When to use:** To stay current with new AI offerings and expand your options.

**Parameters:**
- `discovery_mode` (optional): automatic, manual, scheduled (default: automatic)
- `provider_filters` (optional): Filters for provider discovery
- `notification_settings` (optional): Alert about new providers

**Usage Examples:**

```typescript
// Automatic discovery
await mcp.tools.providerDiscovery({
  discovery_mode: "automatic",
  notification_settings: {
    new_provider_alerts: true,
    weekly_summary: true
  }
});

// Manual discovery scan
await mcp.tools.providerDiscovery({
  discovery_mode: "manual",
  provider_filters: {
    min_models: 5,
    api_available: true
  }
});
```

---

### 33. Model Comparison Tool

**What it does:** Side-by-side comparison of models across all relevant metrics.

**When to use:** When deciding between specific models for your use case.

**Parameters:**
- `models` (required): Array of models to compare
- `comparison_criteria` (optional): Specific metrics to compare
- `include_benchmarks` (optional): Include benchmark scores (default: true)

**Usage Examples:**

```typescript
// Compare top models
await mcp.tools.modelComparison({
  models: ["gpt-4", "claude-3-opus", "gemini-ultra"],
  comparison_criteria: ["cost", "speed", "quality", "context_window"],
  include_benchmarks: true
});
```

---

### 34. Model Updates Tool

**What it does:** Tracks when models are updated, added, or deprecated.

**When to use:** To stay informed about changes to your preferred models.

**Parameters:**
- `timeframe` (optional): Period to check for updates
- `model_filter` (optional): Specific models to track
- `update_types` (optional): Types of updates to show

**Usage Examples:**

```typescript
// Recent model updates
await mcp.tools.modelUpdates({
  timeframe: "week",
  update_types: ["new_model", "price_change", "capability_update"]
});

// Track specific models
await mcp.tools.modelUpdates({
  model_filter: ["gpt-4", "claude-3-opus"],
  timeframe: "month"
});
```

---

### 35. Recommendation Engine Tool

**What it does:** AI-powered model recommendations based on your usage patterns.

**When to use:** To discover models that might work better for your specific needs.

**Parameters:**
- `recommendation_type` (required): usage_based, task_based, cost_based, performance_based
- `constraints` (optional): Budget or performance constraints
- `explain_reasoning` (optional): Include explanation (default: true)

**Usage Examples:**

```typescript
// Usage-based recommendations
await mcp.tools.recommendationEngine({
  recommendation_type: "usage_based",
  explain_reasoning: true
});

// Cost-optimized recommendations
await mcp.tools.recommendationEngine({
  recommendation_type: "cost_based",
  constraints: {
    max_monthly_cost: 50,
    min_quality_score: 80
  }
});
```

---

## Terminal UI Tools

### 36. Interactive Menu Tool

**What it does:** Creates beautiful terminal menus for easy navigation.

**When to use:** To explore features visually instead of memorizing commands.

**Parameters:**
- `menu_type` (required): main, analytics, benchmarks, cost, failover
- `theme` (optional): Color theme to use
- `navigation_mode` (optional): keyboard, mouse, both

**Usage Examples:**

```typescript
// Main menu
await mcp.tools.interactiveMenu({
  menu_type: "main",
  theme: "dark"
});

// Analytics menu
await mcp.tools.interactiveMenu({
  menu_type: "analytics",
  navigation_mode: "keyboard"
});
```

---

### 37. Progress Visualization Tool

**What it does:** Shows real-time progress for long-running operations.

**When to use:** Automatically appears for consensus requests, benchmarks, etc.

**Parameters:**
- `operation_id` (required): ID of operation to visualize
- `display_style` (optional): spinner, bar, stages, detailed
- `update_frequency` (optional): How often to update display

**Usage Examples:**

```typescript
// Stage-based progress for consensus
await mcp.tools.progressVisualization({
  operation_id: "consensus_123",
  display_style: "stages"
});

// Progress bar for benchmark
await mcp.tools.progressVisualization({
  operation_id: "benchmark_456",
  display_style: "bar",
  update_frequency: 500
});
```

---

### 38. Data Table Tool

**What it does:** Formats complex data into beautiful, readable tables.

**When to use:** For displaying analytics, comparisons, and reports.

**Parameters:**
- `data` (required): Data to display
- `columns` (optional): Column configuration
- `formatting` (optional): Table formatting options
- `interactive` (optional): Enable sorting/filtering

**Usage Examples:**

```typescript
// Model comparison table
await mcp.tools.dataTable({
  data: modelComparisonData,
  columns: [
    { key: "name", title: "Model", width: 20 },
    { key: "cost", title: "Cost/1K", format: "currency" },
    { key: "speed", title: "Speed", format: "duration" },
    { key: "score", title: "Score", format: "percentage" }
  ],
  interactive: true
});

// Cost analysis table
await mcp.tools.dataTable({
  data: costData,
  formatting: {
    theme: "compact",
    colors: true,
    borders: true
  }
});
```

---

## Profile Management Tools

### 39. Profile Configuration Tool

**What it does:** Create and manage custom AI pipeline configurations.

**When to use:** To optimize performance for specific types of work.

**Parameters:**
- `action` (required): create, update, delete, list
- `profile_name` (required): Name of the profile
- `configuration` (optional): Profile settings
- `template` (optional): Base template to start from

**Usage Examples:**

```typescript
// Create coding profile
await mcp.tools.profileConfiguration({
  action: "create",
  profile_name: "coding",
  configuration: {
    primary_models: ["gpt-4", "code-llama-34b"],
    quality_focus: "accuracy",
    cost_sensitivity: "medium",
    response_time_preference: "balanced"
  }
});

// Update existing profile
await mcp.tools.profileConfiguration({
  action: "update",
  profile_name: "writing",
  configuration: {
    primary_models: ["claude-3-opus", "gpt-4"]
  }
});
```

---

### 40. Profile Switching Tool

**What it does:** Instantly switch between different profile configurations.

**When to use:** When changing from one type of work to another.

**Parameters:**
- `target_profile` (required): Profile to switch to
- `apply_immediately` (optional): Apply to current session (default: true)
- `save_current` (optional): Save current settings as temporary profile

**Usage Examples:**

```typescript
// Switch to coding profile
await mcp.tools.profileSwitching({
  target_profile: "coding",
  apply_immediately: true
});

// Switch and save current settings
await mcp.tools.profileSwitching({
  target_profile: "cost_effective",
  save_current: true
});
```

---

### 41. Profile Analytics Tool

**What it does:** Track performance and costs for different profiles.

**When to use:** To optimize your profile configurations based on actual usage.

**Parameters:**
- `analysis_type` (required): performance, cost, usage, comparison
- `profiles` (optional): Specific profiles to analyze
- `timeframe` (optional): Period to analyze

**Usage Examples:**

```typescript
// Compare profile performance
await mcp.tools.profileAnalytics({
  analysis_type: "comparison",
  profiles: ["coding", "writing", "general"],
  timeframe: "month"
});

// Cost analysis by profile
await mcp.tools.profileAnalytics({
  analysis_type: "cost",
  timeframe: "quarter"
});
```

---

## Integration Patterns

### Using Tools in VS Code

```typescript
// Example VS Code extension integration
import { MCPClient } from '@hivetechs/mcp-client';

const mcp = new MCPClient({
  apiKey: process.env.HIVE_API_KEY
});

// Use consensus for code explanation
const explanation = await mcp.tools.consensusRequest({
  prompt: `Explain this function: ${selectedCode}`,
  quality: "high"
});

// Show in VS Code info panel
vscode.window.showInformationMessage(explanation.content);
```

### Using Tools in Claude Desktop

```
// Just ask naturally:
"Use hive-tools to analyze this code and suggest improvements"
"Show me hive-tools performance analytics for the last month"
"Compare GPT-4 and Claude-3 using hive-tools benchmarks"
```

### Custom Application Integration

```javascript
const { HiveToolsClient } = require('@hivetechs/client');

const client = new HiveToolsClient('your-api-key');

// Chain multiple tools
const analysis = await client.tools.performanceAnalytics({
  timeframe: "month"
});

const insights = await client.tools.insightsGeneration({
  focus: "cost"
});

const optimizations = await client.tools.costOptimization({
  optimization_focus: "balance"
});
```

---

## Best Practices

### Tool Selection

1. **Start Simple** - Begin with basic tools like consensusRequest
2. **Use Analytics** - Regularly check performanceAnalytics to optimize
3. **Set Budgets** - Use budgetManagement to control costs
4. **Enable Failover** - Use automaticFailover for reliability

### Performance Optimization

1. **Profile-Based Usage** - Create profiles for different tasks
2. **Cost Monitoring** - Use costTracking and budgetManagement
3. **Quality Control** - Adjust quality levels based on importance
4. **Model Selection** - Use benchmarkTestRunner to find best models

### Error Handling

```typescript
try {
  const result = await mcp.tools.consensusRequest({
    prompt: "Your question"
  });
} catch (error) {
  if (error.code === 'RATE_LIMIT') {
    // Use failover or wait
    await mcp.tools.automaticFailover({ enabled: true });
  } else if (error.code === 'BUDGET_EXCEEDED') {
    // Switch to cheaper models
    await mcp.tools.profileSwitching({ target_profile: "cost_effective" });
  }
}
```

---

**You now have complete documentation for all 41 MCP tools!** Each tool is designed to work seamlessly together, providing a comprehensive AI development platform.

For specific implementation help, visit our [support page](/support) or check the [main documentation](/documentation).