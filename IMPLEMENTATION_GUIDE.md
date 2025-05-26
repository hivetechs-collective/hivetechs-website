# Website Redesign Implementation Guide

## Quick Start for Developers

This guide provides copy-paste code snippets and exact implementation steps for the HiveTechs website redesign.

## Step 1: Install Required Dependencies

```bash
cd /Users/veronelazio/Developer/Public/hivetechs-website
npm install @radix-ui/react-dropdown-menu @radix-ui/react-switch next-themes prismjs recharts framer-motion clsx
npm install --save-dev @types/prismjs
```

## Step 2: Set Up Dark Mode

### 2.1 Create Theme Provider
Create `src/providers/theme-provider.tsx`:

```typescript
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 2.2 Update Layout
Update `src/app/layout.tsx`:

```typescript
import { ThemeProvider } from '@/providers/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2.3 Update Tailwind Config
Update `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        background: 'rgb(255, 255, 255)',
        foreground: 'rgb(17, 24, 39)',
        
        // Dark mode will use Tailwind's dark: prefix
        dark: {
          background: 'rgb(17, 24, 39)',
          foreground: 'rgb(249, 250, 251)',
        },
        
        // Accent colors work in both modes
        primary: 'rgb(59, 130, 246)',
        secondary: 'rgb(34, 197, 94)',
        accent: 'rgb(251, 191, 36)',
      },
    },
  },
  plugins: [],
}
```

### 2.4 Create Theme Toggle Component
Create `src/components/ThemeToggle.tsx`:

```typescript
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
```

## Step 3: Create Interactive Demo Component

Create `src/components/InteractiveDemo.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EXAMPLE_QUERIES = [
  "Explain async/await in JavaScript",
  "How do I implement authentication in Next.js?",
  "What's the difference between useState and useReducer?",
  "Debug this Python function that's throwing an error"
]

export default function InteractiveDemo() {
  const [query, setQuery] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsProcessing(true)
    setShowResult(false)

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setShowResult(true)
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Try Hive.AI Right Now
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a coding question..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Try:</span>
          {EXAMPLE_QUERIES.map((example, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setQuery(example)}
              className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
        
        <button
          type="submit"
          disabled={isProcessing || !query.trim()}
          className="w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isProcessing ? 'Processing with 4 AI Models...' : 'Get Consensus Answer'}
        </button>
      </form>

      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-2"
          >
            <PipelineStep step={1} label="Generator" status="active" />
            <PipelineStep step={2} label="Refiner" status="pending" />
            <PipelineStep step={3} label="Validator" status="pending" />
            <PipelineStep step={4} label="Curator" status="pending" />
          </motion.div>
        )}
        
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Consensus Result</h4>
                <p className="mt-1 text-green-800 dark:text-green-200">
                  This is a demo result. In the full version, you'd see a comprehensive answer 
                  synthesized from multiple AI models, providing more accurate and reliable information.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function PipelineStep({ step, label, status }: { step: number; label: string; status: 'active' | 'pending' }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: step * 0.2 }}
      className={`flex items-center space-x-3 p-3 rounded-lg ${
        status === 'active' 
          ? 'bg-primary/10 border border-primary/20' 
          : 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
        status === 'active'
          ? 'bg-primary text-white'
          : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
      }`}>
        {step}
      </div>
      <span className={`font-medium ${
        status === 'active'
          ? 'text-primary'
          : 'text-gray-600 dark:text-gray-400'
      }`}>
        {label}
      </span>
      {status === 'active' && (
        <div className="ml-auto">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  )
}
```

## Step 4: Update Navigation Component

Replace `src/components/Navigation.tsx`:

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navigation = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Use Cases', href: '/use-cases' },
  ],
  developers: [
    { name: 'GitHub', href: 'https://github.com/hivetechs/hive.ai' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'MCP Integration', href: '/docs/mcp' },
    { name: 'CLI Guide', href: '/docs/cli' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
}

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">HiveTechs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <DropdownMenu
              label="Product"
              items={navigation.product}
              isOpen={openDropdown === 'product'}
              onToggle={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
            />

            {/* Developers Dropdown */}
            <DropdownMenu
              label="Developers"
              items={navigation.developers}
              isOpen={openDropdown === 'developers'}
              onToggle={() => setOpenDropdown(openDropdown === 'developers' ? null : 'developers')}
            />

            {/* Company Dropdown */}
            <DropdownMenu
              label="Company"
              items={navigation.company}
              isOpen={openDropdown === 'company'}
              onToggle={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
            />
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link
              href="/download"
              className="hidden md:inline-flex px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Download
            </Link>
            
            <Link
              href="/signin"
              className="hidden md:inline-flex px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function DropdownMenu({ label, items, isOpen, onToggle }: {
  label: string
  items: { name: string; href: string }[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onToggle} />
          <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={onToggle}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
```

## Step 5: Create New Hero Section

Update the hero section in `src/app/page.tsx`:

```typescript
'use client'

import PageLayout from '@/components/PageLayout'
import InteractiveDemo from '@/components/InteractiveDemo'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Better AI Answers Through{' '}
                <span className="text-primary">Consensus</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Hive.AI combines multiple AI models to deliver 40% more accurate responses 
                for your code. Experience the power of AI consensus in your IDE.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                  Try Hive.AI Free
                </button>
                <button className="px-8 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">10M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Queries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">40%</div>
                  <div className="text-gray-600 dark:text-gray-400">More Accurate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <InteractiveDemo />
          </div>
        </div>
      </section>
      
      {/* Add more sections here */}
    </PageLayout>
  )
}
```

## Step 6: Update Global Styles

Update `src/app/globals.css`:

```css
/* Keep existing Tailwind imports */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Add dark mode support */
@layer base {
  :root {
    --background: 255 255 255;
    --foreground: 17 24 39;
  }

  .dark {
    --background: 17 24 39;
    --foreground: 249 250 251;
  }

  body {
    @apply bg-white text-gray-900 dark:bg-gray-900 dark:text-white;
  }
}

/* Custom utilities */
@layer utilities {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .heading-1 {
    @apply text-4xl md:text-5xl lg:text-6xl font-bold;
  }

  .heading-2 {
    @apply text-3xl md:text-4xl font-bold;
  }

  .heading-3 {
    @apply text-2xl md:text-3xl font-bold;
  }

  /* Smooth transitions for theme switching */
  * {
    @apply transition-colors duration-200;
  }
}

/* Code syntax highlighting styles */
.code-block {
  @apply font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto;
}

/* Custom scrollbar for dark mode */
.dark::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.dark::-webkit-scrollbar-track {
  @apply bg-gray-800;
}

.dark::-webkit-scrollbar-thumb {
  @apply bg-gray-600 rounded-md;
}

.dark::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500;
}
```

## Step 7: Add Icons (using Lucide)

```bash
npm install lucide-react
```

## Testing Checklist

1. **Dark Mode Testing**
   - [ ] Toggle works correctly
   - [ ] All text is readable in both modes
   - [ ] No flash of unstyled content
   - [ ] Preference is saved

2. **Responsive Testing**
   - [ ] Mobile navigation works
   - [ ] Dropdowns function on touch
   - [ ] Hero section scales properly
   - [ ] Demo component is usable on mobile

3. **Interactive Elements**
   - [ ] Demo processes queries
   - [ ] Example queries populate input
   - [ ] Animation sequences work
   - [ ] All buttons have hover states

4. **Performance**
   - [ ] Page loads under 2 seconds
   - [ ] No layout shift
   - [ ] Animations are smooth
   - [ ] Images are optimized

## Next Steps

After implementing these components:

1. Create the remaining components from the plan
2. Add content for all new pages
3. Implement analytics tracking
4. Set up A/B testing
5. Optimize for SEO

This foundation provides the core structure for the modern, developer-focused redesign. Each component is modular and can be enhanced incrementally.