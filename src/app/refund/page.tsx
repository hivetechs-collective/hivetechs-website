import Link from 'next/link'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
          </div>
          <p className="text-gray-600 mt-2">Last updated: May 25, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-lg max-w-none">
          
          <h2>1. 15-Day Money-Back Guarantee</h2>
          <p>We offer a 15-day money-back guarantee for all new subscription purchases. If you're not satisfied with Hive.AI within 15 days of your initial purchase, we'll provide a full refund.</p>

          <h2>2. Subscription Refunds</h2>
          
          <h3>Monthly Subscriptions</h3>
          <p>• Full refund within 15 days of first purchase<br/>
          • No refunds for subsequent monthly renewals<br/>
          • Cancellations take effect at the end of the current billing cycle</p>

          <h3>Annual Subscriptions</h3>
          <p>• Full refund within 15 days of purchase<br/>
          • Pro-rated refund within 30 days of purchase<br/>
          • No refunds after 30 days from purchase date</p>

          <h2>3. Credit Pack Refunds</h2>
          <p>Credit packs are generally non-refundable once purchased. However, we may provide refunds in the following circumstances:<br/>
          • Technical issues preventing credit usage within 7 days of purchase<br/>
          • Accidental duplicate purchases<br/>
          • Service outages affecting credit availability</p>

          <h2>4. Team Plan Refunds</h2>
          <p>• Same terms as individual subscriptions apply<br/>
          • Refunds apply to the entire team license<br/>
          • Pro-rated refunds for removed team members (annual plans only)</p>

          <h2>5. Free Trial Conversions</h2>
          <p>• Free trials that convert to paid subscriptions are eligible for refunds<br/>
          • The 15-day refund period starts from the paid subscription start date<br/>
          • Usage during free trial does not affect refund eligibility</p>

          <h2>6. Refund Process</h2>
          <p>To request a refund:<br/>
          1. Contact support@hivetechs.com with your account details<br/>
          2. Include your order/transaction ID<br/>
          3. Briefly explain the reason for the refund request<br/>
          4. We'll respond within 2 business days<br/>
          5. Approved refunds are processed within 5-10 business days</p>

          <h2>7. Refund Method</h2>
          <p>• Refunds are issued to the original payment method<br/>
          • Credit card refunds may take 3-10 business days to appear<br/>
          • PayPal refunds typically appear within 3-5 business days<br/>
          • Bank transfer refunds may take 5-10 business days</p>

          <h2>8. Non-Refundable Situations</h2>
          <p>Refunds may not be provided in the following cases:<br/>
          • Violation of our Terms of Service<br/>
          • Excessive or fraudulent usage<br/>
          • Chargebacks or payment disputes<br/>
          • Accounts suspended for policy violations</p>

          <h2>9. Service Credits</h2>
          <p>In some cases, we may offer service credits instead of refunds:<br/>
          • Extended service outages<br/>
          • Performance issues<br/>
          • Feature disruptions<br/>
          Service credits must be used within 12 months of issuance.</p>

          <h2>10. Dispute Resolution</h2>
          <p>If you're not satisfied with our refund decision:<br/>
          • Email escalation@hivetechs.com<br/>
          • Include all previous correspondence<br/>
          • A senior team member will review within 3 business days<br/>
          • Final decisions will be communicated in writing</p>

          <h2>11. Cancellation vs. Refund</h2>
          <p>• Cancellation: Stops future billing, service continues until period ends<br/>
          • Refund: Returns money for current period and typically ends service immediately<br/>
          • You can cancel anytime from your account dashboard</p>

          <h2>12. Contact Information</h2>
          <p>For refund requests or questions about this policy:<br/>
          Email: support@hivetechs.com<br/>
          Subject: "Refund Request - [Your Account Email]"<br/>
          Response time: Within 2 business days</p>

          <h2>13. Policy Updates</h2>
          <p>This refund policy may be updated from time to time. Material changes will be communicated via email and will not affect existing subscriptions unfavorably.</p>

        </div>
      </div>
    </div>
  )
}