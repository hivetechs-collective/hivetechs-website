'use client'

import { useParams } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import CustomCheckout from '@/components/CustomCheckout'

const planDetails = {
  basic: { name: 'Basic', price: 5 },
  standard: { name: 'Standard', price: 10 },
  premium: { name: 'Premium', price: 20 },
  team: { name: 'Team', price: 50 },
}

export default function CheckoutPage() {
  const params = useParams()
  const plan = params.plan as keyof typeof planDetails
  const details = planDetails[plan]

  if (!details) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">Invalid plan selected</p>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <section className="py-20 bg-dark">
        <div className="container-custom">
          <CustomCheckout
            plan={details.name}
            price={details.price}
          />
        </div>
      </section>
    </PageLayout>
  )
}