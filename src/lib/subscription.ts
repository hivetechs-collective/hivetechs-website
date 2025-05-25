export async function createCheckout(plan: string): Promise<string> {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout');
    }

    const { checkoutUrl } = await response.json();
    return checkoutUrl;
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}

export async function createCreditCheckout(credits: string): Promise<string> {
  try {
    const response = await fetch('/api/checkout/credits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credits }),
    });

    if (!response.ok) {
      throw new Error('Failed to create credit checkout');
    }

    const { checkoutUrl } = await response.json();
    return checkoutUrl;
  } catch (error) {
    console.error('Credit checkout error:', error);
    throw error;
  }
}

export function handleSubscribe(plan: string) {
  createCheckout(plan)
    .then((checkoutUrl) => {
      window.open(checkoutUrl, '_blank');
    })
    .catch((error) => {
      console.error('Subscription error:', error);
      alert('Failed to start checkout. Please try again.');
    });
}

export function handleCreditPurchase(credits: string) {
  createCreditCheckout(credits)
    .then((checkoutUrl) => {
      window.open(checkoutUrl, '_blank');
    })
    .catch((error) => {
      console.error('Credit purchase error:', error);
      alert('Failed to start checkout. Please try again.');
    });
}