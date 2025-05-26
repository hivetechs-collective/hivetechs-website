/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paddle-style dark theme palette
        primary: {
          DEFAULT: '#FFC107', // Paddle's yellow
          light: '#FFD54F',   // Lighter yellow
          dark: '#FFAD00',    // Darker yellow
        },
        'accent-yellow': '#FFC107',  // Paddle's yellow
        'accent-blue': '#007BFF',    // Electric blue
        'accent-purple': '#8A2BE2',  // Deep purple
        'accent-green': '#28A745',   // Success green
        dark: {
          DEFAULT: '#0E1414', // Paddle's black
          900: '#121818',     // Darker variant
          800: '#181E21',     // Dark background
          700: '#1E2427',     // Card backgrounds
          600: '#2D3336',     // Borders
          500: '#4B5156',     // Muted elements
        },
        gray: {
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
        },
        // Legacy support
        secondary: '#10B981',
        accent: '#F59E0B',
        dark: '#111827',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
