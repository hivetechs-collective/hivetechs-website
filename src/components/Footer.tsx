"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">HiveTechs Collective</h3>
            <p className="text-gray-300 mb-4">
              Developing innovative AI tools for developers and businesses.
            </p>
            <p className="text-gray-300 text-sm">
              HiveTechs Collective LLC<br />
              7901 4th St N STE 300<br />
              St. Petersburg, FL 33702
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white">
                  Store
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex justify-between items-start">
              <ul className="space-y-2">
                <li className="text-gray-300">
                  <a href="mailto:founder@hivetechs.io" className="hover:text-white">
                    founder@hivetechs.io
                  </a>
                </li>
                <li className="text-gray-300">
                  <a href="mailto:support@hivetechs.io" className="hover:text-white">
                    support@hivetechs.io
                  </a>
                </li>
                <li className="text-gray-300">
                  <a href="tel:+18134000871" className="hover:text-white">
                    (813) 400-0871
                  </a>
                </li>
              </ul>
              {/* Logo in contact section */}
              <div className="hidden lg:block ml-4">
                <Image 
                  src="/Hive-Logo.jpg" 
                  alt="" 
                  width={80} 
                  height={80} 
                  className="opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-gray-300 space-y-4 lg:space-y-0">
            <p className="text-sm">© {currentYear} HiveTechs Collective LLC. All rights reserved.</p>
            
            {/* Mobile: Stack links in two columns */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-4 lg:space-x-6">
              <Link href="/terms" className="hover:text-white text-sm whitespace-nowrap">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white text-sm whitespace-nowrap">
                Privacy
              </Link>
              <Link href="/refund" className="hover:text-white text-sm whitespace-nowrap">
                Refunds
              </Link>
              <Link href="/cookie-preferences" className="hover:text-white text-sm whitespace-nowrap">
                Cookies
              </Link>
              <Link href="/manage-subscription" className="hover:text-white text-sm whitespace-nowrap col-span-2 sm:col-span-1">
                Manage Subscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
