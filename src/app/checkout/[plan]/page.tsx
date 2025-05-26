import CheckoutClient from './checkout-client'

export function generateStaticParams() {
  return [
    { plan: 'basic' },
    { plan: 'standard' },
    { plan: 'premium' },
    { plan: 'team' },
  ]
}

export default function CheckoutPage() {
  return <CheckoutClient />
}