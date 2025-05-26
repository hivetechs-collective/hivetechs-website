'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">
              About HiveTechs Collective
            </h1>
            <p className="text-xl mb-8">
              We're on a mission to deliver better AI answers through multi-model consensus technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-lg text-white mb-6">
                HiveTechs Collective was founded in 2025 with a simple but powerful insight: while individual AI models have their strengths, they also have unique weaknesses and blindspots. By combining multiple models in a consensus pipeline, we could leverage their collective intelligence to deliver superior results.
              </p>
              <p className="text-lg text-white">
                Working alongside a team of AI systems, we built a tool that doesn't just query multiple models, but intelligently combines their outputs, weighing their responses based on confidence, accuracy, and relevance to provide the most comprehensive and reliable answers possible. In fact, our consensus AI technology was instrumental in creating itself.
              </p>
            </div>
            <div className="bg-dark-800 rounded-lg p-8 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">2025</div>
                <p className="text-xl">Founded in St. Petersburg, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Mission</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              To empower developers and businesses with AI tools that deliver more accurate, comprehensive, and reliable answers through multi-model consensus technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-white">
                We're committed to delivering the highest quality AI responses by combining the strengths of multiple models and eliminating their individual weaknesses.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-white">
                We believe in making advanced AI technology accessible to developers and businesses of all sizes through simple APIs and flexible pricing.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-white">
                We're building a community of developers and AI enthusiasts who share our vision of more reliable and trustworthy AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Team</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Meet the human and AI team behind HiveTechs Collective's multi-model consensus technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                {/* Placeholder for team member photo */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-2xl font-bold text-primary">VL</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Verone Lazio</h3>
              <p className="text-primary mb-4">Founder & CEO</p>
              <p className="text-white mb-6">
                AI enthusiast with a passion for creating tools that help developers build better software.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.005-.02-2.3-1.39-2.3-1.39 0-1.601 1.094-1.601 2.226v4.252H8.014v-8.59h2.559v1.174h.037c.355-.675 1.227-1.387 2.534-1.387 2.712 0 3.214 1.787 3.214 4.115v4.688zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* AI Team Member */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md text-center relative overflow-hidden">
              {/* Animated background for AI */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent-blue rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center animate-pulse shadow-lg shadow-primary/25">
                  <div className="text-4xl font-bold text-dark">AI</div>
                </div>
                <h3 className="text-xl font-bold mb-1">Consensus AI System</h3>
                <p className="text-primary mb-4">CTO (Chief Technology Officer)</p>
                <p className="text-white mb-6">
                  A sophisticated ensemble of AI models working in harmony. Helped design and build the very system it powers.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">4+ AI models in consensus</span>
                </div>
              </div>
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
              <h2 className="heading-2 mb-6 text-white">Join us on our mission</h2>
              <p className="text-xl mb-8 text-gray-300">
                Start your 7-day free trial today and experience the power of multi-model consensus technology.
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
                <Link href="/contact" className="inline-block bg-dark-700 border border-dark-600 text-white px-8 py-3 rounded-md hover:bg-dark-600 transition-all text-lg">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
