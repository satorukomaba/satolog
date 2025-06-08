import React from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-ZSD6BEE4YL'

const GoogleAnalytics = () => {
  // 本番環境でのみGoogle Analyticsを実行
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics 