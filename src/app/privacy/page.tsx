import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 mt-2">Last updated: May 25, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-lg max-w-none">
          
          <h2>1. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>• Email address for account creation and communication<br/>
          • Billing information processed securely through our payment processors<br/>
          • License keys and subscription status</p>

          <h3>Usage Data</h3>
          <p>• Code completion requests and responses (anonymized)<br/>
          • Feature usage patterns and frequency<br/>
          • Error logs and performance metrics<br/>
          • IDE integration data</p>

          <h3>Technical Information</h3>
          <p>• IP address and device information<br/>
          • Browser type and version<br/>
          • Operating system and IDE version</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:<br/>
          • Provide and maintain our service<br/>
          • Process payments and manage subscriptions<br/>
          • Improve our AI models and platform<br/>
          • Send important service communications<br/>
          • Provide customer support<br/>
          • Analyze usage patterns to enhance features</p>

          <h2>3. Code and Content Privacy</h2>
          <p>• Your code submissions are processed securely and not stored permanently<br/>
          • We use anonymized, aggregated data to improve AI model performance<br/>
          • Individual code snippets are not used for training without explicit consent<br/>
          • All code processing happens through encrypted connections</p>

          <h2>4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with:<br/>
          • Payment processors (Paddle, Stripe) for billing<br/>
          • AI service providers (OpenAI, Anthropic) for code processing<br/>
          • Service providers who assist with operations<br/>
          • Legal authorities when required by law</p>

          <h2>5. Data Retention</h2>
          <p>• Account information: Retained while account is active plus 2 years<br/>
          • Usage data: Aggregated data retained indefinitely, individual data 1 year<br/>
          • Code submissions: Not permanently stored, processed in real-time<br/>
          • Payment information: Handled by payment processors per their policies</p>

          <h2>6. Data Security</h2>
          <p>We implement appropriate security measures including:<br/>
          • Encryption in transit and at rest<br/>
          • Access controls and authentication<br/>
          • Regular security audits<br/>
          • Secure coding practices</p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:<br/>
          • Access your personal information<br/>
          • Correct inaccurate data<br/>
          • Delete your account and associated data<br/>
          • Export your data<br/>
          • Opt out of non-essential communications</p>

          <h2>8. Cookies and Tracking</h2>
          <p>We use minimal cookies for:<br/>
          • Authentication and session management<br/>
          • Basic analytics to improve our service<br/>
          • Preference storage</p>

          <h2>9. Third-Party Services</h2>
          <p>Our service integrates with third-party AI providers. Please review their privacy policies:<br/>
          • OpenAI Privacy Policy<br/>
          • Anthropic Privacy Policy<br/>
          • Other AI service provider policies</p>

          <h2>10. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>

          <h2>11. Children's Privacy</h2>
          <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

          <h2>12. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any material changes via email or service notifications.</p>

          <h2>13. Contact Us</h2>
          <p>For questions about this Privacy Policy, please contact us at:<br/>
          Email: privacy@hivetechs.com<br/>
          Address: HiveTechs Collective LLC, Florida, United States</p>

        </div>
      </div>
    </div>
  )
}