// Paddle Sandbox Testing Utilities

export const PADDLE_TEST_CARDS = {
  // Successful payment cards
  success: {
    number: '4242 4242 4242 4242',
    expiry: '12/25',
    cvv: '123',
    description: 'Always approves payments',
  },
  
  // Decline scenarios
  declineGeneric: {
    number: '4000 0000 0000 0002',
    expiry: '12/25',
    cvv: '123',
    description: 'Always declines with generic_decline',
  },
  
  declineInsufficientFunds: {
    number: '4000 0000 0000 0019',
    expiry: '12/25',
    cvv: '123',
    description: 'Always declines with insufficient_funds',
  },
  
  // 3D Secure scenarios
  threeDSecureRequired: {
    number: '4000 0000 0000 3220',
    expiry: '12/25',
    cvv: '123',
    description: 'Always requires 3D Secure authentication',
  },
  
  threeDSecureOptional: {
    number: '4000 0000 0000 3063',
    expiry: '12/25',
    cvv: '123',
    description: '3D Secure authentication optional',
  },
}

export const PADDLE_TEST_SCENARIOS = {
  subscription: {
    newCustomer: {
      email: 'test-new@example.com',
      card: PADDLE_TEST_CARDS.success,
      description: 'Creates new customer with subscription',
    },
    
    upgrade: {
      email: 'test-upgrade@example.com',
      card: PADDLE_TEST_CARDS.success,
      description: 'Tests subscription plan upgrade',
    },
    
    paymentFailure: {
      email: 'test-failure@example.com',
      card: PADDLE_TEST_CARDS.declineInsufficientFunds,
      description: 'Tests payment failure handling',
    },
  },
  
  oneTime: {
    creditPack: {
      email: 'test-credits@example.com',
      card: PADDLE_TEST_CARDS.success,
      description: 'Tests one-time credit pack purchase',
    },
  },
}

// Helper to log test scenarios
export function logTestScenario(scenario: string, details: any) {
  console.log('🧪 Paddle Test Scenario:', scenario)
  console.log('Details:', details)
  console.log('---')
}

// Helper to simulate webhook events in development
export async function simulateWebhook(eventType: string, data: any) {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Webhook simulation only available in development')
  }
  
  const response = await fetch('/api/webhooks/paddle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'paddle-signature': 'test-signature',
    },
    body: JSON.stringify({
      id: `test-${Date.now()}`,
      type: eventType,
      occurredAt: new Date().toISOString(),
      data,
    }),
  })
  
  return response.json()
}