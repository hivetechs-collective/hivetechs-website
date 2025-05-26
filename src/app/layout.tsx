import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthContext from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'HiveTechs Collective - Multi-Model AI Consensus Pipeline',
  description: 'HiveTechs Collective provides a powerful multi-model consensus pipeline that combines multiple AI models to deliver better answers for developers and businesses.',
  keywords: 'AI, consensus pipeline, multi-model, HiveTechs Collective, AI tools, developer tools',
  authors: [{ name: 'HiveTechs Collective LLC' }],
  creator: 'HiveTechs Collective LLC',
  publisher: 'HiveTechs Collective LLC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
