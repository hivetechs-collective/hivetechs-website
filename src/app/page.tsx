'use client'

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Check, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  const handleSubscribe = (plan: string) => {
    const productMap: Record<string, string> = {
      'basic': 'basic-plan',
      'standard': 'standard-plan',
      'premium': 'premium-plan',
      'team': 'team-plan',
    }
    
    const productId = productMap[plan]
    if (productId) {
      const checkoutUrl = `https://store.hivetechs.io/l/${productId}?wanted=true`
      window.open(checkoutUrl, '_blank')
    }
  }

  return (
    <PageLayout>
      {/* Hero Section - Dark Paddle Style */}
      <section className="relative overflow-hidden bg-dark min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative">
          <div className="container-custom py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                  Multi-Model Consensus AI
                </p>
                
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Get AI answers you can
                  <span className="text-primary block bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">actually trust</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  hive-tools verifies every response through multiple AI models, 
                  delivering more reliable and consistent code suggestions than single-model tools.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button size="lg" onClick={() => handleSubscribe('basic')} className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25">
                    Start free trial
                  </Button>
                  <Button variant="secondary" size="lg" className="bg-dark-700 border-dark-600 text-white hover:bg-dark-600">
                    Watch demo
                  </Button>
                </div>
                
                <p className="text-sm text-gray-400">
                  No credit card required • 7-day free trial • Cancel anytime
                </p>
              </motion.div>
              
              {/* Right Visual */}
              <motion.div 
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-8 border border-dark-600 backdrop-blur-sm">
                  <div className="bg-dark-800/50 rounded-lg border border-dark-600 p-6 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm text-gray-300">4 AI models analyzing...</span>
                      </div>
                      <div className="pl-5 space-y-2">
                        <div className="h-2 bg-dark-600 rounded w-3/4 animate-pulse relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"></div>
                        </div>
                        <div className="h-2 bg-dark-600 rounded w-5/6 animate-pulse delay-75 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent animate-pulse delay-75"></div>
                        </div>
                        <div className="h-2 bg-dark-600 rounded w-2/3 animate-pulse delay-100 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-green/30 to-transparent animate-pulse delay-100"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 pt-4">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-white">Consensus achieved: 98% confidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section - Paddle Style */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for developers who demand accuracy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our consensus pipeline combines the best of multiple AI models to deliver 
              responses you can trust for production code.
            </p>
          </div>

          <div className="feature-grid">
            {/* Feature 1 */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                4-Stage Verification
              </h3>
              
              <p className="text-gray-300 mb-6">
                Every response passes through Generator, Refiner, Validator, 
                and Curator models for maximum accuracy.
              </p>
              
              <a href="/features" className="text-primary font-medium inline-flex items-center group">
                Learn more 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                Production-Ready Code
              </h3>
              
              <p className="text-gray-300 mb-6">
                Get code that follows best practices, includes error handling, 
                and is optimized for performance.
              </p>
              
              <a href="/features" className="text-primary font-medium inline-flex items-center group">
                Learn more 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                Team Collaboration
              </h3>
              
              <p className="text-gray-300 mb-6">
                Share AI conversations, maintain consistent code standards, 
                and collaborate seamlessly across your team.
              </p>
              
              <a href="/features" className="text-primary font-medium inline-flex items-center group">
                Learn more 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Pricing Preview - Paddle Style */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a 7-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 hover:border-primary smooth-transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$5</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-gray-300 mb-6">Perfect for individual developers</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">1,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Multi-model consensus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">VS Code & Cursor integration</span>
                </li>
              </ul>
              
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => handleSubscribe('basic')}
              >
                Start free trial
              </Button>
            </motion.div>

            {/* Premium Plan - Most Popular */}
            <motion.div 
              className="relative bg-dark-700 rounded-2xl border-2 border-primary p-8 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-dark px-4 py-1 rounded-full text-sm font-semibold">
                Most popular
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$20</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-gray-300 mb-6">For professional developers</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">4,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Priority processing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Advanced model combinations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Email support</span>
                </li>
              </ul>
              
              <Button 
                className="w-full"
                onClick={() => handleSubscribe('premium')}
              >
                Start free trial
              </Button>
            </motion.div>

            {/* Team Plan */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 hover:border-primary smooth-transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$50</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-gray-300 mb-6">For development teams</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">12,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">5 team members</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-300">Priority support</span>
                </li>
              </ul>
              
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => handleSubscribe('team')}
              >
                Start free trial
              </Button>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/pricing" 
              className="text-primary font-medium inline-flex items-center hover:gap-3 transition-all"
            >
              View all pricing options 
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark py-24">
        {/* Animated Background - matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to ship better code?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start using hive-tools to write more reliable, 
                production-ready code with AI consensus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                  onClick={() => handleSubscribe('basic')}
                >
                  Start your free trial
                </Button>
                <Button 
                  size="lg" 
                  className="bg-dark-700 border-dark-600 text-white hover:bg-dark-600"
                >
                  Book a demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}