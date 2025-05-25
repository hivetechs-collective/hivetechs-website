import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();

    // Map plan names to Gumroad product IDs
    const productMap: Record<string, string> = {
      'basic': 'basic-plan',
      'standard': 'standard-plan',
      'premium': 'premium-plan',
      'team': 'team-plan',
    };

    const productId = productMap[plan];
    if (!productId) {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      );
    }

    // Get the base URL for redirect
    const baseUrl = request.headers.get('origin') || 'https://hivetechs.com';
    const redirectUrl = `${baseUrl}/thank-you`;
    
    // Create checkout URL with redirect parameter
    // Note: You'll need to configure this redirect URL in your Gumroad product settings
    const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true&redirect_url=${encodeURIComponent(redirectUrl)}`;

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    );
  }
}