'use client'

import React, { useEffect } from 'react'

interface AdUnitProps {
  slot: string
  format?: string
  responsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  slot, 
  format = 'auto',
  responsive = true 
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}

export default AdUnit 