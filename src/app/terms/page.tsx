import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600 mt-2">Last updated: May 25, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-lg max-w-none">
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Hive.AI services provided by HiveTechs Collective LLC ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>2. Description of Service</h2>
          <p>Hive.AI is a software-as-a-service (SaaS) platform that provides AI-powered development tools through a multi-model consensus pipeline. Our service integrates with popular IDEs to assist with code generation, review, and debugging.</p>

          <h2>3. Subscription and Payment</h2>
          <p>• Subscription fees are billed in advance on a monthly or annual basis<br/>
          • All fees are non-refundable except as expressly stated in our Refund Policy<br/>
          • We reserve the right to change our pricing with 30 days notice<br/>
          • Credit packs do not expire but are non-transferable</p>

          <h2>4. User Accounts</h2>
          <p>• You are responsible for maintaining the security of your account<br/>
          • You may not share your license key with others<br/>
          • One license per individual developer unless otherwise specified<br/>
          • Team licenses allow sharing within the specified team size</p>

          <h2>5. Acceptable Use</h2>
          <p>You may not use our service to:<br/>
          • Generate malicious code or security exploits<br/>
          • Violate any applicable laws or regulations<br/>
          • Attempt to reverse engineer our AI models<br/>
          • Resell or redistribute our service without permission</p>

          <h2>6. Intellectual Property</h2>
          <p>• Code generated using Hive.AI belongs to you<br/>
          • Our AI models and platform remain our intellectual property<br/>
          • You grant us permission to use aggregated, anonymized usage data to improve our service</p>

          <h2>7. Privacy and Data</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>

          <h2>8. Limitation of Liability</h2>
          <p>IN NO EVENT SHALL HIVETECHS COLLECTIVE LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>

          <h2>9. Termination</h2>
          <p>• Either party may terminate this agreement at any time<br/>
          • Upon termination, your access to the service will cease<br/>
          • We may suspend or terminate accounts for violation of these terms</p>

          <h2>10. Refund Policy</h2>
          <p>• 15-day money-back guarantee for new subscriptions<br/>
          • Pro-rated refunds for annual subscriptions canceled within 30 days<br/>
          • Credit packs are non-refundable once purchased<br/>
          • Refunds processed within 5-10 business days</p>

          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or service notifications.</p>

          <h2>12. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the State of Florida, United States.</p>

          <h2>13. Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us at:<br/>
          Email: legal@hivetechs.com<br/>
          Address: HiveTechs Collective LLC, Florida, United States</p>

        </div>
      </div>
    </div>
  )
}