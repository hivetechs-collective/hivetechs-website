"use client"

import React from 'react'
import Link from 'next/link'

interface WorkingButtonProps {
  url: string;
  text: string;
  fullWidth?: boolean;
  large?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export default function WorkingButton({ 
  url, 
  text, 
  fullWidth = false, 
  large = false,
  variant = 'primary',
  className = '',
  onClick
}: WorkingButtonProps) {
  // Determine if URL is external or internal
  const isExternal = url.startsWith('http') || url.startsWith('https') || url.startsWith('mailto');
  
  // Build class names based on props
  let classes = 'inline-flex items-center justify-center rounded-md font-medium transition-all text-center';
  
  // Size classes
  classes += large ? ' px-8 py-3 text-lg' : ' px-6 py-2';
  
  // Width classes
  classes += fullWidth ? ' w-full' : '';
  
  // Variant classes
  switch (variant) {
    case 'secondary':
      classes += ' bg-indigo-700 text-white hover:bg-indigo-800';
      break;
    case 'outline':
      classes += ' bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50';
      break;
    case 'light':
      classes += ' bg-white text-indigo-600 hover:bg-gray-100';
      break;
    case 'dark':
      classes += ' bg-gray-900 text-white hover:bg-gray-800';
      break;
    default: // primary
      classes += ' bg-indigo-600 text-white hover:bg-indigo-700';
  }
  
  // Add any custom classes
  classes += className ? ` ${className}` : '';

  // Handle external links with button and window.open
  if (isExternal) {
    const handleClick = () => {
      window.open(url, '_blank');
      if (onClick) onClick();
    };

    return (
      <button 
        className={classes}
        onClick={handleClick}
        type="button"
      >
        {text}
      </button>
    );
  }
  
  // Handle internal links with Next.js Link component
  return (
    <Link href={url} className={classes} onClick={onClick}>
      {text}
    </Link>
  );
}
