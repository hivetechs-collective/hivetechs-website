'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface CookieConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export default function CookieConsentModal({ isOpen, onClose, onAccept }: CookieConsentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50"
          >
            <div className="relative overflow-hidden rounded-2xl border border-dark-600 bg-dark-800/95 backdrop-blur-xl shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 via-transparent to-accent-blue/10" />
              
              {/* Floating orb */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Cookies Required for Checkout</h2>
                </div>
                
                {/* Warning message */}
                <div className="flex items-start gap-3 mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-200">
                    <p className="font-semibold mb-1">Payment processing requires cookies</p>
                    <p className="text-amber-200/80">
                      Our payment partner Paddle needs to set cookies for secure checkout, 
                      fraud prevention, and subscription management.
                    </p>
                  </div>
                </div>
                
                {/* Options */}
                <div className="space-y-4 mb-6">
                  <div className="text-sm text-gray-300">
                    <p className="mb-3">By accepting cookies, you allow:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Secure payment processing through Paddle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Subscription management and billing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Fraud prevention and security measures</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={onAccept}
                    className="w-full bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue shadow-lg shadow-primary/25"
                  >
                    Accept Cookies & Continue to Checkout
                  </Button>
                  
                  <div className="text-center">
                    <Link 
                      href="/cookie-preferences" 
                      className="text-sm text-primary/80 hover:text-primary underline decoration-dotted underline-offset-2"
                    >
                      Learn more about our cookie policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}