'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark py-16">
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
          />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                  Revolutionary AI Technology
                </p>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Revolutionary AI Model Access +
                  <span className="text-primary block bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">Trusted Consensus</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Access 319+ models from 55+ providers through auto-discovery, with advanced analytics, cost tracking, performance benchmarking, and automatic failover — all through our trusted 4-stage consensus pipeline.
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="font-semibold text-white">Generator</span>
                  </div>
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="font-semibold text-white">Refiner</span>
                  </div>
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="font-semibold text-white">Validator</span>
                  </div>
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="font-semibold text-white">Curator</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container-custom">
          <div id="hallucination-prevention" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">🧠 Eliminates AI Hallucinations</h2>
              <p className="text-lg text-white font-medium mb-6">
                Our revolutionary 4-stage consensus pipeline eliminates AI hallucinations by combining multiple specialized AI models that cross-verify each other's outputs. Unlike single-model AI tools that can confidently generate false information, our consensus approach ensures accuracy through collective intelligence.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Why Single AI Models Hallucinate:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Generate confident-sounding but false information</li>
                  <li>• No built-in verification mechanism</li>
                  <li>• Prone to filling knowledge gaps with plausible fiction</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>How Our Consensus Prevents This:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Multiple models independently verify facts</li>
                  <li>• Cross-validation catches inconsistencies</li>
                  <li>• Only consensus-verified information passes through</li>
                </ul>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Generator Stage</h3>
                    <p className="text-white font-medium">Creates comprehensive initial responses with broad topic coverage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Refiner Stage</h3>
                    <p className="text-white font-medium">Enhances clarity, corrects inaccuracies, and improves structure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Validator Stage</h3>
                    <p className="text-white font-medium">Verifies factual accuracy and performs critical reasoning checks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Curator Stage</h3>
                    <p className="text-white font-medium">Delivers polished, well-formatted responses with consistent tone</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/consensus-pipeline" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  📖 Learn More About Consensus Pipeline
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="space-y-6 w-full max-w-md">
                <div className="bg-dark-700 rounded-lg p-6 shadow-md border-l-4 border-primary">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <h4 className="font-semibold">Generator</h4>
                  </div>
                  <p className="text-sm text-white font-medium">"The quantum computing field emerged in the 1980s..."</p>
                </div>
                
                <div className="bg-dark-700 rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <h4 className="font-semibold">Refiner</h4>
                  </div>
                  <p className="text-sm text-white font-medium">"Quantum computing emerged in the early 1980s when physicists like Richard Feynman proposed using quantum mechanics to solve computational problems..."</p>
                </div>
                
                <div className="bg-dark-700 rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <h4 className="font-semibold">Validator</h4>
                  </div>
                  <p className="text-sm text-white font-medium">"Correction: While Feynman was influential, the field began in the late 1970s with early work by Benioff. Feynman's famous lecture was in 1981..."</p>
                </div>
                
                <div className="bg-dark-700 rounded-lg p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <h4 className="font-semibold">Curator</h4>
                  </div>
                  <p className="text-sm text-white font-medium">"Quantum computing emerged in the late 1970s through Paul Benioff's work, with significant contributions from Richard Feynman's 1981 proposal to use quantum mechanics for computation..."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Discovery Feature - NEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">🔍 Revolutionary Model Discovery</h2>
              <p className="text-lg text-white font-medium mb-6">
                Never research AI models again. Our system automatically discovers, catalogs, and compares 319+ models from 55+ providers daily. 
                Find the perfect model for any task with real-time cost comparison and capability matching.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Current Multi-Model Platform Limitations:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Limited to 20-50 models from select providers</li>
                  <li>• Static catalogs without real-time intelligence</li>
                  <li>• Manual model selection without AI optimization</li>
                  <li>• Platform-specific vendor lock-in elements</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Our Auto-Discovery Advantage:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 319+ models discovered automatically</li>
                  <li>• Real-time pricing updates daily</li>
                  <li>• Instant access to new releases</li>
                  <li>• Unified interface for all providers</li>
                </ul>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Intelligent Search</h3>
                    <p className="text-white font-medium">Filter by capability, cost, context window, and performance metrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Side-by-Side Comparison</h3>
                    <p className="text-white font-medium">Compare any models for cost, capabilities, and context limits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Zero Maintenance</h3>
                    <p className="text-white font-medium">Daily auto-updates keep you current with the latest AI capabilities</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/model-discovery" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🔍 Learn More About Model Discovery
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="space-y-4 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">319+</div>
                  <div className="text-lg text-gray-300">Models Available</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-blue mb-1">55+</div>
                    <div className="text-sm text-gray-300">Providers</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-green mb-1">Daily</div>
                    <div className="text-sm text-gray-300">Updates</div>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">OpenAI</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">39 models</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Anthropic</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">24 models</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Google</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">23 models</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Meta</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">26 models</span>
                  </div>
                  <div className="text-center text-xs text-gray-400 mt-2">+ 51 more providers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Analytics & Insights - NEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="space-y-4 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">📊</div>
                  <div className="text-lg text-gray-300">Real-Time Analytics</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Usage Tracking</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Live</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Cost Analysis</span>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">$0.032</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Performance Score</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Success Rate</span>
                    <span className="text-xs bg-accent-green/20 text-accent-green px-2 py-1 rounded">99.8%</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-dark-700 rounded-lg border-l-4 border-primary">
                  <div className="text-xs text-primary font-semibold mb-1">💡 Smart Insight</div>
                  <div className="text-xs text-gray-300">Your usage increased 23% this week. Consider upgrading to Premium for better cost efficiency.</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 mb-6">📊 Advanced Analytics & Insights</h2>
              <p className="text-lg text-white font-medium mb-6">
                Get deep insights into your AI usage with comprehensive analytics, cost tracking, and automated recommendations. 
                Our SQLite-based analytics database provides real-time visibility into performance, costs, and optimization opportunities.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Without Analytics Tracking:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• No visibility into AI spending patterns</li>
                  <li>• Missing performance optimization opportunities</li>
                  <li>• Manual cost tracking and budget management</li>
                  <li>• No insights for model selection</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Our Analytics Advantage:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Real-time usage and cost monitoring</li>
                  <li>• Automated insights and recommendations</li>
                  <li>• Performance trending and optimization alerts</li>
                  <li>• Export capabilities (JSON/CSV) for reporting</li>
                </ul>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">📈</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Usage Analytics</h3>
                    <p className="text-white font-medium">Track model usage patterns, success rates, and performance metrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Cost Intelligence</h3>
                    <p className="text-white font-medium">Automated cost tracking with budget alerts and spending projections</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Smart Insights</h3>
                    <p className="text-white font-medium">AI-powered recommendations for optimization and cost savings</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/analytics-insights" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  📊 Learn More About Analytics & Insights
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Performance Benchmarking - NEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">🏆 Performance Benchmarking & Scoring</h2>
              <p className="text-lg text-white font-medium mb-6">
                Automatically benchmark and score AI models across multiple capability categories. 
                Our comprehensive testing suite evaluates reasoning, coding, writing, and specialized tasks to help you choose the best model for each use case.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Manual Model Testing Issues:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Time-consuming manual testing across models</li>
                  <li>• Inconsistent evaluation criteria</li>
                  <li>• No standardized performance comparison</li>
                  <li>• Missing capability-specific insights</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Our Benchmarking System:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Automated testing across capability categories</li>
                  <li>• Standardized scoring methodology</li>
                  <li>• Real-time performance leaderboards</li>
                  <li>• Task-specific model recommendations</li>
                </ul>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Multi-Category Testing</h3>
                    <p className="text-white font-medium">Reasoning, coding, writing, math, and specialized domain testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Performance Scoring</h3>
                    <p className="text-white font-medium">Comprehensive scoring based on accuracy, speed, and cost efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🏅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dynamic Leaderboards</h3>
                    <p className="text-white font-medium">Real-time rankings updated with each benchmark run</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/performance-benchmarking" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🏆 Learn More About Performance Benchmarking
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="space-y-4 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">🏆</div>
                  <div className="text-lg text-gray-300">Performance Leaderboard</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3 border-l-4 border-primary">
                    <div>
                      <div className="text-sm font-semibold text-white">🥇 GPT-4</div>
                      <div className="text-xs text-gray-400">OpenAI</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">94.8</div>
                      <div className="text-xs text-gray-400">Reasoning</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3 border-l-4 border-blue-500">
                    <div>
                      <div className="text-sm font-semibold text-white">🥈 Claude-3 Opus</div>
                      <div className="text-xs text-gray-400">Anthropic</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-400">93.2</div>
                      <div className="text-xs text-gray-400">Writing</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3 border-l-4 border-green-500">
                    <div>
                      <div className="text-sm font-semibold text-white">🥉 Code Llama</div>
                      <div className="text-xs text-gray-400">Meta</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-400">91.7</div>
                      <div className="text-xs text-gray-400">Coding</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center mt-6">
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="text-xl font-bold text-accent-blue mb-1">8</div>
                    <div className="text-xs text-gray-300">Test Categories</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="text-xl font-bold text-accent-green mb-1">319+</div>
                    <div className="text-xs text-gray-300">Models Tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automatic Failover & Redundancy - NEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="space-y-4 w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">🛡️</div>
                  <div className="text-lg text-gray-300">System Health Monitor</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">OpenAI</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-400">Healthy</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Anthropic</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-400">Healthy</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Google</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                      <span className="text-xs text-yellow-400">Degraded</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-dark-700 rounded p-3">
                    <span className="text-sm text-gray-300">Meta</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-xs text-red-400">Failed</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-dark-700 rounded-lg border-l-4 border-yellow-500">
                  <div className="text-xs text-yellow-400 font-semibold mb-1">⚡ Auto-Failover Active</div>
                  <div className="text-xs text-gray-300">Switched from Meta to Anthropic due to high error rate (25% > 20% threshold)</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 mb-6">🛡️ Automatic Failover & Redundancy</h2>
              <p className="text-lg text-white font-medium mb-6">
                Ensure uninterrupted AI workflows with intelligent failover and provider redundancy. 
                Our system continuously monitors provider health and automatically switches to backup providers when issues are detected.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Single Provider Risks:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Service outages break your workflow</li>
                  <li>• Rate limits halt development</li>
                  <li>• No backup when providers fail</li>
                  <li>• Manual intervention required</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Our Failover System:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Real-time health monitoring across all providers</li>
                  <li>• Automatic failover within seconds</li>
                  <li>• Configurable thresholds and strategies</li>
                  <li>• Zero-downtime provider switching</li>
                </ul>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Health Monitoring</h3>
                    <p className="text-white font-medium">Continuous monitoring of error rates, response times, and availability</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Instant Switching</h3>
                    <p className="text-white font-medium">Automatic failover triggered by configurable thresholds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Load Balancing</h3>
                    <p className="text-white font-medium">Smart routing based on performance, cost, and availability</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/automatic-failover" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🛡️ Learn More About Automatic Failover
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Production-Ready Code Section */}
          <div id="production-ready-code" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="w-full max-w-md">
                <div className="space-y-4">
                  {/* Code Quality Visualization */}
                  <div className="bg-dark-700 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <h4 className="font-semibold text-red-400">Typical AI Code</h4>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {`// No error handling\nfunction getData() {\n  return fetch('/api/data').then(r => r.json())\n}`}
                    </div>
                  </div>
                  
                  <div className="bg-dark-700 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                      <h4 className="font-semibold text-primary">hive-tools Code</h4>
                    </div>
                    <div className="text-xs text-gray-300 font-mono">
                      {`async function getData(): Promise<ApiResponse> {\n  try {\n    const response = await fetch('/api/data', {\n      headers: { 'Content-Type': 'application/json' },\n      timeout: 5000\n    })\n    \n    if (!response.ok) {\n      throw new Error(\`HTTP \${response.status}\`)\n    }\n    \n    return await response.json()\n  } catch (error) {\n    logger.error('Failed to fetch data:', error)\n    throw new DataFetchError(error.message)\n  }\n}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 mb-6">🛡️ Production-Ready Code</h2>
              <p className="text-lg text-white font-medium mb-6">
                hive-tools doesn't just generate code - it generates production-ready code that follows best practices, includes comprehensive error handling, and is optimized for real-world applications.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-red-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Typical AI Code Issues:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Missing error handling and edge cases</li>
                  <li>• No type safety or validation</li>
                  <li>• Poor performance and security practices</li>
                  <li>• Lacks proper logging and monitoring</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>hive-tools Production Standards:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Comprehensive error handling and validation</li>
                  <li>• Type safety and proper interfaces</li>
                  <li>• Performance optimization and security best practices</li>
                  <li>• Built-in logging, monitoring, and debugging</li>
                </ul>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Enterprise-grade error handling and resilience patterns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Security-first coding practices and vulnerability prevention</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Performance optimization and scalability considerations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Comprehensive testing strategies and documentation</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/production-ready-code" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🛡️ Learn More About Production-Ready Code
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="w-full max-w-md">
                <div className="relative">
                  {/* Knowledge Graph Visualization */}
                  <div className="mb-6">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <span className="text-primary font-bold">Query</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-6">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-blue-400">
                        <span className="text-blue-500 text-sm font-medium">Topic 1</span>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-purple-400">
                        <span className="text-purple-500 text-sm font-medium">Topic 2</span>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-green-400">
                        <span className="text-green-500 text-sm font-medium">Topic 3</span>
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-12 bg-gray-300"></div>
                    <div className="absolute top-28 left-1/4 w-1/2 h-px bg-gray-300"></div>
                    <div className="absolute top-28 left-1/4 w-px h-8 bg-gray-300"></div>
                    <div className="absolute top-28 left-1/2 w-px h-8 bg-gray-300"></div>
                    <div className="absolute top-28 left-3/4 w-px h-8 bg-gray-300"></div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <div className="text-3xl font-bold text-primary mb-2">Thematic</div>
                    <p className="text-lg font-medium text-gray-300">Knowledge Retrieval</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 id="unlimited-memory" className="heading-2 mb-6">🔄 Unlimited Context & Long-Term Memory</h2>
              <p className="text-lg text-white font-medium mb-6">
                Unlike token-limited AI assistants, hive-tools provides unlimited context awareness and persistent long-term memory. No more losing conversation history or repeating context - our system remembers everything and builds upon previous interactions.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-yellow-500">
                <p className="text-sm text-gray-300 mb-2"><strong>Traditional AI Limitations:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Token limits cut off conversation history</li>
                  <li>• Lose context after a few exchanges</li>
                  <li>• Must re-explain project details repeatedly</li>
                </ul>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Our Unlimited Memory Advantage:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Unlimited conversation history retention</li>
                  <li>• Thematic pattern recognition across sessions</li>
                  <li>• Builds comprehensive project knowledge base</li>
                </ul>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automatically maintains conversation continuity across related topics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Identifies thematic relationships between seemingly disparate queries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Builds a comprehensive knowledge graph from your interactions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Provides context-aware responses without requiring explicit references</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/unlimited-context" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🔄 Learn More About Unlimited Context
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">🌐 Universal Language & Framework Support</h2>
              <p className="text-lg text-white font-medium mb-6">
                hive-tools works with ANY programming language, framework, or technology stack. Unlike limited AI assistants, our consensus pipeline has no artificial restrictions - if you can code it, we can help optimize it.
              </p>
              <div className="bg-dark-800/50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm text-gray-300 mb-2"><strong>Truly Universal Support:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• All programming languages (Python, Rust, COBOL, Assembly...)</li>
                  <li>• Every framework and library ecosystem</li>
                  <li>• Legacy systems and cutting-edge technologies</li>
                  <li>• Domain-specific languages and niche tools</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-primary">
                  <h3 className="font-bold text-white mb-2">Software Engineering</h3>
                  <ul className="text-sm text-white font-medium space-y-1">
                    <li>• Architecture Patterns</li>
                    <li>• Design Principles</li>
                    <li>• Testing Strategies</li>
                  </ul>
                </div>
                <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-bold text-white mb-2">Machine Learning</h3>
                  <ul className="text-sm text-white font-medium space-y-1">
                    <li>• Model Selection</li>
                    <li>• Training Pipelines</li>
                    <li>• Hyperparameter Tuning</li>
                  </ul>
                </div>
                <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-purple-500">
                  <h3 className="font-bold text-white mb-2">Database Technologies</h3>
                  <ul className="text-sm text-white font-medium space-y-1">
                    <li>• Query Optimization</li>
                    <li>• Schema Design</li>
                    <li>• Data Modeling</li>
                  </ul>
                </div>
                <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-white mb-2">Cloud Infrastructure</h3>
                  <ul className="text-sm text-white font-medium space-y-1">
                    <li>• Deployment Strategies</li>
                    <li>• Scaling Solutions</li>
                    <li>• Cost Optimization</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-300 italic">
                "The depth of technical knowledge across multiple domains has helped us solve complex problems that would have taken weeks to research." - Michael T., CTO
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/consensus-pipeline" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  🌐 Learn More About Universal Support
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="w-full max-w-md text-center">
                <div className="relative">
                  {/* Infinite Symbol */}
                  <div className="flex justify-center mb-8">
                    <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 25C25 15 35 5 50 5C65 5 75 15 75 25C75 35 65 45 50 45C35 45 25 35 25 25ZM75 25C75 35 65 45 50 45C35 45 25 35 25 25C25 15 35 5 50 5C65 5 75 15 75 25Z" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">∞ Languages</h3>
                  <h3 className="text-2xl font-bold text-white mb-4">∞ Frameworks</h3>
                  <h3 className="text-2xl font-bold text-white mb-6">∞ Possibilities</h3>
                  
                  <p className="text-sm text-gray-300 italic">
                    "If you can code it, we can help optimize it"
                  </p>
                  
                  <div className="mt-6">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent-blue text-white rounded-lg font-bold text-lg">
                      No Limitations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fourth Feature: Persistent Contextual Memory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-dark-800 rounded-lg p-8 flex items-center justify-center h-auto py-12">
              <div className="w-full max-w-md">
                <div className="relative flex flex-col items-center">
                  {/* Memory Database Visualization */}
                  <div className="w-full bg-dark-700 rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-white">Persistent Memory</h3>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <div className="text-xs text-white font-medium bg-dark-800 rounded px-2 py-1 flex-grow">
                          <span className="font-medium">Session #1:</span> Project setup discussion
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <div className="text-xs text-white font-medium bg-dark-800 rounded px-2 py-1 flex-grow">
                          <span className="font-medium">Session #2:</span> Database schema design
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <div className="text-xs text-white font-medium bg-dark-800 rounded px-2 py-1 flex-grow">
                          <span className="font-medium">Session #3:</span> API endpoint implementation
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-xs text-white font-medium bg-primary/20 rounded px-2 py-1 flex-grow font-medium">
                          Current Session: Frontend integration
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 mb-6">📚 Persistent Contextual Memory</h2>
              <p className="text-lg text-white font-medium mb-6">
                Our SQLite-based persistent storage ensures your conversations and context are preserved across sessions, creating a truly continuous experience.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Long-term memory across sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automatic context retrieval for related questions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Progressive knowledge building from user interactions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Intelligent response adaptation based on conversation history</span>
                </li>
              </ul>
              <p className="text-sm text-gray-300 italic">
                "It's like having a team member who remembers every detail of our past conversations and builds on that knowledge over time." - Alex R., Product Manager
              </p>
              
              <div className="mt-8">
                <Link 
                  href="/documentation/persistent-memory" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-dark font-semibold rounded-lg transition-colors duration-200 group"
                >
                  📚 Learn More About Persistent Memory
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Complete AI Development Platform</h2>
            <p className="text-xl text-white font-medium max-w-3xl mx-auto">
              Beyond consensus AI, hive-tools provides a comprehensive suite of advanced features that transform how you work with AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Rich Terminal UI */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Rich Terminal UI</h3>
              <p className="text-white font-medium">
                Beautiful interactive menus, colorized tables, progress bars, and real-time status indicators for an enhanced CLI experience.
              </p>
            </div>

            {/* Feature 2 - Cost Intelligence */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cost Intelligence</h3>
              <p className="text-white font-medium">
                Smart budget management with automated cost tracking, spending alerts, and optimization recommendations.
              </p>
            </div>

            {/* Feature 3 - Interactive Profiles */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Model Profiles</h3>
              <p className="text-white font-medium">
                Pre-configured profiles (cost_effective, high_quality, balanced) with automatic model selection for different use cases.
              </p>
            </div>

            {/* Feature 4 - Advanced Search */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Model Search</h3>
              <p className="text-white font-medium">
                Powerful search and filtering by capability, cost, context window, latency, and quality scores across 319+ models.
              </p>
            </div>

            {/* Feature 5 - MCP Integration */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">41 MCP Tools</h3>
              <p className="text-white font-medium">
                Complete IDE integration with 41 Model Context Protocol tools for Cursor, Zed, VS Code, and other editors.
              </p>
            </div>

            {/* Feature 6 - Interactive Dashboard */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Interactive Dashboard</h3>
              <p className="text-white font-medium">
                Real-time monitoring dashboard with live metrics, budget tracking, and customizable layouts for comprehensive AI operations oversight.
              </p>
            </div>

            {/* Feature 7 - Export & Integration */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Export & Integration</h3>
              <p className="text-white font-medium">
                Export AI data in multiple formats (JSON, CSV, Excel, PDF) with scheduled automation and business tool integration.
              </p>
            </div>

            {/* Feature 8 - Real-time Monitoring */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Monitoring</h3>
              <p className="text-white font-medium">
                Intelligent monitoring with multi-channel alerts, usage spike detection, and automated session management.
              </p>
            </div>

            {/* Feature 9 - Cost Visualization */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cost Visualization</h3>
              <p className="text-white font-medium">
                Advanced cost analytics with ASCII charts, trend analysis, and provider efficiency comparisons for smart financial insights.
              </p>
            </div>

            {/* Feature 10 - AI Recommendations */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Recommendations</h3>
              <p className="text-white font-medium">
                Intelligent model selection with use case analysis, confidence scoring, and personalized optimization recommendations.
              </p>
            </div>

            {/* Feature 11 - Setup Wizard */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Interactive Setup Wizard</h3>
              <p className="text-white font-medium">
                Guided onboarding with quick and complete setup options for providers, budgets, profiles, and monitoring configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark min-h-[500px] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative w-full">
          <div className="container-custom py-20">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 text-white">Ready to experience better AI answers?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Start your 7-day free trial today and see the difference our multi-model consensus pipeline can make for your projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://store.hivetechs.io/l/basic-plan?wanted=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-primary to-accent-blue text-white font-semibold text-lg px-8 py-3 rounded-md hover:from-primary-light hover:to-accent-blue transform hover:scale-105 transition-all shadow-lg shadow-primary/25"
                >
                  Start Free Trial
                </a>
                <Link href="/pricing" className="inline-block bg-dark-700 border border-dark-600 text-white px-8 py-3 rounded-md hover:bg-dark-600 transition-all text-lg">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
