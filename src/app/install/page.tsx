'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function InstallPage() {
  const [activeTab, setActiveTab] = useState('windows')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const installCommands = {
    windows: 'npm install -g @hivetechs/hive-ai',
    mac: 'npm install -g @hivetechs/hive-ai',
    linux: 'npm install -g @hivetechs/hive-ai'
  }

  return (
    <div className="min-h-screen bg-dark-800 relative">
      {/* Background Logo - top left, rotated */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <Image 
          src="/Hive-Logo.jpg" 
          alt="" 
          width={200} 
          height={200} 
          className="opacity-5 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
        />
      </div>
      {/* Header */}
      <div className="bg-dark-700 border-b border-dark-600">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-white">Installation Guide</h1>
          </div>
          <p className="text-gray-300 mt-2">Get hive-tools set up on your system in just a few steps</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Prerequisites */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Prerequisites</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>Node.js 18+</strong> - 
                  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    Download from nodejs.org
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>A supported IDE</strong> - VS Code, Cursor, Claude Dev, or others with MCP support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Step 1: Install hive-tools</h2>
          
          {/* OS Tabs */}
          <div className="flex space-x-4 mb-4">
            {[
              { id: 'windows', name: 'Windows', icon: '🪟' },
              { id: 'mac', name: 'macOS', icon: '🍎' },
              { id: 'linux', name: 'Linux', icon: '🐧' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-dark-800 border-dark-600 text-gray-300 hover:bg-dark-800'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Command Box */}
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Terminal/Command Prompt</span>
              <button
                onClick={() => copyToClipboard(installCommands[activeTab as keyof typeof installCommands])}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
            <code className="text-green-400 font-mono text-lg">
              {installCommands[activeTab as keyof typeof installCommands]}
            </code>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">⚠️</span>
              <div>
                <p className="text-yellow-800 font-medium">Note about installation warnings</p>
                <p className="text-yellow-700 text-sm">
                  You may see deprecation warnings during installation. These are from database dependencies and don't affect functionality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Step 2: Configure Your License</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Run this command</span>
                <button
                  onClick={() => copyToClipboard('hive-ai configure')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
              </div>
              <code className="text-green-400 font-mono text-lg">hive-ai configure</code>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">💡</span>
                <div>
                  <p className="text-blue-800 font-medium">License Key Location</p>
                  <p className="text-blue-700 text-sm">
                    Your license key should be in your Gumroad receipt email. Look for a long string starting with "hive_".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IDE Setup */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Step 3: Setup IDE Integration</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Auto-configure your IDE</span>
                <button
                  onClick={() => copyToClipboard('hive-ai configure-ide')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
              </div>
              <code className="text-green-400 font-mono text-lg">hive-ai configure-ide</code>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-dark-600 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Supported IDEs</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• VS Code</li>
                  <li>• Cursor</li>
                  <li>• Claude Dev</li>
                  <li>• Any MCP-compatible editor</li>
                </ul>
              </div>
              
              <div className="border border-dark-600 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Features Enabled</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Multi-model AI consensus</li>
                  <li>• Code generation & review</li>
                  <li>• Intelligent suggestions</li>
                  <li>• Usage tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Test Installation */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Step 4: Test Your Installation</h2>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Verify everything works</span>
              <button
                onClick={() => copyToClipboard('hive-ai --help')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
            <code className="text-green-400 font-mono text-lg">hive-ai --help</code>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✅</span>
              <div>
                <p className="text-green-800 font-medium">Success!</p>
                <p className="text-green-700 text-sm">
                  If you see the help menu, hive-tools is installed and ready to use in your IDE.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Start Coding</h3>
              <p className="text-gray-300 text-sm mb-3">
                Open your IDE and start using hive-tools's multi-model consensus for enhanced code generation and review.
              </p>
              <Link href="/features" className="text-blue-600 hover:underline text-sm font-medium">
                Explore Features →
              </Link>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-3">
                Having trouble with installation? Our support team is here to help.
              </p>
              <Link href="/support" className="text-blue-600 hover:underline text-sm font-medium">
                Get Support →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}