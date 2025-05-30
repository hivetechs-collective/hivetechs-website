'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PageLayout from '@/components/PageLayout'
import CustomCheckout from '@/components/CustomCheckout'
import Image from 'next/image'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

const planDetails = {
  basic: { name: 'Basic', price: 5 },
  standard: { name: 'Standard', price: 10 },
  premium: { name: 'Premium', price: 20 },
  team: { name: 'Team', price: 50 },
  unlimited: { name: 'Unlimited', price: 30 },
  'team-unlimited': { name: 'Team Unlimited', price: 100 },
}

export default function CheckoutClient() {
  const params = useParams()
  const router = useRouter()
  const { isAccepted, isLoading } = useCookieConsent()
  const plan = params.plan as keyof typeof planDetails
  const details = planDetails[plan]

  useEffect(() => {
    // Redirect to pricing if cookies not accepted
    if (!isLoading && !isAccepted) {
      router.push('/pricing')
    }
  }, [isAccepted, isLoading, router])

  if (!details) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-white">Invalid plan selected</p>
        </div>
      </PageLayout>
    )
  }

  // Show cookie requirement message if not accepted
  if (!isLoading && !isAccepted) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Cookies Required</h2>
            <p className="text-gray-300 mb-6">
              Cookie consent is required to proceed with checkout. Please update your preferences to continue.
            </p>
            <Link href="/cookie-preferences" className="text-primary hover:text-primary-light underline">
              Update Cookie Preferences
            </Link>
          </div>
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
            {details.name.includes('Unlimited') && (
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">🎉 Most Popular Choice</span>
              </div>
            )}
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