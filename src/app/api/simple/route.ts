import { NextResponse } from 'next/server'

// No edge runtime - use Node.js runtime instead
export async function GET() {
  console.log('Simple API called - Node.js runtime');
  
  return NextResponse.json({
    success: true,
    message: 'Hello from Node.js runtime!',
    timestamp: new Date().toISOString(),
    runtime: 'nodejs'
  });
}