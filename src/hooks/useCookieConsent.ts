'use client'

import { useState, useEffect } from 'react'

export type ConsentStatus = 'pending' | 'accepted' | 'rejected'

export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check consent status from localStorage
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      setConsentStatus('accepted')
    } else if (consent === 'rejected') {
      setConsentStatus('rejected')
    }
    setIsLoading(false)

    // Listen for consent changes
    const handleConsentChange = () => {
      const updatedConsent = localStorage.getItem('cookie-consent')
      if (updatedConsent === 'accepted') {
        setConsentStatus('accepted')
      } else if (updatedConsent === 'rejected') {
        setConsentStatus('rejected')
      }
    }

    window.addEventListener('cookieConsentAccepted', handleConsentChange)
    window.addEventListener('storage', handleConsentChange)

    return () => {
      window.removeEventListener('cookieConsentAccepted', handleConsentChange)
      window.removeEventListener('storage', handleConsentChange)
    }
  }, [])

  const updateConsent = (status: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', status)
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setConsentStatus(status)
    
    if (status === 'accepted') {
      window.dispatchEvent(new CustomEvent('cookieConsentAccepted'))
    }
  }

  return {
    consentStatus,
    isLoading,
    hasConsented: consentStatus !== 'pending',
    isAccepted: consentStatus === 'accepted',
    updateConsent
  }
}