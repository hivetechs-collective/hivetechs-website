#!/usr/bin/env node

/**
 * Development Setup Script
 * 
 * This script ensures all required files and dependencies
 * are present for local development.
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

console.log(`${colors.blue}${colors.bold}🛠️  Setting up development environment...${colors.reset}\n`);

// Ensure required directories exist
const requiredDirs = [
  'src/lib',
  'src/components/ui',
  '.github/workflows',
  'scripts'
];

for (const dir of requiredDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`${colors.green}✓ Created directory: ${dir}${colors.reset}`);
  }
}

// Create utils.ts if it doesn't exist
const utilsPath = 'src/lib/utils.ts';
if (!fs.existsSync(utilsPath)) {
  const utilsContent = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;
  
  fs.writeFileSync(utilsPath, utilsContent);
  console.log(`${colors.green}✓ Created ${utilsPath}${colors.reset}`);
}

// Check and install required dependencies
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = ['clsx', 'tailwind-merge'];
const missingDeps = [];

for (const dep of requiredDeps) {
  if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
    missingDeps.push(dep);
  }
}

if (missingDeps.length > 0) {
  console.log(`${colors.yellow}Installing missing dependencies: ${missingDeps.join(', ')}${colors.reset}`);
  try {
    execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
    console.log(`${colors.green}✓ Dependencies installed${colors.reset}`);
  } catch (error) {
    console.log(`${colors.red}✗ Failed to install dependencies${colors.reset}`);
    process.exit(1);
  }
}

// Update package.json scripts if needed
if (!packageJson.scripts['check-build']) {
  packageJson.scripts['check-build'] = 'node scripts/check-build.js';
  packageJson.scripts['setup-dev'] = 'node scripts/setup-dev.js';
  
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log(`${colors.green}✓ Added build check scripts to package.json${colors.reset}`);
}

console.log(`\n${colors.green}${colors.bold}🎉 Development environment ready!${colors.reset}`);
console.log(`${colors.blue}Run 'npm run check-build' to validate your setup${colors.reset}`);