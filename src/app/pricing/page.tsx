'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import WorkingButton from '@/components/WorkingButton'

export default function Pricing() {
  const handleSubscribe = (plan: string) => {
    // Direct Gumroad URLs for static site deployment
    const productMap: Record<string, string> = {
      'basic': 'basic-plan',
      'standard': 'standard-plan', 
      'premium': 'premium-plan',
      'team': 'team-plan',
    };
    
    const productId = productMap[plan];
    if (productId) {
      const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`;
      window.open(checkoutUrl, '_blank');
    }
  }

  const handleCreditPurchase = (credits: string) => {
    // Direct Gumroad URLs for credit packs
    const creditMap: Record<string, string> = {
      '100': 'credits-100',
      '500': 'credits-500',
      '1000': 'credits-1000',
    };
    
    const productId = creditMap[credits];
    if (productId) {
      const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`;
      window.open(checkoutUrl, '_blank');
    }
  }
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl mb-8">
              Choose the plan that best fits your needs. All plans include a 7-day free trial with full access to all features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">$5<span className="text-lg text-gray-700 font-semibold">/mo</span></div>
              <p className="pricing-description mb-6">For individual developers</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  50 daily conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  1,000 monthly conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Multi-model consensus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Unlimited context length
                </li>
              </ul>
              <WorkingButton
                url="#"
                text="Start Free Trial"
                fullWidth={true}
                onClick={() => handleSubscribe('basic')}
              />
            </div>

            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">$10<span className="text-lg text-gray-700 font-semibold">/mo</span></div>
              <p className="pricing-description mb-6">For power users</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  100 daily conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  2,000 monthly conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Priority processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Standard model combinations
                </li>
              </ul>
              <WorkingButton
                url="#"
                text="Start Free Trial"
                fullWidth={true}
                onClick={() => handleSubscribe('standard')}
              />
            </div>

            {/* Premium Plan */}
            <div className="bg-primary text-white p-8 rounded-lg shadow-md border border-primary flex flex-col relative">
              <div className="absolute -top-4 right-0 left-0 mx-auto w-max bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
              <div className="text-3xl font-bold mb-2">$20<span className="text-lg text-white/90 font-semibold">/mo</span></div>
              <p className="text-white mb-6 font-medium">For professional developers</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  200 daily conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  4,000 monthly conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  High-priority processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Premium model combinations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Email support
                </li>
              </ul>
              <WorkingButton
                url="#"
                text="Start Free Trial"
                fullWidth={true}
                variant="light"
                onClick={() => handleSubscribe('premium')}
              />
            </div>

            {/* Team Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Team Plan</h3>
              <div className="text-3xl font-bold mb-2 text-gray-900">$50<span className="text-lg text-gray-700 font-semibold">/mo</span></div>
              <p className="pricing-description mb-6">For development teams</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  600 daily shared conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  12,000 monthly shared conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  5 team members included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Team management dashboard
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Priority email support
                </li>
              </ul>
              <WorkingButton
                url="#"
                text="Start Free Trial"
                fullWidth={true}
                onClick={() => handleSubscribe('team')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credit Packs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Need More Conversations?</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Purchase additional credit packs to extend your monthly conversation limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Credit Pack 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Small Pack</h3>
              <div className="text-3xl font-bold mb-2">$10</div>
              <p className="pricing-description mb-6">500 additional conversations</p>
              <WorkingButton
                url="#"
                text="Purchase Now"
                fullWidth={true}
                onClick={() => handleCreditPurchase('50')}
              />
            </div>

            {/* Credit Pack 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Medium Pack</h3>
              <div className="text-3xl font-bold mb-2">$20</div>
              <p className="pricing-description mb-6">1,200 additional conversations</p>
              <WorkingButton
                url="#"
                text="Purchase Now"
                fullWidth={true}
                onClick={() => handleCreditPurchase('200')}
              />
            </div>

            {/* Credit Pack 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Large Pack</h3>
              <div className="text-3xl font-bold mb-2">$50</div>
              <p className="pricing-description mb-6">3,500 additional conversations</p>
              <WorkingButton
                url="#"
                text="Purchase Now"
                fullWidth={true}
                onClick={() => handleCreditPurchase('500')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What happens when I reach my conversation limit?</h3>
              <p className="text-gray-800">
                When you reach your daily or monthly conversation limit, you can purchase additional credit packs to continue using the service. Your subscription will automatically reset at the beginning of each billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-800">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do unused conversations roll over?</h3>
              <p className="text-gray-800">
                No, unused conversations do not roll over to the next month. Your conversation count resets at the beginning of each billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What counts as a conversation?</h3>
              <p className="text-gray-800">
                A conversation is defined as a single request to our multi-model consensus pipeline. Each time you send a prompt and receive a response, that counts as one conversation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Is there a refund policy?</h3>
              <p className="text-gray-800">
                We offer a 7-day free trial for all subscription plans. If you cancel during the trial period, you won't be charged. After the trial period, subscriptions are non-refundable for the current billing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to experience better AI answers?</h2>
            <p className="text-xl mb-8">
              Start your 7-day free trial today and see the difference our multi-model consensus pipeline can make for your projects.
            </p>
            <WorkingButton
              url="#"
              text="Start Free Trial"
              large={true}
              onClick={() => handleSubscribe('basic')}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
