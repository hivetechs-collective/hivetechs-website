import Link from 'next/link'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-dark-800">
      {/* Header */}
      <div className="bg-dark-700 border-b border-dark-600">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-white">Support Center</h1>
          </div>
          <p className="text-gray-300 mt-2">Get help with hive-tools installation and usage</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Email Support</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Send us a detailed message about your issue and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@hivetechs.com"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>support@hivetechs.com</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Installation Guide</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Step-by-step instructions for installing and configuring hive-tools on your system.
            </p>
            <Link
              href="/install"
              className="inline-flex items-center space-x-2 border border-gray-300 text-gray-300 px-4 py-2 rounded-lg hover:bg-dark-800 transition-colors"
            >
              <span>View Installation Guide</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-dark-700 rounded-lg shadow-sm border border-dark-600 p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">I see deprecation warnings during installation. Is this normal?</h3>
              <p className="text-gray-300 text-sm">
                Yes, these warnings are completely normal and don't affect functionality. They come from database build dependencies and cannot be eliminated.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Where do I find my license key?</h3>
              <p className="text-gray-300 text-sm">
                Your license key is included in your Gumroad purchase receipt email. Look for a long string starting with "hive_".
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Which IDEs are supported?</h3>
              <p className="text-gray-300 text-sm">
                hive-tools works with any IDE that supports Model Context Protocol (MCP), including VS Code, Cursor, Claude Dev, and others.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">How do I update to the latest version?</h3>
              <p className="text-gray-300 text-sm">
                Run <code className="bg-dark-800 px-2 py-1 rounded text-sm">npm update -g @hivetechs/hive-ai</code> to get the latest version.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Can I use hive-tools on multiple devices?</h3>
              <p className="text-gray-300 text-sm">
                Yes, your license allows installation on multiple devices that you own. Each device will need to be configured with your license key.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}