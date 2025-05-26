'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LicensePage() {
  const [orderId, setOrderId] = useState('')
  const [licenseKey, setLicenseKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const retrieveLicenseKey = async () => {
    if (!orderId.trim()) {
      setError('Please enter your order ID')
      return
    }

    setLoading(true)
    setError('')
    setLicenseKey('')

    try {
      // Call our webhook to get license key for this order
      const response = await fetch('https://gumroad-webhook.verone-lazio.workers.dev/license', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order_id: orderId.trim() })
      })

      if (response.ok) {
        const data = await response.json()
        if (data.license_key) {
          setLicenseKey(data.license_key)
        } else {
          setError('Order ID not found. Please check your Gumroad receipt email.')
        }
      } else {
        setError('Unable to retrieve license key. Please contact support.')
      }
    } catch (err) {
      setError('Network error. Please try again or contact support.')
    }

    setLoading(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseKey)
    alert('License key copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Get Your License Key</h1>
          </div>
          <p className="text-gray-600 mt-2">Enter your Gumroad order ID to retrieve your hive-tools license key</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">Where to Find Your Order ID</h2>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• <strong>In your email:</strong> Check your Gumroad receipt email for "Order ID" or "Sale ID"</li>
            <li>• <strong>On the purchase page:</strong> Look for a long ID starting with letters and numbers</li>
            <li>• <strong>Example format:</strong> LMtOwB-o-ENXQ6XHWKLvsw==</li>
          </ul>
        </div>

        {/* License Key Retrieval */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Retrieve License Key</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Gumroad Order ID
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID from Gumroad receipt"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={retrieveLicenseKey}
              disabled={loading}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? 'Retrieving...' : 'Get License Key'}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {licenseKey && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <h3 className="font-semibold text-green-900 mb-2">Your License Key:</h3>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white px-3 py-2 rounded border font-mono text-lg text-green-800">
                    {licenseKey}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-green-700 text-sm mt-2">Save this key - you'll need it for installation!</p>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        {licenseKey && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Install hive-tools</h3>
                  <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">npm install -g @hivetechs/hive-ai</code>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Configure Your License</h3>
                  <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">hive-ai configure</code>
                  <p className="text-sm text-gray-600 mt-1">Enter the license key you copied above</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Setup IDE Integration</h3>
                  <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">hive-ai configure-ide</code>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link 
                href="/install"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Full Installation Guide
              </Link>
              <Link 
                href="/support"
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Get Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}