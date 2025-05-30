'use client'

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Package, ArrowRight } from 'lucide-react'

export default function CreditsSuccessPage() {
  return (
    <PageLayout>
      {/* Success Hero */}
      <section className="min-h-[80vh] flex items-center justify-center py-20 bg-gradient-to-br from-dark-800 via-dark to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Credits purchased successfully! 🎉
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your credits have been added to your account and are ready to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Credits Info */}
              <div className="bg-dark-700 rounded-2xl p-8 border border-primary/20 inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-white">Credits added to your account</h2>
                    <p className="text-gray-300">Your credits never expire and can be used anytime</p>
                  </div>
                </div>
                
                <div className="text-left space-y-2">
                  <p className="text-gray-300">
                    • Credits are automatically applied when you exceed your plan limits
                  </p>
                  <p className="text-gray-300">
                    • Each credit equals one conversation
                  </p>
                  <p className="text-gray-300">
                    • Check your balance anytime in your account settings
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/documentation/quick-start">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue">
                    Continue using hive-tools
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing#credit-packs">
                  <Button size="lg" variant="secondary" className="bg-dark-700 hover:bg-dark-600 text-white border border-primary/20">
                    Purchase more credits
                  </Button>
                </Link>
              </div>

              {/* Additional Info */}
              <p className="text-gray-400 text-sm mt-8">
                Need help? Contact us at <a href="mailto:support@hivetechs.io" className="text-primary hover:text-primary-light">support@hivetechs.io</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}