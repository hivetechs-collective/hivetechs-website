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

    // For now, return the static Gumroad URL
    // In the future, this could create dynamic checkouts via Gumroad API
    const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`;

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    );
  }
}