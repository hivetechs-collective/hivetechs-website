'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Check, AlertCircle, Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function PaddleSetupPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  const handleSetup = async () => {
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/paddle/setup', {
        method: 'POST',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Setup failed')
      }

      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Setup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-dark py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Logo watermark */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={400} 
            height={400} 
            className="transform -translate-x-1/3"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Paddle Setup
              </h1>
              <p className="text-xl text-gray-300">
                Create all products and pricing in Paddle with one click
              </p>
            </div>

            <div className="bg-dark-700 rounded-2xl border border-dark-600 p-8 shadow-xl">
              {!result && !error && (
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Ready to Set Up Products?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    This will create all subscription tiers and credit packs in your Paddle account.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                    <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-600">
                      <h3 className="font-semibold text-white mb-2">Subscriptions</h3>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          Basic - $5/month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          Standard - $10/month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          Premium - $20/month
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          Team - $50/month
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-600">
                      <h3 className="font-semibold text-white mb-2">Credit Packs</h3>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          25 Credits - $3
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          75 Credits - $7
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          200 Credits - $15
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    onClick={handleSetup}
                    disabled={loading}
                    className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating Products...
                      </>
                    ) : (
                      'Create Products in Paddle'
                    )}
                  </Button>
                </div>
              )}

              {error && (
                <div className="text-center">
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-semibold">Setup Failed</span>
                    </div>
                    <p className="text-sm text-red-300">{error}</p>
                  </div>
                  <Button onClick={() => setError('')} variant="secondary">
                    Try Again
                  </Button>
                </div>
              )}

              {result && (
                <div>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      Products Created Successfully!
                    </h2>
                    <p className="text-gray-300">
                      Add these IDs to your .env.local file
                    </p>
                  </div>

                  <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-600 mb-6">
                    <h3 className="font-semibold text-white mb-4">Environment Variables</h3>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Product IDs
${result.products?.map((p: any) => `PADDLE_PRODUCT_${p.name.replace(/[^A-Z0-9]/gi, '_').toUpperCase()}=${p.id}`).join('\n')}

# Price IDs
${result.prices?.map((p: any) => `PADDLE_PRICE_${p.productName.replace(/[^A-Z0-9]/gi, '_').toUpperCase()}=${p.priceId}`).join('\n')}`}
                    </pre>
                  </div>

                  <div className="text-center">
                    <Button onClick={() => window.location.reload()} variant="secondary">
                      Run Another Setup
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}