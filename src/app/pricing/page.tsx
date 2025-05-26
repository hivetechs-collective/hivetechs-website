'use client'

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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
    id: 'basic',
    name: 'Basic',
    price: 5,
    description: 'Perfect for individual developers',
    features: [
      { text: '1,000 monthly conversations', included: true },
      { text: 'Multi-model consensus', included: true },
      { text: 'VS Code & Cursor integration', included: true },
      { text: 'Community support', included: true },
      { text: 'Priority processing', included: false },
      { text: 'Team collaboration', included: false },
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 10,
    description: 'For power users and small teams',
    features: [
      { text: '2,000 monthly conversations', included: true },
      { text: 'Multi-model consensus', included: true },
      { text: 'All IDE integrations', included: true },
      { text: 'Priority processing', included: true },
      { text: 'Email support', included: true },
      { text: 'Team collaboration', included: false },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 20,
    description: 'For professional developers',
    popular: true,
    features: [
      { text: '4,000 monthly conversations', included: true },
      { text: 'Advanced model combinations', included: true },
      { text: 'All IDE integrations', included: true },
      { text: 'Priority processing', included: true },
      { text: 'Priority email support', included: true },
      { text: 'API access', included: true },
    ]
  },
  {
    id: 'team',
    name: 'Team',
    price: 50,
    description: 'For development teams',
    features: [
      { text: '12,000 monthly conversations', included: true },
      { text: '5 team members included', included: true },
      { text: 'Team collaboration tools', included: true },
      { text: 'Shared conversation history', included: true },
      { text: 'Admin dashboard', included: true },
      { text: 'Dedicated support', included: true },
    ]
  }
]

const creditPacks = [
  { id: '500', credits: 500, price: 10, description: 'Small pack for extra needs' },
  { id: '1200', credits: 1200, price: 20, description: 'Medium pack with 20% bonus' },
  { id: '3500', credits: 3500, price: 50, description: 'Large pack with 40% bonus' },
]

export default function Pricing() {
  const handleSubscribe = (plan: string) => {
    const productMap: Record<string, string> = {
      'basic': 'basic-plan',
      'standard': 'standard-plan', 
      'premium': 'premium-plan',
      'team': 'team-plan',
    }
    
    const productId = productMap[plan]
    if (productId) {
      const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`
      window.open(checkoutUrl, '_blank')
    }
  }

  const handleCreditPurchase = (credits: string) => {
    const creditMap: Record<string, string> = {
      '500': 'credits-500',
      '1200': 'credits-1200',
      '3500': 'credits-3500',
    }
    
    const productId = creditMap[credits]
    if (productId) {
      const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`
      window.open(checkoutUrl, '_blank')
    }
  }

  return (
    <PageLayout>
      {/* Hero Section - Paddle Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Pricing that scales with you
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Start with a 14-day free trial. No credit card required. 
                Upgrade, downgrade, or cancel anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative bg-white rounded-2xl p-8 transition-all duration-300",
                  plan.popular 
                    ? "border-2 border-primary shadow-xl scale-105" 
                    : "border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        feature.included 
                          ? "bg-green-100" 
                          : "bg-gray-100"
                      )}>
                        {feature.included ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <span className="w-2 h-0.5 bg-gray-400" />
                        )}
                      </div>
                      <span className={cn(
                        "ml-3",
                        feature.included ? "text-gray-700" : "text-gray-400"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Start free trial
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need more conversations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purchase additional credit packs that never expire. 
              Perfect for busy periods or special projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {creditPacks.map((pack, index) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pack.credits.toLocaleString()} Credits
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${pack.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {pack.description}
                </p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => handleCreditPurchase(pack.id)}
                >
                  Purchase credits
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <FAQ 
              question="What happens when I reach my conversation limit?"
              answer="When you reach your monthly limit, you can purchase additional credit packs to continue using the service. Your subscription will automatically reset at the beginning of each billing cycle."
            />
            <FAQ 
              question="Can I upgrade or downgrade my plan?"
              answer="Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate applies at your next billing cycle."
            />
            <FAQ 
              question="Do unused conversations roll over?"
              answer="Monthly conversation limits don't roll over, but purchased credit packs never expire and can be used anytime."
            />
            <FAQ 
              question="What counts as a conversation?"
              answer="Each request to our multi-model consensus pipeline counts as one conversation, regardless of the response length or complexity."
            />
            <FAQ 
              question="Is there a refund policy?"
              answer="We offer a 15-day money-back guarantee for new subscriptions. See our refund policy for full details."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start building with confidence
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of developers using Hive.AI to write better code with AI consensus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => handleSubscribe('basic')}
              >
                Start your free trial
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Compare plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}