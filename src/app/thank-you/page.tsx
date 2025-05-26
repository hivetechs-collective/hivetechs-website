'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [purchaseInfo, setPurchaseInfo] = useState<any>(null)

  useEffect(() => {
    // Gumroad appends purchase info to redirect URL
    const sale_id = searchParams.get('sale_id')
    const sale_timestamp = searchParams.get('sale_timestamp')
    const purchaser_id = searchParams.get('purchaser_id')
    const product_id = searchParams.get('product_id')
    const product_permalink = searchParams.get('product_permalink')
    const email = searchParams.get('email')
    const license_key = searchParams.get('license_key')
    
    if (sale_id) {
      setPurchaseInfo({
        sale_id,
        sale_timestamp,
        purchaser_id,
        product_id,
        product_permalink,
        email,
        license_key
      })
    }
  }, [searchParams])

  const getProductName = (productId: string) => {
    const products: { [key: string]: string } = {
      'basic': 'hive-tools Basic',
      'pro': 'hive-tools Pro', 
      'enterprise': 'hive-tools Enterprise',
      'credits': 'hive-tools Credits'
    }
    return products[productId] || 'hive-tools'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to hive-tools! 🐝
          </h1>
          <p className="text-lg text-gray-600">
            Your purchase was successful. Let's get you set up!
          </p>
        </div>

        {purchaseInfo && (
          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Purchase Details</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Product:</strong> {getProductName(purchaseInfo.product_id)}
            </p>
            {purchaseInfo.email && (
              <p className="text-sm text-gray-600 mb-1">
                <strong>Email:</strong> {purchaseInfo.email}
              </p>
            )}
            <p className="text-sm text-gray-600 mb-1">
              <strong>Order ID:</strong> {purchaseInfo.sale_id}
            </p>
            {purchaseInfo.license_key && (
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm font-semibold text-blue-900 mb-1">Your License Key:</p>
                <p className="text-sm font-mono text-blue-800 break-all">{purchaseInfo.license_key}</p>
                <p className="text-xs text-blue-600 mt-1">Save this key - you'll need it for installation!</p>
              </div>
            )}
          </div>
        )}

        <div className="space-y-6">
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Next Steps:</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Install hive-tools</h3>
                  <p className="text-gray-600 text-sm">Get the CLI tool installed on your system</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Configure Your License</h3>
                  <p className="text-gray-600 text-sm">Enter your license key to activate your subscription</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Setup IDE Integration</h3>
                  <p className="text-gray-600 text-sm">Connect hive-tools to your favorite code editor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link 
              href="/install"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Installation Guide
            </Link>
            <Link 
              href="/support"
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Support
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Email us at{" "}
              <a href="mailto:support@hivetechs.com" className="text-blue-600 hover:underline">
                support@hivetechs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}