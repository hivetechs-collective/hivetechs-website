'use client'

import PageLayout from '@/components/PageLayout'
import { motion } from 'framer-motion'
import { FileText, CreditCard, Shield, AlertTriangle, RefreshCw, Scale, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-16">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={300} 
            height={300} 
            className="opacity-10 transform translate-x-1/3"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                Clear, fair terms for using hive-tools. No hidden surprises.
              </p>
              <p className="text-gray-400">Last updated: May 27, 2025</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                By using hive-tools (including CLI and MCP tools) or any services provided by HiveTechs Collective LLC ("we," "us," or "our"), 
                you agree to these terms. If you don&apos;t agree, please don&apos;t use our tools.
              </p>
            </motion.div>

            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">2. What is hive-tools?</h2>
              </div>
              <p className="text-gray-300 mb-4">
                hive-tools is a developer tool suite that enhances your workflow through:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">CLI Tool</strong> - Command-line interface for direct access to consensus pipeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">MCP Tool</strong> - Model Context Protocol integration for AI assistants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Multi-model consensus</strong> - Combines multiple AI providers for accurate, hallucination-free results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Your API keys</strong> - Connects to AI providers using your own credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Privacy first</strong> - All processing happens locally, your code stays private</span>
                </li>
              </ul>
            </motion.div>

            {/* Subscription & Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">3. Subscription & Payment</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Billing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Subscriptions billed monthly or annually in advance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>7-day unlimited free trial for new users</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Payments processed securely through Paddle</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Credit Packs</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Never expire once purchased</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Non-transferable between accounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Generally non-refundable (see <Link href="/refund" className="text-primary hover:text-primary-light underline">Refund Policy</Link>)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Account Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">4. Account Usage</h2>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Security</strong> - You&apos;re responsible for keeping your license key secure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Individual use</strong> - One license per developer (no sharing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">Team licenses</strong> - Allow sharing within specified team size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong className="text-white">API keys</strong> - You provide and manage your own AI provider credentials</span>
                </li>
              </ul>
            </motion.div>

            {/* Acceptable Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-semibold text-white">5. Acceptable Use</h2>
              </div>
              
              <p className="text-gray-300 mb-4">Please don&apos;t use hive-tools to:</p>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Generate malicious code or security exploits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Violate any laws or regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Attempt to reverse engineer our consensus algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Resell or redistribute the service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✗</span>
                  <span>Circumvent license restrictions</span>
                </li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-white">6. Intellectual Property</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Your Code</h3>
                  <p className="text-gray-300">
                    All code generated using hive-tools belongs to you. We don&apos;t claim any rights to your output.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Our Software</h3>
                  <p className="text-gray-300">
                    The hive-tools CLI, consensus algorithms, and related technology remain our intellectual property.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Privacy First</h3>
                  <p className="text-gray-300">
                    We don&apos;t collect or analyze your code. Your development work stays private on your machine.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-white">7. Cancellation & Termination</h2>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cancel your subscription anytime - no questions asked</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Access continues until the end of your billing period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>We may suspend accounts that violate these terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>15-day money-back guarantee for new users</span>
                </li>
              </ul>
            </motion.div>

            {/* Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <div className="bg-dark-600/50 rounded-lg p-4 border border-dark-500">
                <p className="text-gray-300 text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HIVETECHS COLLECTIVE LLC SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR 
                  REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR 
                  OTHER INTANGIBLE LOSSES.
                </p>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">9. Legal Stuff</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Governing Law</h3>
                  <p className="text-gray-300">
                    These terms are governed by the laws of the State of Florida, United States.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Changes to Terms</h3>
                  <p className="text-gray-300">
                    We may update these terms occasionally. We&apos;ll notify you of significant changes via email.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-dark-600 p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Questions?</h2>
              <p className="text-gray-300 mb-6">
                We&apos;re here to help. If you have questions about these terms or need clarification, please reach out.
              </p>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <a href="mailto:legal@hivetechs.io" className="text-primary hover:text-primary-light ml-2">
                    legal@hivetechs.io
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Support:</span>
                  <a href="mailto:support@hivetechs.io" className="text-primary hover:text-primary-light ml-2">
                    support@hivetechs.io
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Address:</span>
                  <span className="text-gray-300 ml-2">
                    HiveTechs Collective LLC, 7901 4th St N STE 300, St. Petersburg, FL 33702
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-600 flex gap-4">
                <Link 
                  href="/privacy" 
                  className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                >
                  Privacy Policy
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/refund" 
                  className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
                >
                  Refund Policy
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}