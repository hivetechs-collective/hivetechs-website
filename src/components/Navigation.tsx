'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Product', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Company', href: '/about' },
  ]

  return (
    <nav className={cn(
      "sticky top-0 z-50 bg-dark transition-all duration-300",
      scrolled ? "shadow-lg shadow-black/20" : "border-b border-dark-600"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <Image 
                src="/Hive-Logo.jpg" 
                alt="Hive Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain relative z-10"
                priority
                unoptimized
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="font-semibold text-xl text-white">HiveTechs Collective</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing">
              <Button size="sm">
                Get started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-dark-600 bg-dark">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-dark-600">
                <Link href="/pricing" className="w-full">
                  <Button className="w-full">
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white font-medium transition-colors"
    >
      {children}
    </Link>
  )
}