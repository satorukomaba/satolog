import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="text-center">
          <Link href="/" className="text-3xl font-light text-gray-900 hover:text-gray-600 transition-colors tracking-wide">
            サトログ
          </Link>
        </div>
        
        <nav className="mt-8 flex justify-center space-x-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
            ホーム
          </Link>
          <Link href="/posts" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
            記事一覧
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 