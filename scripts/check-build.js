#!/usr/bin/env node

/**
 * Build Check Script
 * 
 * This script validates that the website can build successfully
 * and checks for common issues like missing dependencies.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

console.log(`${colors.blue}${colors.bold}🔍 Website Build Check${colors.reset}\n`);

// Check 1: Node modules installed
console.log(`${colors.blue}1. Checking dependencies...${colors.reset}`);
if (!fs.existsSync('node_modules')) {
  console.log(`${colors.red}✗ node_modules not found. Run: npm install${colors.reset}`);
  process.exit(1);
}
console.log(`${colors.green}✓ Dependencies installed${colors.reset}`);

// Check 2: Required utilities exist
console.log(`${colors.blue}2. Checking required utilities...${colors.reset}`);
const requiredFiles = [
  'src/lib/utils.ts',
  'src/components/ui/Button.tsx'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.log(`${colors.red}✗ Missing required file: ${file}${colors.reset}`);
    process.exit(1);
  }
}
console.log(`${colors.green}✓ Required utilities exist${colors.reset}`);

// Check 3: Package.json has required dependencies
console.log(`${colors.blue}3. Checking package.json dependencies...${colors.reset}`);
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = ['clsx', 'tailwind-merge'];

for (const dep of requiredDeps) {
  if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
    console.log(`${colors.red}✗ Missing dependency: ${dep}${colors.reset}`);
    console.log(`${colors.yellow}Run: npm install ${dep}${colors.reset}`);
    process.exit(1);
  }
}
console.log(`${colors.green}✓ Required dependencies in package.json${colors.reset}`);

// Check 4: Build test (quick compilation check)
console.log(`${colors.blue}4. Testing TypeScript compilation...${colors.reset}`);
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe' });
  console.log(`${colors.green}✓ TypeScript compilation successful${colors.reset}`);
} catch (error) {
  console.log(`${colors.red}✗ TypeScript compilation failed${colors.reset}`);
  console.log(error.stdout?.toString() || error.stderr?.toString());
  process.exit(1);
}

console.log(`\n${colors.green}${colors.bold}🎉 All checks passed! Website is ready.${colors.reset}`);