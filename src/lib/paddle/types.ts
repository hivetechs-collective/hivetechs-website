// Paddle API Types

export interface PaddleConfig {
  vendorId: string
  apiKey: string
  publicKey: string
  webhookSecret: string
  sandbox: boolean
}

export interface PaddleProduct {
  id: string
  name: string
  description: string
  type: 'subscription' | 'one_time'
  status: 'active' | 'inactive'
}

export interface PaddlePrice {
  id: string
  productId: string
  unitPrice: number
  currency: string
  interval?: 'day' | 'week' | 'month' | 'year'
  intervalCount?: number
}

export interface PaddleSubscription {
  id: string
  customerId: string
  productId: string
  priceId: string
  status: 'active' | 'past_due' | 'paused' | 'cancelled'
  currentPeriodEnd: string
  cancelledAt?: string
}

export interface PaddleTransaction {
  id: string
  customerId: string
  status: 'draft' | 'ready' | 'processing' | 'completed' | 'cancelled'
  total: number
  currency: string
  items: PaddleTransactionItem[]
}

export interface PaddleTransactionItem {
  productId: string
  priceId: string
  quantity: number
  total: number
}

export interface PaddleWebhookEvent {
  id: string
  type: string
  occurredAt: string
  data: any
}

export interface PaddleCheckoutRequest {
  items: Array<{
    priceId: string
    quantity: number
  }>
  customerEmail?: string
  successUrl?: string
  customData?: Record<string, any>
}

export interface PaddleCustomer {
  id: string
  email: string
  name?: string
  subscriptions?: PaddleSubscription[]
  createdAt: string
}