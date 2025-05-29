#!/bin/bash

echo "🔍 Pre-deployment Testing..."
echo "================================"

# 1. TypeScript check
echo "1️⃣ Checking TypeScript..."
if npx tsc --noEmit; then
    echo "✅ TypeScript check passed"
else
    echo "❌ TypeScript errors found. Fix before deploying!"
    exit 1
fi

# 2. Next.js build
echo ""
echo "2️⃣ Testing Next.js build..."
if npm run build; then
    echo "✅ Next.js build successful"
else
    echo "❌ Next.js build failed!"
    exit 1
fi

# 3. Cloudflare build test
echo ""
echo "3️⃣ Testing Cloudflare Pages build..."
if npx @cloudflare/next-on-pages@1; then
    echo "✅ Cloudflare build successful"
else
    echo "❌ Cloudflare build failed!"
    exit 1
fi

echo ""
echo "🎉 All tests passed! Safe to deploy."