# Hive.AI Multi-Model Consensus Pipeline (MCP) Tool

The Hive.AI MCP tool provides access to our powerful multi-model consensus pipeline, enabling developers to generate higher quality AI responses by combining the strengths of multiple specialized models.

## Getting Started

There are two primary ways to interact with the Hive.AI MCP tool:

1. **Through our AI Assistant** - Natural language interface
2. **Using the CLI** - Command-line interface for configuration and automation

## Installation

```bash
# Using npm
npm install -g @hivetechs/cli

# Using yarn
yarn global add @hivetechs/cli

# Using pip (Python version)
pip install hivetechs
```

## Configuration

Before using the Hive.AI MCP tool, you'll need to configure your API key:

```bash
hive configure --api-key YOUR_API_KEY
```

You can obtain an API key from your [Hive.AI dashboard](https://dashboard.hivetechs.io).

## Basic Usage

### Using the CLI

Generate a consensus response:

```bash
hive consensus "How can I implement authentication in my Next.js application?"
```

Capture insights for future reference:

```bash
hive capture --title "Next.js Authentication Best Practices" --content "..." --tags "nextjs,auth"
```

### Using the AI Assistant

You can also interact with the Hive.AI MCP tool through our AI Assistant by simply asking questions in natural language. The assistant will use the appropriate MCP tools behind the scenes.

## Advanced Configuration

### Configure Providers

Add a new provider with your API key:

```bash
hive configure-provider "OpenAI" "sk-your-api-key"
hive configure-provider "Anthropic" "sk-your-api-key"
hive configure-provider "Google" "your-api-key" "https://api.google.com/v1"
```

### Custom Models

Add a custom model to the registry:

```bash
hive add-custom-model "OpenAI gpt-4-turbo-preview Technical 8192"
```

### Pipeline Profiles

Create custom pipeline profiles with different models for each stage:

```bash
hive configure-pipeline "technical_profile" "OpenAI:gpt-4:0.7" "Anthropic:claude-3-opus:0.5" "Google:gemini-pro:0.2" "OpenAI:gpt-3.5-turbo:0.8"
```

Set a default profile:

```bash
hive set-default-profile "technical_profile"
```

## Common Commands

| Command | Description |
|---------|-------------|
| `hive consensus "prompt"` | Generate a response using the consensus pipeline |
| `hive capture` | Save insights to your knowledge base |
| `hive list-providers` | List all configured providers |
| `hive list-models --provider "OpenAI"` | List available models for a provider |
| `hive test-providers` | Test all provider connections |
| `hive list-pipeline-profiles` | List all configured pipeline profiles |

## Integrating with Development Workflows

### VS Code Extension

Our VS Code extension allows you to access the Hive.AI MCP tool directly from your editor. Install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=hivetechs.mcp-tool).

### API Usage

For programmatic access, you can use our API directly:

```javascript
const { HiveAI } = require('@hivetechs/node');
const hiveai = new HiveAI('your-api-key');

async function getConsensusResponse() {
  const response = await hiveai.consensus({
    prompt: "How can I implement authentication in my Next.js application?",
    profile_id: "default" // Optional
  });
  
  console.log(response);
}

getConsensusResponse();
```

## Troubleshooting

### API Key Issues

If you encounter authentication errors, verify your API key is correctly configured:

```bash
hive test-providers
```

### Rate Limiting

If you hit rate limits, consider:
- Using a higher tier subscription
- Implementing request throttling
- Caching common responses

### Provider-Specific Issues

For provider-specific issues, check our documentation for known limitations and workarounds.

## Support

For additional help, contact our support team at support@hivetechs.io or visit our [documentation](https://docs.hivetechs.io).
