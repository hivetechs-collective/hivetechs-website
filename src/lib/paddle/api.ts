import { PaddleCheckoutRequest, PaddleSubscription, PaddleTransaction } from './types'

const PADDLE_API_URL = process.env.PADDLE_SANDBOX === 'true' 
  ? 'https://sandbox-api.paddle.com' 
  : 'https://api.paddle.com'

class PaddleAPI {
  private apiKey: string | undefined
  private vendorId: string | undefined
  private initialized = false

  constructor() {
    // Don't initialize immediately - wait until first use
  }

  private initialize() {
    if (this.initialized) return
    
    this.apiKey = process.env.PADDLE_API_KEY
    this.vendorId = process.env.PADDLE_VENDOR_ID
    
    if (!this.apiKey || !this.vendorId) {
      throw new Error('Paddle API configuration missing')
    }
    
    this.initialized = true
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    this.initialize() // Ensure initialized before making requests
    
    const response = await fetch(`${PADDLE_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`Paddle API error: ${error.message || response.statusText}`)
    }

    return response.json()
  }

  // Create a checkout session
  async createCheckout(request: PaddleCheckoutRequest) {
    this.initialize() // Ensure initialized
    
    return this.request('/checkout-sessions', {
      method: 'POST',
      body: JSON.stringify({
        vendor_id: this.vendorId,
        items: request.items.map(item => ({
          price_id: item.priceId,
          quantity: item.quantity,
        })),
        customer_email: request.customerEmail,
        success_url: request.successUrl,
        custom_data: request.customData,
      }),
    })
  }

  // Get subscription details
  async getSubscription(subscriptionId: string): Promise<PaddleSubscription> {
    const response = await this.request(`/subscriptions/${subscriptionId}`)
    return this.mapSubscription(response.data)
  }

  // Cancel subscription
  async cancelSubscription(subscriptionId: string, immediately = false) {
    return this.request(`/subscriptions/${subscriptionId}/cancel`, {
      method: 'POST',
      body: JSON.stringify({
        immediately,
      }),
    })
  }

  // Update subscription
  async updateSubscription(subscriptionId: string, priceId: string) {
    return this.request(`/subscriptions/${subscriptionId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        price_id: priceId,
        proration_billing_mode: 'prorated_immediately',
      }),
    })
  }

  // Get transaction
  async getTransaction(transactionId: string): Promise<PaddleTransaction> {
    const response = await this.request(`/transactions/${transactionId}`)
    return this.mapTransaction(response.data)
  }

  // Get customer portal URL
  async getCustomerPortalUrl(customerId: string) {
    // In production, this would generate a secure portal session
    // For now, return the standard portal URL
    return `https://checkout.paddle.com/customer/${customerId}`
  }

  // Verify webhook signature
  verifyWebhookSignature(payload: string, signature: string): boolean {
    // TODO: Implement Paddle webhook signature verification
    // This requires the webhook secret and HMAC validation
    const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET
    if (!webhookSecret) return false
    
    // Placeholder - implement actual signature verification
    return true
  }

  // Map Paddle API response to our types
  private mapSubscription(data: any): PaddleSubscription {
    return {
      id: data.id,
      customerId: data.customer_id,
      productId: data.product_id,
      priceId: data.price_id,
      status: data.status,
      currentPeriodEnd: data.current_billing_period.ends_at,
      cancelledAt: data.cancelled_at,
    }
  }

  private mapTransaction(data: any): PaddleTransaction {
    return {
      id: data.id,
      customerId: data.customer_id,
      status: data.status,
      total: data.total,
      currency: data.currency_code,
      items: data.items.map((item: any) => ({
        productId: item.product_id,
        priceId: item.price_id,
        quantity: item.quantity,
        total: item.total,
      })),
    }
  }
}

// Export singleton instance - lazy initialization
let _paddleAPI: PaddleAPI | null = null

export const paddleAPI = {
  createCheckout: (request: PaddleCheckoutRequest) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.createCheckout(request)
  },
  getSubscription: (subscriptionId: string) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.getSubscription(subscriptionId)
  },
  cancelSubscription: (subscriptionId: string, immediately = false) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.cancelSubscription(subscriptionId, immediately)
  },
  updateSubscription: (subscriptionId: string, priceId: string) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.updateSubscription(subscriptionId, priceId)
  },
  getTransaction: (transactionId: string) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.getTransaction(transactionId)
  },
  getCustomerPortalUrl: (customerId: string) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.getCustomerPortalUrl(customerId)
  },
  verifyWebhookSignature: (payload: string, signature: string) => {
    if (!_paddleAPI) _paddleAPI = new PaddleAPI()
    return _paddleAPI.verifyWebhookSignature(payload, signature)
  }
}