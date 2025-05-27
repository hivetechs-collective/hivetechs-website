'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay to avoid layout shift on page load
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setHasInteracted(true)
    setTimeout(() => setShowBanner(false), 300)
    
    // Trigger event for other components to load scripts
    window.dispatchEvent(new CustomEvent('cookieConsentAccepted'))
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setHasInteracted(true)
    setTimeout(() => setShowBanner(false), 300)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          {/* Glass morphism background */}
          <div className="relative overflow-hidden rounded-2xl border border-dark-600 bg-dark-800/90 backdrop-blur-xl shadow-2xl">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-accent-blue/5" />
            
            {/* Floating orb effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>
                </div>
                <button
                  onClick={handleReject}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                We use cookies to enhance your experience and enable payment processing through our partner Paddle. 
                <Link href="/privacy" className="text-primary/80 hover:text-primary underline decoration-dotted underline-offset-2 ml-1">
                  Learn more
                </Link>
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="flex-1 bg-dark-700 border-dark-600 text-white hover:bg-dark-600 text-sm"
                  onClick={handleReject}
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue text-sm shadow-lg shadow-primary/25"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}