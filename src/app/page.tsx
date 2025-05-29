'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, Check, Star, Zap, Shield, Users, ArrowRight, AlertCircle } from 'lucide-react'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import CookieConsentModal from '@/components/CookieConsentModal'

export default function Home() {
  const { isAccepted, updateConsent } = useCookieConsent()
  const [showConsentModal, setShowConsentModal] = useState(false)
  const [pendingPlan, setPendingPlan] = useState<string | null>(null)
  
  const handleSubscribe = (plan: string) => {
    // Check cookie consent for non-free plans
    if (plan !== 'free' && !isAccepted) {
      setPendingPlan(plan)
      setShowConsentModal(true)
      return
    }
    
    // Use custom Paddle checkout for all plans
    if (plan === 'free') {
      // Free plan goes to signup
      window.location.href = '/auth/signup'
    } else {
      // All paid plans use custom checkout
      window.location.href = `/checkout/${plan}`
    }
  }

  const handleConsentAccept = () => {
    updateConsent('accepted')
    setShowConsentModal(false)
    
    // Execute pending action after consent
    if (pendingPlan) {
      setTimeout(() => {
        handleSubscribe(pendingPlan)
        setPendingPlan(null)
      }, 100)
    }
  }

  return (
    <PageLayout>
      {/* Hero Section - Dark Paddle Style */}
      <section className="relative overflow-hidden bg-dark">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Large Background Logo - positioned to the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={500} 
            height={500} 
            className="opacity-10 transform translate-x-1/4"
            priority
          />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative">
          <div className="container-custom pt-20 md:pt-24 pb-16">
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
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Why trust one AI when you can
                  <span className="text-primary block bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">trust them all?</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The world's first AI consensus platform with interactive dashboards, real-time monitoring, and export capabilities. 
                  Eliminates hallucinations, optimizes costs across 319+ models from 55+ providers, and provides intelligent 
                  recommendations you can trust for mission-critical work.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button size="lg" onClick={() => handleSubscribe('basic')} className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25 animate-pulse">
                    Start free trial
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

      {/* Feature Announcement - Model Discovery */}
      <section className="py-8 bg-gradient-to-r from-primary/90 to-accent-blue/90 relative overflow-hidden border-y border-primary/20">
        <div className="container-custom relative z-10">
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-semibold text-sm tracking-wide uppercase">🎯 New</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  World's First AI Consensus Platform
                </h3>
                <p className="text-base text-white/85 mt-1">
                  Interactive dashboards, real-time monitoring, export capabilities, AI recommendations & cost visualization
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center text-white/75 text-sm">
                <div className="w-2 h-2 rounded-full bg-white/60 mr-2 animate-pulse"></div>
                Updated daily
              </div>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                onClick={() => window.open('/features', '_self')}
              >
                Learn More →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Paddle Style */}
      <section className="py-16 bg-dark relative">
        {/* Floating Logo Animation */}
        <motion.div 
          className="absolute left-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={200} 
            height={200} 
            className="transform -rotate-12"
          />
        </motion.div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Four Pillars of AI Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The only platform that combines consensus validation, universal model access, real-time optimization, 
              and intelligent cost management — delivering AI you can actually trust for production applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                Consensus Intelligence
              </h3>
              
              <p className="text-gray-300 mb-6">
                Multi-AI validation through our 4-stage consensus pipeline eliminates 
                hallucinations and delivers truth you can trust for mission-critical decisions.
              </p>
              
              <a href="/documentation/consensus-pipeline" className="text-primary font-medium inline-flex items-center group">
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
                Universal Model Access
              </h3>
              
              <p className="text-gray-300 mb-6">
                Instantly access 319+ models from 55+ providers with intelligent selection, 
                automatic failover, and real-time performance optimization.
              </p>
              
              <a href="/documentation/model-discovery" className="text-primary font-medium inline-flex items-center group">
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
                Cost & Performance Intelligence
              </h3>
              
              <p className="text-gray-300 mb-6">
                Automatic cost optimization without quality compromise. Real-time analytics, 
                usage insights, and intelligent provider switching maximize your AI ROI.
              </p>
              
              <a href="/documentation/cost-intelligence" className="text-primary font-medium inline-flex items-center group">
                Learn more 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Feature 4 - NEW */}
            <motion.div 
              className="bg-dark-700 rounded-2xl border border-dark-600 p-8 card-hover smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                Interactive Dashboards
              </h3>
              
              <p className="text-gray-300 mb-6">
                Real-time monitoring, cost visualization, and AI-powered recommendations 
                with interactive dashboards and export capabilities for complete insights.
              </p>
              
              <a href="/documentation/interactive-dashboard" className="text-primary font-medium inline-flex items-center group">
                Learn more 
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          {/* Quick Start CTA after understanding the pillars */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Ready to experience the power of consensus AI?</p>
            <Link href="/documentation/quick-start">
              <Button size="lg" variant="secondary" className="bg-dark-700 hover:bg-dark-600 text-white border border-primary/20 hover:border-primary/40 transform hover:scale-105 transition-all">
                <Zap className="w-5 h-5 mr-2" />
                Quick Start Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cookie Rejection Notice */}
      {!isAccepted && (
        <section className="py-4 bg-amber-500/10 border-y border-amber-500/20">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-amber-200 text-sm">
                Cookies are required for checkout functionality. 
                <Link href="/cookie-preferences" className="text-amber-400 hover:text-amber-300 underline ml-1">
                  Update preferences
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Preview - Paddle Style */}
      <section className="section-padding bg-dark relative overflow-hidden">
        {/* Animated Background - matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with a 7-day free trial. No credit card required.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 border border-dark-600 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              {/* Card Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
              
              {/* Floating Orb for each card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-300 text-sm">/month</span>
              </div>
              <p className="text-gray-300 mb-3 text-sm">For hobbyists & students</p>
              <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full w-fit mb-4">
                No credit card required
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">5 daily / 100 monthly</span>
                </li>
                <li className="flex items-start">
                  <Link href="/pricing#credit-packs" className="ml-6 text-xs text-primary/80 hover:text-primary transition-colors underline decoration-dotted underline-offset-2">
                    Need more? Get credit packs →
                  </Link>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Consensus intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Unlimited context & memory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">All integrations</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-dark-700 border-dark-600 text-white hover:bg-dark-600 text-sm"
                onClick={() => handleSubscribe('free')}
              >
                Get started free
              </Button>
              </div>
            </motion.div>

            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 border border-dark-600 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              {/* Card Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
              
              {/* Floating Orb for each card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$5</span>
                <span className="text-gray-300 text-sm">/month</span>
              </div>
              <p className="text-gray-300 mb-3 text-sm">For individual developers</p>
              <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full w-fit mb-4">
                7-day unlimited trial
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">50 daily / 1,000 monthly</span>
                </li>
                <li className="flex items-start">
                  <Link href="/pricing#credit-packs" className="ml-6 text-xs text-primary/80 hover:text-primary transition-colors underline decoration-dotted underline-offset-2">
                    Need more? Get credit packs →
                  </Link>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Consensus intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Unlimited context & memory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">All integrations</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-dark-700 border-dark-600 text-white hover:bg-dark-600 text-sm"
                onClick={() => handleSubscribe('basic')}
              >
                Start 7-day trial
              </Button>
              </div>
            </motion.div>

            {/* Premium Plan - Most Popular */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 border-2 border-primary shadow-2xl shadow-primary/20 scale-105"
            >
              {/* Card Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
              
              {/* Floating Orb for popular card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-primary to-accent-blue text-dark px-3 py-1 rounded-full text-xs font-semibold shadow-lg w-fit mx-auto mb-3">
                  Most popular
                </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$20</span>
                <span className="text-gray-300 text-sm">/month</span>
              </div>
              <p className="text-gray-300 mb-3 text-sm">For professional developers</p>
              <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full w-fit mb-4">
                7-day unlimited trial
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">200 daily / 4,000 monthly</span>
                </li>
                <li className="flex items-start">
                  <Link href="/pricing#credit-packs" className="ml-6 text-xs text-primary/80 hover:text-primary transition-colors underline decoration-dotted underline-offset-2">
                    Need more? Get credit packs →
                  </Link>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Consensus intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Unlimited context & memory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Advanced models</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25 text-sm"
                onClick={() => handleSubscribe('premium')}
              >
                Start 7-day trial
              </Button>
              </div>
            </motion.div>

            {/* Team Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl p-6 border border-dark-600 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              {/* Card Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
              
              {/* Floating Orb for each card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Team</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$50</span>
                <span className="text-gray-300 text-sm">/month</span>
              </div>
              <p className="text-gray-300 mb-3 text-sm">For development teams</p>
              <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full w-fit mb-4">
                7-day unlimited trial
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">600 daily / 12,000 monthly</span>
                </li>
                <li className="flex items-start">
                  <Link href="/pricing#credit-packs" className="ml-6 text-xs text-primary/80 hover:text-primary transition-colors underline decoration-dotted underline-offset-2">
                    Need more? Get credit packs →
                  </Link>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Consensus intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">Unlimited context & memory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">5 team members</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-dark-700 border-dark-600 text-white hover:bg-dark-600 text-sm"
                onClick={() => handleSubscribe('team')}
              >
                Start 7-day trial
              </Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-2">Looking for our Standard ($10) plan?</p>
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

      {/* Plan Comparison Matrix */}
      <section id="compare-plans" className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-900 to-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/3 via-transparent to-accent-yellow/3" />
        
        <div className="relative container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Compare all plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your needs. All plans include the same powerful features.
              </p>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-dark-800 rounded-2xl border border-dark-600 overflow-hidden">
                <thead>
                  <tr className="bg-dark-700">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold">Basic</th>
                    <th className="text-center p-6 text-white font-semibold">Standard</th>
                    <th className="text-center p-6 text-white font-semibold relative">
                      <div className="bg-gradient-to-r from-primary to-accent-blue text-dark text-xs px-2 py-1 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2">
                        Most Popular
                      </div>
                      <div className="mt-6">Premium</div>
                    </th>
                    <th className="text-center p-6 text-white font-semibold">Team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Price per month</td>
                    <td className="p-6 text-center text-white font-bold">$0</td>
                    <td className="p-6 text-center text-white font-bold">$5</td>
                    <td className="p-6 text-center text-white font-bold">$10</td>
                    <td className="p-6 text-center text-white font-bold bg-primary/5">$20</td>
                    <td className="p-6 text-center text-white font-bold">$50</td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Daily conversations</td>
                    <td className="p-6 text-center text-gray-300">5</td>
                    <td className="p-6 text-center text-gray-300">50</td>
                    <td className="p-6 text-center text-gray-300">100</td>
                    <td className="p-6 text-center text-gray-300 bg-primary/5">200</td>
                    <td className="p-6 text-center text-gray-300">600 (shared)</td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Monthly conversations</td>
                    <td className="p-6 text-center text-gray-300">100</td>
                    <td className="p-6 text-center text-gray-300">1,000</td>
                    <td className="p-6 text-center text-gray-300">2,000</td>
                    <td className="p-6 text-center text-gray-300 bg-primary/5">4,000</td>
                    <td className="p-6 text-center text-gray-300">12,000 (shared)</td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Multi-model consensus</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">All terminal and IDE integrations</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Consensus intelligence (eliminates hallucinations)</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Unlimited context & long-term memory</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Priority processing</td>
                    <td className="p-6 text-center"><span className="w-2 h-0.5 bg-dark-500 block mx-auto" /></td>
                    <td className="p-6 text-center"><span className="w-2 h-0.5 bg-dark-500 block mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Team members included</td>
                    <td className="p-6 text-center text-gray-300">1</td>
                    <td className="p-6 text-center text-gray-300">1</td>
                    <td className="p-6 text-center text-gray-300">1</td>
                    <td className="p-6 text-center text-gray-300 bg-primary/5">1</td>
                    <td className="p-6 text-center text-gray-300">5</td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Additional conversation credits</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Support level</td>
                    <td className="p-6 text-center text-gray-300">Community</td>
                    <td className="p-6 text-center text-gray-300">Community</td>
                    <td className="p-6 text-center text-gray-300">Standard</td>
                    <td className="p-6 text-center text-gray-300 bg-primary/5">Standard</td>
                    <td className="p-6 text-center text-gray-300">Dedicated</td>
                  </tr>
                  <tr className="border-t border-dark-600">
                    <td className="p-6 text-gray-300 font-medium">Cancel anytime online</td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center bg-primary/5"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-6 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                  onClick={() => handleSubscribe('premium')}
                >
                  Start with Premium
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-dark-700 border-dark-600 text-white hover:bg-dark-600"
                  onClick={() => handleSubscribe('free')}
                >
                  Start free
                </Button>
              </div>
              
              {/* Quick Start option after comparing plans */}
              <div className="mt-8 pt-8 border-t border-dark-600">
                <p className="text-gray-400 mb-3">Already have a plan or want to try with your own API keys?</p>
                <Link href="/documentation/quick-start">
                  <Button variant="ghost" className="text-primary hover:text-primary-400">
                    View Quick Start Guide →
                  </Button>
                </Link>
              </div>
            </div>
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
                Ready for AI you can actually trust?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join developers who've eliminated AI hallucinations and optimized their costs 
                with the world's first consensus-powered AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent-blue hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                  onClick={() => handleSubscribe('basic')}
                >
                  Start your free trial
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Cookie Consent Modal */}
      <CookieConsentModal
        isOpen={showConsentModal}
        onClose={() => setShowConsentModal(false)}
        onAccept={handleConsentAccept}
      />
    </PageLayout>
  )
}