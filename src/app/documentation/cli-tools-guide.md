# hive-tools CLI Complete Guide

The hive-tools CLI provides powerful command-line access to the multi-model consensus pipeline, knowledge base, and all configuration tools. With automatic prompt optimization, you get the best AI results without needing to be a prompt engineer.

## What's New

- **Automatic Prompt Optimization**: No need to craft perfect prompts - our 4-stage pipeline handles it automatically
- **Comprehensive Knowledge Storage**: Every word from every AI stage is permanently stored
- **Cross-Conversation Learning**: The system learns from all past conversations
- **Database Query Tools**: Direct access to your knowledge base through MCP tools

## Installation

```bash
# Using npm (recommended)
npm install -g @hivetechs/hive-ai

# Alternative: Clone and link locally
git clone https://github.com/hivetechs/hive-ai.git
cd hive-ai
npm install
npm link
```

## Quick Start

```bash
# Configure your license key
hive configure --api-key YOUR_LICENSE_KEY

# Ask a question - no prompt engineering needed!
hive consensus "How do I implement authentication in React?"

# The system automatically:
# 1. Enhances your question for optimal AI comprehension
# 2. Runs it through 4 specialized AI stages
# 3. Stores all outputs permanently
# 4. Returns a polished, accurate answer
```

## Core Commands

### Consensus Pipeline

The heart of hive-tools - get trustworthy AI answers through multi-model consensus:

```bash
# Basic usage - just ask naturally
hive consensus "Explain the CAP theorem"

# The pipeline automatically:
# - Generator: Creates comprehensive initial response
# - Refiner: Enhances with more depth and examples
# - Validator: Ensures factual accuracy
# - Curator: Polishes for clarity and structure

# Use a specific pipeline profile
hive consensus "Complex algorithm question" --profile high_quality

# Continue a previous conversation (temporal continuity)
hive consensus "Based on what we discussed, how should I implement caching?"
```

### Knowledge Base Queries

Access your comprehensive knowledge base with the new database query tool:

```bash
# Search across all conversations
hive query search "React hooks"

# Get a specific conversation with all stage outputs
hive query conversation <conversation-id>

# List recent conversations
hive query list --limit 10

# Search curator outputs (source of truth)
hive query truth "authentication patterns"

# Get all stage outputs for analysis
hive query stages <conversation-id>
```

### Configuration Management

#### Provider Configuration

```bash
# Add providers with API keys
hive configure-provider "OpenAI" "sk-your-api-key"
hive configure-provider "Anthropic" "sk-ant-your-key"
hive configure-provider "Google" "your-gemini-key"
hive configure-provider "Grok" "xai-your-key"

# List all configured providers
hive list-providers

# Test provider connections
hive test-providers
```

#### Model Management

```bash
# List available models for a provider
hive list-models --provider "OpenAI"

# Add custom models
hive add-custom-model "OpenAI" "gpt-4-turbo-preview" "Technical" "8192"

# Update model registry
hive update-model-registry
```

#### Pipeline Profiles

Create custom pipelines for different use cases:

```bash
# Create a high-quality profile
hive configure-pipeline "high_quality" \
  --generator "OpenAI:gpt-4:0.7" \
  --refiner "Anthropic:claude-3-opus:0.5" \
  --validator "Google:gemini-1.5-pro:0.3" \
  --curator "OpenAI:gpt-4:0.2"

# Create a fast profile
hive configure-pipeline "fast" \
  --generator "Gemini:gemini-1.5-flash:0.7" \
  --refiner "Grok:grok-3-beta:0.5" \
  --validator "Gemini:gemini-1.5-flash:0.3" \
  --curator "Grok:grok-3-beta:0.2"

# Set default profile
hive set-default-profile "high_quality"

# List all profiles
hive list-pipeline-profiles
```

## Advanced Features

### Cross-Conversation Learning

The system automatically learns from all past conversations:

```bash
# Ask about a topic you've discussed before
hive consensus "Can you elaborate on the React Context API we discussed?"

# The system will:
# 1. Recognize the thematic connection
# 2. Retrieve relevant source-of-truth knowledge
# 3. Build upon previous curator outputs
# 4. Maintain consistency across conversations
```

### Temporal Continuity

Continue conversations naturally:

```bash
# Start a conversation
hive consensus "I'm building a Node.js API with Express"

# Later, continue it
hive consensus "Based on that structure, how should I add authentication?"

# The system maintains context and continuity
```

### Knowledge Base Analysis

```bash
# Analyze how knowledge evolves over time
hive query evolution "machine learning"

# Find all conversations on a topic
hive query topic "react hooks"

# Export stage outputs for analysis
hive query export <conversation-id> --format json
```

## Database Schema

All conversation data is stored in `~/.hive-ai/hive-ai-knowledge.db`:

- **conversations**: Metadata and final answers
- **stage_outputs**: Complete output from all 4 stages
- **knowledge_base**: Curator outputs as source of truth
- **conversation_topics**: Extracted topics for thematic retrieval
- **conversation_keywords**: Keywords for enhanced search

## Testing Your Setup

Use our comprehensive testing tools:

```bash
# Test single conversation quality
hive test consensus "Complex technical question"

# Test cross-conversation knowledge
hive test knowledge-retrieval

# Test thematic memory
hive test thematic-memory

# Verify pipeline stages
node verify-consensus-pipeline.cjs
```

## Best Practices

1. **Just Ask Naturally**: No need to craft perfect prompts - the system handles optimization
2. **Be Specific**: Include context and examples in your questions
3. **Use Continuity**: Reference previous conversations for building knowledge
4. **Check Your Knowledge**: Use query tools to explore what the system has learned
5. **Profile Selection**: Use appropriate profiles for your use case (quality vs speed)

## MCP Tool Integration

For IDE users, the database query tool is available as an MCP tool:

```typescript
// Available operations
{
  tool: "database_query",
  operation: "search_conversations",    // Search by content
  operation: "get_conversation",       // Get specific conversation
  operation: "list_all_conversations", // List recent conversations
  operation: "search_source_of_truth", // Search curator outputs
  operation: "get_knowledge",          // Get knowledge for topic
  operation: "get_stage_outputs"       // Get all stages for conversation
}
```

## Troubleshooting

### Token Limits
If you see truncated responses, the generator hit token limits. The refiner will expand the content.

### Identical Stage Outputs
If validator output matches refiner output, this indicates the refiner output is already optimal - not an error!

### Knowledge Not Retrieved
Ensure you have previous conversations on the topic. Knowledge retrieval prioritizes:
1. Last 24 hours
2. Last 7 days  
3. All historical data

## Environment Variables

```bash
# Optional: Set default profile
export HIVE_DEFAULT_PROFILE="high_quality"

# Optional: Set custom database location
export HIVE_DB_PATH="/custom/path/hive-knowledge.db"

# Optional: Enable debug logging
export HIVE_DEBUG="true"
```

## Getting Help

```bash
# Show help for any command
hive --help
hive consensus --help
hive query --help

# Report issues
https://github.com/hivetechs/hive-ai/issues
```

Remember: You no longer need to be a prompt engineer. Just ask your questions naturally, and hive-tools handles the rest through automatic prompt optimization and multi-stage consensus processing.