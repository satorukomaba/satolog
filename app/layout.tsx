import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdSense from '@/components/AdSense'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'サトログ',
    template: '%s | サトログ'
  },
  description: '日々の出来事や思考を綴る雑記ブログです。',
  keywords: ['ブログ', '雑記', '日記', 'ライフスタイル', 'アニメ', '技術'],
  authors: [{ name: 'ブログ著者' }],
  creator: 'ブログ著者',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yourdomain.com',
    title: 'サトログ',
    description: '日々の出来事や思考を綴る雑記ブログです。',
    siteName: 'サトログ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サトログ',
    description: '日々の出来事や思考を綴る雑記ブログです。',
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <AdSense />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 