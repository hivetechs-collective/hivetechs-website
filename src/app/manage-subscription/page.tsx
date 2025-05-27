'use client'

import PageLayout from '@/components/PageLayout'
import { motion } from 'framer-motion'
import { Settings, ExternalLink, RefreshCw, CheckCircle, XCircle, ChevronRight, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function ManageSubscriptionPage() {
  // In a real implementation, this would check for a customer ID in localStorage or session
  // For now, we'll show the general information page
  
  const handleManageSubscription = () => {
    // This would normally get the customer ID and open their specific portal
    // For demo purposes, we'll show an alert
    alert('To manage your subscription, please check your email for the customer portal link, or contact support@hivetechs.io with your license key.')
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-16">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={300} 
            height={300} 
            className="opacity-10 transform translate-x-1/3"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-white">Manage Subscription</h1>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                Full control over your subscription. Cancel anytime, no questions asked.
              </p>
              <p className="text-gray-400">We believe in earning your business every month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Easy Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-primary/30 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">No Commitment Traps</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                We don&apos;t believe in making it hard to leave. Your subscription, your choice.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-600/50 rounded-lg p-6">
                  <CheckCircle className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">What You Can Do</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Cancel anytime with one click</li>
                    <li>• Change your plan instantly</li>
                    <li>• Update payment methods</li>
                    <li>• Download invoices</li>
                    <li>• Pause subscription temporarily</li>
                  </ul>
                </div>
                
                <div className="bg-dark-600/50 rounded-lg p-6">
                  <RefreshCw className="w-8 h-8 text-accent-blue mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">How Cancellation Works</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Access continues until period ends</li>
                    <li>• No partial month charges</li>
                    <li>• Your license remains valid until expiry</li>
                    <li>• Start a new subscription anytime</li>
                    <li>• Subscription history stays visible</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Access Portal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">Access Your Subscription Portal</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Manage your subscription through Paddle&apos;s secure customer portal. You can:
              </p>
              
              <div className="bg-dark-600/30 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Cancel your subscription (takes effect at period end)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Update payment information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Change subscription plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>View billing history and download invoices</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                onClick={handleManageSubscription}
                className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
              >
                Open Subscription Portal
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-sm text-gray-400 mt-4">
                You&apos;ll need your license key or order ID to access the portal.
              </p>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">How to Cancel</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Find Your Customer Portal Link</h4>
                    <p className="text-gray-300 text-sm">
                      Check your email for "Manage your subscription" link from Paddle
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Click "Cancel Subscription"</h4>
                    <p className="text-gray-300 text-sm">
                      In the portal, you&apos;ll see a clear cancellation option
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Keep Access Until Period Ends</h4>
                    <p className="text-gray-300 text-sm">
                      Continue using hive-tools until your current billing period expires
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-amber-200 text-sm flex items-start">
                  <span className="mr-2">💡</span>
                  <span>
                    <strong>Pro tip:</strong> If you&apos;re thinking of canceling due to an issue, 
                    <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline ml-1">
                      let us know first
                    </Link>
                    . We might be able to help!
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Pause Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Need a Break? Pause Instead</h2>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <p className="text-gray-300 mb-4">
                    Taking a break? You can pause your subscription instead of canceling. This keeps your settings intact:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>No billing while paused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Resume anytime with one click</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Your license key stays the same</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    Available in the Paddle customer portal alongside cancellation options.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Alternative Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Need Help?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Can&apos;t Find Your Portal Link?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Email us at <a href="mailto:support@hivetechs.io" className="text-primary hover:text-primary-light underline">support@hivetechs.io</a> with 
                    your license key and we&apos;ll send you a direct link.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Considering Downgrading?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    You can switch to a lower plan anytime. Changes take effect at your next billing cycle.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-dark-600">
                <p className="text-gray-400 text-sm mb-4">
                  Remember: You&apos;re covered by our 15-day money-back guarantee for new subscriptions.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/refund" 
                    className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                  >
                    View Refund Policy
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                  >
                    Contact Support
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}