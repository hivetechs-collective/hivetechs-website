import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import WorkingButton from '@/components/WorkingButton'

export default function Products() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute left-0 bottom-0 pointer-events-none">
          <Image 
            src="/Hive-Logo.jpg" 
            alt="" 
            width={350} 
            height={350} 
            className="opacity-10 transform -translate-x-1/2 translate-y-1/4 -rotate-12"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">Our Products</h1>
            <p className="text-xl mb-8 font-medium">
              HiveTechs Collective offers a suite of AI-powered tools designed to enhance your development workflow and improve the quality of your AI interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Product 1 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <h2 className="heading-3 mb-4 text-white">Consensus Pipeline</h2>
              <p className="mb-4 text-white font-medium">
                Our flagship product combines the power of multiple AI models to deliver more accurate, reliable, and comprehensive responses to your queries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Multi-model aggregation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Fact-checking and validation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Customizable model weights</span>
                </li>
              </ul>
              <WorkingButton 
                url="/features" 
                text="Learn More" 
              />
            </div>
            
            {/* Product 2 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <h2 className="heading-3 mb-4 text-white">Developer SDK</h2>
              <p className="mb-4 text-white font-medium">
                Integrate our AI consensus pipeline directly into your applications with our comprehensive SDK available for multiple programming languages.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Python, JavaScript, Java, and Go support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Comprehensive documentation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Enterprise-grade security</span>
                </li>
              </ul>
              <WorkingButton 
                url="/features" 
                text="View Documentation" 
              />
            </div>
            
            {/* Product 3 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <h2 className="heading-3 mb-4 text-white">API Access</h2>
              <p className="mb-4 text-white font-medium">
                Access our AI consensus pipeline through our RESTful API with flexible authentication options and comprehensive endpoint documentation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">RESTful API design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">OAuth and API key authentication</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Rate limiting and usage monitoring</span>
                </li>
              </ul>
              <WorkingButton 
                url="/features" 
                text="API Reference" 
              />
            </div>
            
            {/* Product 4 */}
            <div className="bg-dark-700 p-8 rounded-lg shadow-md">
              <h2 className="heading-3 mb-4 text-white">Enterprise Solutions</h2>
              <p className="mb-4 text-white font-medium">
                Custom AI solutions tailored to your organization's specific needs with dedicated support and implementation assistance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Custom model training</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">Dedicated support team</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">SLA guarantees</span>
                </li>
              </ul>
              <WorkingButton 
                url="/contact" 
                text="Contact Sales" 
              />
            </div>
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to enhance your AI capabilities?</h2>
            <p className="text-xl mb-8 font-semibold">
              Contact our team today to learn how HiveTechs Collective can help you leverage the power of multi-model AI consensus.
            </p>
            <WorkingButton 
              url="/contact" 
              text="Contact Us" 
              variant="light"
              large={true}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
