'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center button-press'
    
    const variants = {
      primary: 'bg-[rgb(var(--primary))] text-white hover:bg-[rgb(var(--primary-light))] shadow-lg shadow-[rgb(var(--primary))]/20 hover:shadow-xl hover:shadow-[rgb(var(--primary))]/30',
      secondary: 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50',
      ghost: 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }