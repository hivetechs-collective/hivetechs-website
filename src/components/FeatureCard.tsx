'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
  linkText?: string
  className?: string
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  link, 
  linkText = 'Learn more',
  className 
}: FeatureCardProps) {
  return (
    <motion.div 
      className={cn(
        "group bg-white rounded-2xl border border-gray-200 p-8 card-hover smooth-transition",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 smooth-transition">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {link && (
        <a
          href={link}
          className="text-primary font-medium inline-flex items-center group-hover:gap-3 smooth-transition"
        >
          {linkText}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 smooth-transition" />
        </a>
      )}
    </motion.div>
  )
}

export default FeatureCard