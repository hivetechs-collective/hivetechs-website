import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'HiveTechs - Coming Soon',
  description: 'We\'re building something amazing. Check back soon!',
}

// Under construction mode - blocks all pages
function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Simple animated dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          We're building something amazing. Check back soon!
        </p>
        
        <div className="text-sm text-gray-500">
          © 2024 HiveTechs
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // UNDER CONSTRUCTION MODE - Replace all pages
  const isUnderConstruction = true
  
  if (isUnderConstruction) {
    return (
      <html lang="en">
        <body className={inter.variable}>
          <UnderConstructionPage />
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}