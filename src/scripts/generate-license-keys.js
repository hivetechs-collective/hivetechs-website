// Script to generate license keys for existing users
// Run with: node src/scripts/generate-license-keys.js

import { randomBytes } from 'crypto';

// Generate a license key in format: HIVE-XXXX-XXXX-XXXX-XXXX
function generateLicenseKey() {
  const segments = [];
  for (let i = 0; i < 4; i++) {
    const segment = randomBytes(2).toString('hex').toUpperCase();
    segments.push(segment);
  }
  return `HIVE-${segments.join('-')}`;
}

// Function to create SQL updates for users without license keys
function generateLicenseKeyUpdateSQL(userCount = 10) {
  const updates = [];
  
  for (let i = 0; i < userCount; i++) {
    const licenseKey = generateLicenseKey();
    updates.push(`-- User ${i + 1}: ${licenseKey}`);
    updates.push(`UPDATE users SET license_key = '${licenseKey}' WHERE id = (SELECT id FROM users WHERE license_key IS NULL LIMIT 1);`);
    updates.push('');
  }
  
  return updates.join('\n');
}

// Example usage:
console.log('Generated License Key Update SQL:');
console.log('-- Copy and paste these SQL commands to update users without license keys');
console.log('-- Run each UPDATE command individually to avoid conflicts');
console.log('');
console.log(generateLicenseKeyUpdateSQL(50)); // Generate for up to 50 users

// Function to check what license key format would be generated
console.log('\n\nExample license keys:');
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. ${generateLicenseKey()}`);
}