'use client'

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, ArrowRight } from 'lucide-react'

export default function WelcomePage() {
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
                Welcome to hive-tools! 🎉
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your subscription is active and you're ready to experience the power of consensus AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Quick Start CTA */}
              <div className="bg-dark-700 rounded-2xl p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Let's get you started in under 5 minutes
                </h2>
                <p className="text-gray-300 mb-6">
                  Follow our Quick Start guide to install hive-tools and run your first consensus query.
                </p>
                <Link href="/documentation/quick-start">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue">
                    <Zap className="w-5 h-5 mr-2" />
                    Go to Quick Start Guide
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Additional Resources */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Link href="/documentation" className="bg-dark-800 rounded-lg p-6 border border-dark-600 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-white mb-2">Documentation</h3>
                  <p className="text-sm text-gray-400">Explore all features and capabilities</p>
                </Link>
                <Link href="/documentation/consensus-pipeline" className="bg-dark-800 rounded-lg p-6 border border-dark-600 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-white mb-2">How It Works</h3>
                  <p className="text-sm text-gray-400">Learn about consensus AI</p>
                </Link>
                <a href="mailto:support@hivetechs.io" className="bg-dark-800 rounded-lg p-6 border border-dark-600 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-white mb-2">Get Support</h3>
                  <p className="text-sm text-gray-400">We're here to help</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}