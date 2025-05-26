'use client'

import { useParams } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import CustomCheckout from '@/components/CustomCheckout'
import Image from 'next/image'

const planDetails = {
  basic: { name: 'Basic', price: 5 },
  standard: { name: 'Standard', price: 10 },
  premium: { name: 'Premium', price: 20 },
  team: { name: 'Team', price: 50 },
}

export default function CheckoutClient() {
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
      {/* Hero Section with consistent styling */}
      <section className="relative overflow-hidden bg-dark py-20">
        {/* Animated Background - matching site style */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Logo watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={400} 
            height={400} 
            className="transform translate-x-1/3"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Your Subscription
            </h1>
            <p className="text-xl text-gray-300">
              Join thousands of developers using hive-tools for better AI responses
            </p>
          </div>
          
          <CustomCheckout
            plan={details.name}
            price={details.price}
          />
        </div>
      </section>
    </PageLayout>
  )
}