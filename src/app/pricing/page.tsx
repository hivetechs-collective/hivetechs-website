'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, ChevronRight, AlertCircle, CheckCircle, Shield, RefreshCw, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import CookieConsentModal from '@/components/CookieConsentModal'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: number
  description: string
  features: PricingFeature[]
  popular?: boolean
  id: string
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    description: 'For occasional users and hobbyists',
    features: [
      { text: '5 daily / 100 monthly conversations', included: true },
      { text: 'Eliminates AI hallucinations', included: true },
      { text: 'Unlimited context & long-term memory', included: true },
      { text: 'All terminal and IDE integrations', included: true },
      { text: 'Community support', included: true },
    ]
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 5,
    description: 'Perfect for individual developers',
    features: [
      { text: '50 daily / 1,000 monthly conversations', included: true },
      { text: 'Eliminates AI hallucinations', included: true },
      { text: 'Unlimited context & long-term memory', included: true },
      { text: 'All terminal and IDE integrations', included: true },
      { text: 'Community support', included: true },
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 10,
    description: 'For power users and small teams',
    features: [
      { text: '100 daily / 2,000 monthly conversations', included: true },
      { text: 'Eliminates AI hallucinations', included: true },
      { text: 'Unlimited context & long-term memory', included: true },
      { text: 'All terminal and IDE integrations', included: true },
      { text: 'Priority processing', included: true },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 20,
    description: 'For professional developers',
    popular: true,
    features: [
      { text: '200 daily / 4,000 monthly conversations', included: true },
      { text: 'Eliminates AI hallucinations', included: true },
      { text: 'Unlimited context & long-term memory', included: true },
      { text: 'All terminal and IDE integrations', included: true },
      { text: 'Priority processing', included: true },
      { text: 'Advanced model combinations', included: true },
    ]
  },
  {
    id: 'team',
    name: 'Team',
    price: 50,
    description: 'For development teams',
    features: [
      { text: '600 daily / 12,000 monthly conversations (shared)', included: true },
      { text: 'Eliminates AI hallucinations', included: true },
      { text: 'Unlimited context & long-term memory', included: true },
      { text: 'All terminal and IDE integrations', included: true },
      { text: 'Priority processing', included: true },
      { text: '5 team members included', included: true },
      { text: 'Dedicated support', included: true },
    ]
  }
]

const creditPacks = [
  { id: '25', credits: 25, price: 3, description: '25 additional conversations that can be used at any time and never expire' },
  { id: '75', credits: 75, price: 7, description: '75 additional conversations that can be used at any time and never expire' },
  { id: '200', credits: 200, price: 15, description: '200 additional conversations that can be used at any time and never expire' },
]

export default function Pricing() {
  const { isAccepted, updateConsent } = useCookieConsent()
  const [showConsentModal, setShowConsentModal] = useState(false)
  const [pendingAction, setPendingAction] = useState<{ type: 'subscribe' | 'credit', value: string } | null>(null)
  
  const handleSubscribe = (plan: string) => {
    // Check cookie consent for non-free plans
    if (plan !== 'free' && !isAccepted) {
      setPendingAction({ type: 'subscribe', value: plan })
      setShowConsentModal(true)
      return
    }
    // Always use custom Paddle checkout
    if (plan === 'free') {
      // Free plan goes to signup
      window.location.href = '/auth/signup'
    } else {
      // All paid plans use custom checkout
      window.location.href = `/checkout/${plan}`
    }
  }

  const handleCreditPurchase = (credits: string) => {
    // Check cookie consent for credit purchases
    if (!isAccepted) {
      setPendingAction({ type: 'credit', value: credits })
      setShowConsentModal(true)
      return
    }
    
    // For now, redirect to contact for credit purchases
    // TODO: Implement credit purchase checkout when Paddle is ready
    alert(`Credit purchases coming soon! You selected ${credits} credits. For now, please contact support@hivetechs.io to purchase additional credits.`)
  }

  const handleConsentAccept = () => {
    updateConsent('accepted')
    setShowConsentModal(false)
    
    // Execute pending action after consent
    if (pendingAction) {
      setTimeout(() => {
        if (pendingAction.type === 'subscribe') {
          handleSubscribe(pendingAction.value)
        } else {
          handleCreditPurchase(pendingAction.value)
        }
        setPendingAction(null)
      }, 100)
    }
  }

  return (
    <PageLayout>
      {/* Hero Section - Paddle Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-20">
        {/* Background Logo */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={400} 
            height={400} 
            className="opacity-10 transform -translate-x-1/3"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pricing that scales with you
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Start with a 7-day unlimited trial with full access to all features. 
                No credit card required. Upgrade, downgrade, or cancel anytime.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/documentation/quick-start">
                  <Button variant="secondary" className="bg-dark-700 hover:bg-dark-600 text-white border border-primary/20">
                    Quick Start Guide →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-dark-800 border-b border-dark-600">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-gray-300">Cancel anytime online</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-gray-300">No cancellation fees</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5 text-primary" />
              <span className="text-gray-300">15-day money-back guarantee</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="text-gray-300">Secure payments by Paddle</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Rejection Notice */}
      {!isAccepted && (
        <section className="py-4 bg-amber-500/10 border-y border-amber-500/20">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-amber-200 text-sm">
                Cookies are required for checkout functionality. 
                <Link href="/cookie-preferences" className="text-amber-400 hover:text-amber-300 underline ml-1">
                  Update preferences
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Plans */}
      <section className="py-20 bg-dark relative overflow-hidden">
        {/* Animated Background - matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        <div className="relative container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl p-8 transition-all duration-300",
                  plan.popular 
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-105" 
                    : "border border-dark-600 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                )}
              >
                {/* Card Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
                
                {/* Floating Orb for each card */}
                <div className={cn(
                  "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl animate-pulse",
                  plan.popular ? "bg-primary/20" : "bg-accent-blue/10"
                )} />
                
                <div className="relative z-10">
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary to-accent-blue text-dark px-4 py-1 rounded-full text-sm font-semibold shadow-lg w-fit mx-auto mb-4">
                      Most popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-300">/month</span>
                    </div>
                    <p className="text-gray-300 mb-3">{plan.description}</p>
                    {plan.id !== 'free' && (
                      <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full w-fit">
                        7-day unlimited trial included
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <>
                        <li key={i} className="flex items-start">
                          <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            feature.included 
                              ? "bg-primary/20" 
                              : "bg-dark-600"
                          )}>
                            {feature.included ? (
                              <Check className="w-3 h-3 text-primary" />
                            ) : (
                              <span className="w-2 h-0.5 bg-dark-500" />
                            )}
                          </div>
                          <span className={cn(
                            "ml-3",
                            feature.included ? "text-gray-300" : "text-gray-500"
                          )}>
                            {feature.text}
                          </span>
                        </li>
                        {i === 0 && (
                          <li className="flex items-start">
                            <Link href="#credit-packs" className="ml-8 text-xs text-primary/80 hover:text-primary transition-colors underline decoration-dotted underline-offset-2">
                              Need more? Get credit packs →
                            </Link>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                  
                  <Button 
                    className={cn(
                      "w-full",
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25 animate-pulse" 
                        : "bg-dark-700 border-dark-600 text-white hover:bg-dark-600"
                    )}
                    onClick={() => handleSubscribe(plan.id)}
                  >
                    {plan.id === 'free' ? 'Sign up free' : 'Start 7-day trial'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-4">
              Need more than 12,000 conversations or custom features?
            </p>
            <Link 
              href="/contact" 
              className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
            >
              Contact us for Enterprise pricing
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Credit Packs */}
      <section id="credit-packs" className="py-20 bg-dark relative overflow-hidden">
        {/* Animated Background - matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark to-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-yellow/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Need more conversations?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Purchase additional conversation credits to supplement your plan. 
                Credits never expire and are perfect for busy periods or special projects.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {creditPacks.map((pack, index) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl p-8 border border-dark-600 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                {/* Card Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
                
                {/* Small floating orb for each card */}
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pack.credits.toLocaleString()} Conversations
                  </h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${pack.price}
                  </div>
                  <p className="text-gray-300 mb-6">
                    {pack.description}
                  </p>
                  <Button
                    className="w-full bg-dark-700 border-dark-600 text-white hover:bg-dark-600"
                    onClick={() => handleCreditPurchase(pack.id)}
                  >
                    Purchase credits
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/3 via-transparent to-accent-blue/3" />
        
        <div className="relative container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <FAQ 
              question="What happens when I reach my conversation limit?"
              answer="We have both daily and monthly limits. When you reach your daily limit, it resets the next day. When you reach your monthly limit, you can purchase additional conversation credits to continue using the service. Your subscription will automatically reset at the beginning of each billing cycle."
            />
            <FAQ 
              question="Can I upgrade or downgrade my plan?"
              answer="Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate applies at your next billing cycle."
            />
            <FAQ 
              question="Do unused conversations roll over?"
              answer="Monthly conversation limits don't roll over, but purchased conversation credits never expire and can be used anytime."
            />
            <FAQ 
              question="What counts as a conversation?"
              answer="Each request to our multi-model consensus pipeline counts as one conversation, regardless of the response length or complexity. All tiers get access to the same models and features - only the conversation limits differ."
            />
            <FAQ 
              question="Is there a refund policy?"
              answer="New users get a 7-day unlimited trial with full access. After that, we offer a 15-day money-back guarantee for new subscriptions. See our refund policy for full details."
            />
            <FAQ 
              question="How do I cancel my subscription?"
              answer="You can cancel anytime through Paddle's customer portal - no hoops to jump through. Access your portal from the link in your email or visit our Manage Subscription page. Your access continues until the end of your billing period. We believe in earning your business every month."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark py-24">
        {/* Animated Background - matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start building with confidence
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join developers using hive-tools to write better code with AI consensus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                  onClick={() => handleSubscribe('basic')}
                >
                  Start your free trial
                </Button>
                <Button 
                  size="lg" 
                  className="bg-dark-700 border-dark-600 text-white hover:bg-dark-600"
                  onClick={() => window.location.href = '/#compare-plans'}
                >
                  Compare plans
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Cookie Consent Modal */}
      <CookieConsentModal
        isOpen={showConsentModal}
        onClose={() => setShowConsentModal(false)}
        onAccept={handleConsentAccept}
      />
    </PageLayout>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg border border-dark-600 p-6 hover:border-primary/30 transition-all"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/3 via-transparent to-accent-blue/3" />
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
        <p className="text-gray-300">{answer}</p>
      </div>
    </motion.div>
  )
}