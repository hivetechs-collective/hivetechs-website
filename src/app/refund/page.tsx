'use client'

import PageLayout from '@/components/PageLayout'
import { motion } from 'framer-motion'
import { RefreshCw, Clock, CreditCard, AlertCircle, CheckCircle, XCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function RefundPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-16">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute left-0 bottom-0 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={300} 
            height={300} 
            className="opacity-10 transform -translate-x-1/3 translate-y-1/3"
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
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-white">Refund Policy</h1>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                We stand behind our tools with a fair, transparent refund policy.
              </p>
              <p className="text-gray-400">Last updated: May 27, 2025</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Money-Back Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-primary/30 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">15-Day Money-Back Guarantee</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Try hive-tools risk-free. If you&apos;re not completely satisfied within 15 days of your first purchase, 
                we&apos;ll give you a full refund. No questions asked.
              </p>
              <div className="mt-4 bg-primary/10 rounded-lg p-4">
                <p className="text-primary text-sm">
                  <strong>Note:</strong> This applies to new subscriptions only. The 7-day free trial doesn&apos;t count toward the 15-day period.
                </p>
              </div>
            </motion.div>

            {/* Subscription Refunds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">Subscription Refunds</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Monthly Subscriptions</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">First month:</strong> Full refund within 15 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">Renewals:</strong> No refunds for subsequent months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">Cancellation:</strong> Access continues until period ends</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Annual Subscriptions</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">0-15 days:</strong> Full refund</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">16-30 days:</strong> Pro-rated refund</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">After 30 days:</strong> No refunds</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Team Plans</h3>
                  <p className="text-gray-300">
                    Same refund terms as individual subscriptions. Refunds apply to the entire team license.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Credit Packs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">Credit Pack Refunds</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                Credit packs are generally non-refundable since they never expire. 
                However, we&apos;ll consider refunds for:
              </p>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Accidental duplicate purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technical issues preventing credit use within 7 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Billing errors or unauthorized charges</span>
                </li>
              </ul>
            </motion.div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">How to Request a Refund</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Contact Support</h4>
                    <p className="text-gray-300">
                      Email <a href="mailto:support@hivetechs.io" className="text-primary hover:text-primary-light underline">support@hivetechs.io</a> with 
                      "Refund Request" in the subject line
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Include Details</h4>
                    <p className="text-gray-300">
                      Provide your license key or order ID from Paddle
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Quick Response</h4>
                    <p className="text-gray-300">
                      We&apos;ll respond within 2 business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Processing</h4>
                    <p className="text-gray-300">
                      Paddle processes refunds within 5-10 business days to your original payment method
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Non-Refundable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-700 rounded-2xl border border-amber-500/20 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-semibold text-white">When Refunds Aren&apos;t Available</h2>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Violation of our Terms of Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Attempting to abuse the refund policy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Chargebacks filed without contacting us first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Accounts suspended for policy violations</span>
                </li>
              </ul>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-dark-600 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">Good to Know</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Cancellation vs Refund:</strong> Canceling stops future charges but keeps access until the period ends. 
                      Refunds return your money but may end access immediately.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Free Trial:</strong> The 7-day free trial is separate from the 15-day money-back guarantee, 
                      which starts when you make your first payment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-white">Payment Processor:</strong> All refunds are processed by Paddle, our payment partner, 
                      ensuring secure and timely returns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-600">
                <p className="text-gray-400 text-sm mb-4">
                  Questions about refunds? We&apos;re here to help.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/contact" 
                    className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                  >
                    Contact Support
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                  >
                    Terms of Service
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