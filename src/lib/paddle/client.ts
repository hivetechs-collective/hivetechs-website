'use client'

declare global {
  interface Window {
    Paddle: any
  }
}

export class PaddleClient {
  private initialized = false
  private initPromise: Promise<void> | null = null

  async initialize() {
    if (this.initialized) return
    if (this.initPromise) return this.initPromise

    this.initPromise = new Promise((resolve) => {
      // Load Paddle.js
      const script = document.createElement('script')
      script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js'
      script.async = true
      script.onload = () => {
        // Initialize Paddle with vendor ID
        if (window.Paddle) {
          const environment = process.env.NEXT_PUBLIC_PADDLE_SANDBOX === 'true' 
            ? 'sandbox' 
            : 'production'
            
          window.Paddle.Environment.set(environment)
          window.Paddle.Setup({
            vendor: parseInt(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID || '0'),
          })
          
          this.initialized = true
          console.log('Paddle.js initialized in', environment, 'mode')
        }
        resolve()
      }
      document.body.appendChild(script)
    })

    return this.initPromise
  }

  async openCheckout(options: {
    items: Array<{ priceId: string; quantity: number }>
    customerEmail?: string
    successCallback?: () => void
    closeCallback?: () => void
  }) {
    await this.initialize()

    if (!window.Paddle) {
      throw new Error('Paddle.js failed to load')
    }

    // Convert to Paddle format
    const items = options.items.map(item => ({
      price_id: item.priceId,
      quantity: item.quantity,
    }))

    // Open Paddle checkout
    window.Paddle.Checkout.open({
      items,
      customer_email: options.customerEmail,
      success_callback: options.successCallback,
      close_callback: options.closeCallback,
    })
  }

  async openCustomerPortal(customerId: string) {
    // For Paddle, customer portal is a separate URL
    window.open(`https://checkout.paddle.com/customer/${customerId}`, '_blank')
  }

  async updatePaymentMethod(subscriptionId: string) {
    await this.initialize()

    if (!window.Paddle) {
      throw new Error('Paddle.js failed to load')
    }

    // Open payment method update flow
    window.Paddle.Checkout.open({
      override: subscriptionId,
      update_payment_method: true,
    })
  }
}

// Export singleton instance
export const paddleClient = new PaddleClient()