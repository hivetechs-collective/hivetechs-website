import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { credits } = await request.json();

    // Map credit amounts to Gumroad product IDs
    const creditMap: Record<string, string> = {
      '50': '50-credits',
      '200': '200-credits', 
      '500': '500-credits',
    };

    const productId = creditMap[credits];
    if (!productId) {
      return NextResponse.json(
        { error: 'Invalid credit amount' },
        { status: 400 }
      );
    }

    // For now, return the static Gumroad URL
    // In the future, this could create dynamic checkouts via Gumroad API
    const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`;

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Credit checkout creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout' },
      { status: 500 }
    );
  }
}