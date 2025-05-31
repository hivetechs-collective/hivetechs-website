#!/bin/bash

# Hive.AI Installation Script
# Usage: curl -sSL hivetechs.io/install.sh | bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Detect platform
OS=$(uname -s)
ARCH=$(uname -m)

case $OS in
    Linux*)     PLATFORM="linux";;
    Darwin*)    PLATFORM="macos";;
    CYGWIN*|MINGW32*|MSYS*|MINGW*) PLATFORM="windows";;
    *)          PLATFORM="unknown";;
esac

case $ARCH in
    x86_64|amd64) ARCH="amd64";;
    arm64|aarch64) ARCH="arm64";;
    *)          ARCH="unknown";;
esac

if [ "$PLATFORM" = "unknown" ] || [ "$ARCH" = "unknown" ]; then
    echo -e "${RED}❌ Unsupported platform: $OS $ARCH${NC}"
    echo "Please download manually from: https://github.com/hivetechs-collective/hive.ai/releases"
    exit 1
fi

# Binary name
if [ "$PLATFORM" = "windows" ]; then
    BINARY_NAME="hive-tools-${PLATFORM}-${ARCH}.exe"
    INSTALL_NAME="hive.exe"
else
    BINARY_NAME="hive-tools-${PLATFORM}-${ARCH}"
    INSTALL_NAME="hive"
fi

echo -e "${BLUE}🐝 Hive.AI Installation${NC}"
echo -e "Installing for: ${YELLOW}$PLATFORM-$ARCH${NC}"
echo

# Get latest release info
echo -e "${BLUE}📡 Fetching latest release...${NC}"
LATEST_RELEASE=$(curl -s https://api.github.com/repos/hivetechs-collective/hive.ai/releases/latest)
DOWNLOAD_URL=$(echo "$LATEST_RELEASE" | grep -o "https://github.com/hivetechs-collective/hive.ai/releases/download/[^\"]*/$BINARY_NAME" | head -1)
VERSION=$(echo "$LATEST_RELEASE" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

if [ -z "$DOWNLOAD_URL" ]; then
    echo -e "${RED}❌ Could not find binary for $PLATFORM-$ARCH${NC}"
    echo "Available at: https://github.com/hivetechs-collective/hive.ai/releases"
    exit 1
fi

echo -e "${GREEN}✅ Found version: $VERSION${NC}"

# Download binary
TEMP_DIR=$(mktemp -d)
TEMP_FILE="$TEMP_DIR/$BINARY_NAME"

echo -e "${BLUE}⬇️  Downloading...${NC}"
if command -v curl >/dev/null 2>&1; then
    curl -L "$DOWNLOAD_URL" -o "$TEMP_FILE"
elif command -v wget >/dev/null 2>&1; then
    wget "$DOWNLOAD_URL" -O "$TEMP_FILE"
else
    echo -e "${RED}❌ Neither curl nor wget found. Please install one of them.${NC}"
    exit 1
fi

# Verify download
if [ ! -f "$TEMP_FILE" ]; then
    echo -e "${RED}❌ Download failed${NC}"
    exit 1
fi

# Make executable
chmod +x "$TEMP_FILE"

# Install location
if [ "$PLATFORM" = "windows" ]; then
    INSTALL_DIR="$HOME/bin"
else
    if [ -w "/usr/local/bin" ]; then
        INSTALL_DIR="/usr/local/bin"
    else
        INSTALL_DIR="$HOME/.local/bin"
    fi
fi

# Create install directory if it doesn't exist
mkdir -p "$INSTALL_DIR"

# Install binary
INSTALL_PATH="$INSTALL_DIR/$INSTALL_NAME"
echo -e "${BLUE}📦 Installing to $INSTALL_PATH...${NC}"

if [ -w "$INSTALL_DIR" ]; then
    cp "$TEMP_FILE" "$INSTALL_PATH"
else
    echo -e "${YELLOW}⚠️  Need sudo access to install to $INSTALL_DIR${NC}"
    sudo cp "$TEMP_FILE" "$INSTALL_PATH"
fi

# Cleanup
rm -rf "$TEMP_DIR"

echo -e "${GREEN}✅ Installation completed!${NC}"
echo

# Check if binary is in PATH
if command -v "$INSTALL_NAME" >/dev/null 2>&1; then
    echo -e "${GREEN}✅ $INSTALL_NAME is available in PATH${NC}"
else
    echo -e "${YELLOW}⚠️  $INSTALL_NAME is not in PATH${NC}"
    if [ "$INSTALL_DIR" = "$HOME/.local/bin" ]; then
        echo "Add this to your shell profile (.bashrc, .zshrc, etc.):"
        echo "export PATH=\"\$HOME/.local/bin:\$PATH\""
    elif [ "$INSTALL_DIR" = "$HOME/bin" ]; then
        echo "Add this to your shell profile (.bashrc, .zshrc, etc.):"
        echo "export PATH=\"\$HOME/bin:\$PATH\""
    fi
fi

echo
echo -e "${BLUE}🚀 Quick Start:${NC}"
echo "1. Setup wizard:"
echo -e "   ${GREEN}$INSTALL_NAME setup wizard${NC}"
echo
echo "2. Start free trial (7 days unlimited):"
echo -e "   ${GREEN}$INSTALL_NAME trial start --email your@email.com${NC}"
echo
echo "3. Or configure your own API keys:"
echo -e "   ${GREEN}$INSTALL_NAME provider configure openai YOUR_KEY${NC}"
echo
echo -e "${BLUE}📚 Docs: ${NC}https://hivetechs.io/docs"
echo -e "${BLUE}🎯 Pricing: ${NC}https://hivetechs.io/pricing"
echo
echo -e "${GREEN}🎉 Welcome to Hive.AI!${NC}"