'use client'

import { useState, useEffect } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Cookie, Shield, ChevronRight } from 'lucide-react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import Link from 'next/link'

export default function CookiePreferences() {
  const { consentStatus, updateConsent, isLoading } = useCookieConsent()
  const [consentDate, setConsentDate] = useState<string | null>(null)

  useEffect(() => {
    const date = localStorage.getItem('cookie-consent-date')
    if (date) {
      setConsentDate(new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
  }, [consentStatus])

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-white">Cookie Preferences</h1>
              </div>
              <p className="text-xl text-gray-300">
                Manage how we use cookies to enhance your experience on our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Current Status</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cookie Consent</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    consentStatus === 'accepted' 
                      ? 'bg-primary/20 text-primary' 
                      : consentStatus === 'rejected'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {consentStatus === 'accepted' ? 'Accepted' : consentStatus === 'rejected' ? 'Rejected' : 'Not Set'}
                  </span>
                </div>
                
                {consentDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Consent Date</span>
                    <span className="text-gray-400 text-sm">{consentDate}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Cookie Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">How We Use Cookies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cookie consent preferences (stored locally)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Session management for authenticated users</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent-blue" />
                    Third-Party Cookies
                  </h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are set by our trusted partners to provide essential services.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span><strong>Paddle:</strong> Payment processing and subscription management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Required for checkout and billing functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Update Preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Update Your Preferences</h2>
              <p className="text-gray-300 mb-6">
                You can change your cookie preferences at any time. Note that rejecting cookies may limit your ability to use certain features, particularly checkout and payment functionality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => updateConsent('rejected')}
                  className="bg-dark-600 border-dark-500 text-white hover:bg-dark-500"
                  disabled={consentStatus === 'rejected'}
                >
                  {consentStatus === 'rejected' ? 'Currently Rejected' : 'Reject Cookies'}
                </Button>
                
                <Button
                  onClick={() => updateConsent('accepted')}
                  className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue"
                  disabled={consentStatus === 'accepted'}
                >
                  {consentStatus === 'accepted' ? 'Currently Accepted' : 'Accept Cookies'}
                </Button>
              </div>
            </motion.div>

            {/* Links */}
            <div className="mt-8 text-center">
              <Link 
                href="/privacy" 
                className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
              >
                View our Privacy Policy
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}