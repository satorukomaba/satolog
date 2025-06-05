import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center space-y-8">
          <div className="text-2xl font-light text-gray-900 tracking-wide">
            サトログ
          </div>
          
          <div className="flex justify-center space-x-8 text-xs text-gray-500">
            <a href="/about" className="hover:text-gray-700 transition-colors">
              サトログについて
            </a>
            <a href="/privacy" className="hover:text-gray-700 transition-colors">
              プライバシーポリシー
            </a>
            <a href="/company" className="hover:text-gray-700 transition-colors">
              会社概要
            </a>
          </div>
          
          <div className="text-xs text-gray-400">
            © 2024 サトログ
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 