'use client'

import PageLayout from '@/components/PageLayout'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Cookie, Server, CreditCard, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-16">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={300} 
            height={300} 
            className="opacity-10 transform -translate-x-1/3"
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
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                We believe in minimal data collection. No tracking, no analytics, just what&apos;s necessary.
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
            {/* Privacy Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">Our Privacy Philosophy</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                HiveTechs Collective LLC respects your privacy. We built our tools to enhance your development workflow, 
                not to harvest your data. We don&apos;t use analytics trackers, we don&apos;t profile users, and we never sell data. 
                Your code and queries remain private and are never stored permanently.
              </p>
            </motion.div>

            {/* What We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">What We Actually Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">When You Visit Our Website</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">Nothing</strong> - No Google Analytics, no tracking pixels, no behavioral tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">Cookie consent choice</strong> - Stored locally in your browser using localStorage</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">When You Make a Purchase</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">Email address</strong> - To send your license key and important updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">Payment information</strong> - Handled entirely by Paddle (we never see your card details)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">License key</strong> - Generated for your hive-tools CLI activation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">When You Use hive-tools CLI</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">License validation</strong> - Periodic checks to verify active subscription</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">Your code stays private</strong> - All AI processing happens through your API keys, not ours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong className="text-white">No usage tracking</strong> - We don&apos;t monitor what you build or how you use the tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">Cookie Usage</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We use minimal cookies and only with your consent. 
                <Link href="/cookie-preferences" className="text-primary hover:text-primary-light underline ml-1">
                  Manage your preferences
                </Link>
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">None. We use localStorage for consent preferences instead.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Third-Party Cookies</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong className="text-white">Paddle</strong> - Payment processing and subscription management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Only loaded after you explicitly consent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Required for checkout functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">Data Sharing & Third Parties</h2>
              </div>
              
              <p className="text-gray-300 mb-4">We never sell your data. We share information only with:</p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong className="text-white">Paddle</strong> - Our payment processor 
                    <Link href="https://paddle.com/privacy" target="_blank" rel="noopener" className="text-primary hover:text-primary-light underline ml-1">
                      (Privacy Policy)
                    </Link>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Your chosen AI providers</strong> - When you use hive-tools, it connects directly to your AI providers of choice using your API keys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Legal authorities</strong> - Only when required by law</span>
                </li>
              </ul>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">Your Rights & Control</h2>
              </div>
              
              <p className="text-gray-300 mb-4">You have complete control over your data:</p>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Access</strong> - Request what information we have about you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Correction</strong> - Update any inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Deletion</strong> - Request deletion of your account and data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Portability</strong> - Request your account data (email, license key, and subscription details)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Cookie Control</strong> - Manage preferences anytime via our 
                    <Link href="/cookie-preferences" className="text-primary hover:text-primary-light underline ml-1">
                      Cookie Preferences
                    </Link> page
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-dark-600 p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Questions or Concerns?</h2>
              <p className="text-gray-300 mb-6">
                We&apos;re committed to transparency. If you have any questions about our privacy practices or want to exercise your rights, please contact us.
              </p>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <a href="mailto:privacy@hivetechs.io" className="text-primary hover:text-primary-light ml-2">
                    privacy@hivetechs.io
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Address:</span>
                  <span className="text-gray-300 ml-2">
                    HiveTechs Collective LLC, 7901 4th St N STE 300, St. Petersburg, FL 33702
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-600">
                <Link 
                  href="/contact" 
                  className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                >
                  Contact Support
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Updates Notice */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                This policy may be updated occasionally. We&apos;ll notify you of any significant changes via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}