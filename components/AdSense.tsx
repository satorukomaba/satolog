import React from 'react'
import Script from 'next/script'

// Google AdSenseの設定
// 実際のAdSense IDは後で設定してください
const ADSENSE_ID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || 'ca-pub-XXXXXXXXXXXXXXXX'

const AdSense = () => {
  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}

export default AdSense 