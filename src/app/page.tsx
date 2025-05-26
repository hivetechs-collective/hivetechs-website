'use client'

import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Check, Star, Zap, Shield, Users } from 'lucide-react'

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
      {/* Hero Section - Paddle Inspired */}
      <section className="relative overflow-hidden bg-white">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />
        
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
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Get AI answers you can
                  <span className="text-primary block">actually trust</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Hive.AI verifies every response through multiple AI models, 
                  delivering 40% more accurate code suggestions than single-model tools.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button size="lg" onClick={() => handleSubscribe('basic')}>
                    Start free trial
                  </Button>
                  <Button variant="secondary" size="lg">
                    Watch demo
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </motion.div>
              
              {/* Right Visual */}
              <motion.div 
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8">
                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600">4 AI models analyzing...</span>
                      </div>
                      <div className="pl-5 space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-3/4 animate-pulse" />
                        <div className="h-2 bg-gray-200 rounded w-5/6 animate-pulse delay-75" />
                        <div className="h-2 bg-gray-200 rounded w-2/3 animate-pulse delay-100" />
                      </div>
                      <div className="flex items-center space-x-3 pt-4">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-900">Consensus achieved: 98% confidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <p className="text-center text-gray-600 mb-8">
            Trusted by 50,000+ developers at companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
            {/* Placeholder logos - replace with actual logos */}
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
            <div className="text-2xl font-bold text-gray-400">DevTools Inc</div>
            <div className="text-2xl font-bold text-gray-400">CloudBase</div>
            <div className="text-2xl font-bold text-gray-400">APIFirst</div>
          </div>
        </div>
      </section>

      {/* Features Section - Paddle Style */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for developers who demand accuracy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consensus pipeline combines the best of multiple AI models to deliver 
              responses you can trust for production code.
            </p>
          </div>

          <div className="feature-grid">
            {/* Feature 1 */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4-Stage Verification
              </h3>
              
              <p className="text-gray-600 mb-6">
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
              className="bg-white rounded-2xl border border-gray-200 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Production-Ready Code
              </h3>
              
              <p className="text-gray-600 mb-6">
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
              className="bg-white rounded-2xl border border-gray-200 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Team Collaboration
              </h3>
              
              <p className="text-gray-600 mb-6">
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

      {/* Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed">
                "Hive.AI has completely transformed how we handle code reviews. 
                The consensus approach catches issues that single models miss, 
                saving us hours of debugging time."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Senior Engineer at TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview - Paddle Style */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary smooth-transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">$5</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for individual developers</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">1,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Multi-model consensus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">VS Code & Cursor integration</span>
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
              className="relative bg-white rounded-2xl border-2 border-primary p-8 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most popular
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For professional developers</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">4,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Priority processing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Advanced model combinations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Email support</span>
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
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary smooth-transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Team</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">$50</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For development teams</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">12,000 monthly conversations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">5 team members</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-700">Priority support</span>
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
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to ship better code?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 50,000+ developers using Hive.AI to write more reliable, 
              production-ready code with AI consensus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => handleSubscribe('basic')}
              >
                Start your free trial
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}