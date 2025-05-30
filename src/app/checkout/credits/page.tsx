'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Lock, CreditCard, Shield, Zap, Package } from 'lucide-react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

const creditPackDetails = {
  '25': { credits: 25, price: 3, description: '25 additional conversations' },
  '75': { credits: 75, price: 7, description: '75 additional conversations' },
  '200': { credits: 200, price: 15, description: '200 additional conversations' },
}

export default function CreditCheckout() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { isAccepted, isLoading } = useCookieConsent()
  const pack = searchParams.get('pack') as keyof typeof creditPackDetails
  const details = pack ? creditPackDetails[pack] : null
  
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Redirect to pricing if cookies not accepted or invalid pack
    if (!isLoading && !isAccepted) {
      router.push('/pricing')
    }
    if (!pack || !details) {
      router.push('/pricing#credit-packs')
    }
  }, [isAccepted, isLoading, router, pack, details])

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout/credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pack,
          email,
          payment: {
            cardNumber: cardNumber.replace(/\s/g, ''),
            expiry,
            cvv
          }
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Payment failed')
      }

      // Redirect to success page
      router.push('/credits-success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed')
    } finally {
      setLoading(false)
    }
  }

  if (!details) {
    return null
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
              Purchase Conversation Credits
            </h1>
            <p className="text-xl text-gray-300">
              Add extra conversations to your account - credits never expire
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto p-8 bg-dark-700 rounded-2xl border border-dark-600 shadow-xl relative overflow-hidden"
          >
            {/* Subtle gradient overlay matching site style */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Complete your purchase
              </h2>
              
              {/* Credit Pack Summary */}
              <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-lg border border-primary/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{details.credits} Credit Pack</p>
                      <p className="text-sm text-gray-300">{details.description}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-white">${details.price}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-gray-300">One-time purchase</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-gray-300">Credits never expire</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-gray-300">Use anytime with any plan</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-[#222] transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-[#222] transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-[#222] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-[#222] transition-all"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Purchase ${details.credits} credits for $${details.price}`}
                </Button>

                <div className="mt-6 space-y-3">
                  {/* Security badges */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs">SSL encrypted</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 text-center">
                    Powered by Paddle. Your payment info is secure and encrypted.
                  </p>
                  
                  {/* Temporary notice - remove when Paddle is live */}
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                    <p className="text-xs text-amber-300 text-center">
                      🚧 Demo Mode: Paddle integration pending. Use test card 4242 4242 4242 4242
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}