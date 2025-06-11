import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import AdUnit from '@/components/AdUnit'
import SearchBar from '@/components/SearchBar'

// サンプル記事データ
const samplePosts = [
  {
    id: '6',
    title: '【2025年最新版】iOS 26 対応機種 iPad 完全ガイド',
    excerpt: 'WWDC 25で発表されたiPadOS 26対応機種を完全網羅！Apple Intelligence対応モデル、新機能、買い替えガイドまで詳しく解説します。',
    date: new Date('2025-06-10'),
    slug: 'ios-26-ipad-compatibility-guide',
    category: '技術',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=400&fit=crop&auto=format&q=80'
  },
  {
    id: '5',
    title: '「林原めぐみブログ炎上」徹底解説｜発端・修正・余波を時系列で追う',
    excerpt: '声優界のレジェンド林原めぐみさんのブログ投稿が炎上した一連の騒動を詳しく解説。韓国への言及、記事修正、SNSでの反応まで時系列で徹底分析。',
    date: new Date('2025-06-09'),
    slug: 'hayashihara-megumi-blog-controversy',
    category: 'エンタメ',
    image: '/00325-2107443118.png'
  },
  {
    id: '4',
    title: '【スト6シーズン3まとめ】大型バランス調整とYear 3キャラ解説',
    excerpt: 'ストリートファイター6のSeason 3大型アップデートを詳しく解説。システム変更からキャラ調整、Year 3新キャラまで徹底まとめ。',
    date: new Date('2025-06-08'),
    slug: 'sf6-season3-summary',
    category: 'ゲーム',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&auto=format&q=80'
  },
  {
    id: '3',
    title: '今期視聴アニメ "ゆるっと感想まとめ"',
    excerpt: 'ガンダム初心者でも気軽に読めるネタバレ控えめのファンコラム。ジークアクス、片田舎のおっさん、にんころの3作品を紹介します。',
    date: new Date('2025-06-05'),
    slug: 'anime-review-2024',
    category: 'アニメ',
    image: '/anime-article-image.png'
  }
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      {/* ヒーロー画像 */}
      <section className="mb-20">
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/hero-image.png"
            alt="ミニマルなワークスペース - カメラ、コーヒー、キーボードのある美しいデスク"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-2 md:mb-4">
                サトログ
              </h1>
              <p className="text-sm md:text-base lg:text-lg font-light tracking-wide opacity-90 max-w-md mx-auto">
                日々の出来事、思考、学んだことを綴るブログ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 検索バー */}
      <section className="text-center py-8 border-b border-gray-100 mb-16">
        <SearchBar />
      </section>

      {/* ABOUT ME セクション */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 relative">
            <Image
              src="/avatar.png"
              alt="サトログ管理人のアバター"
              fill
              className="object-cover rounded-full border-2 border-gray-100"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-light text-gray-900 tracking-wide mb-3">ABOUT ME</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
              日々の出来事、思考、学んだことを自由に綴るブログです。<br />
              技術、アニメ、ライフスタイルなど様々なトピックについて書いています。
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Twitter</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">YouTube</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* 新着情報 */}
      <section className="mb-20">
        <h2 className="text-sm font-light text-gray-900 tracking-wider mb-8 border-b border-gray-100 pb-4">新着情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative w-full h-48 bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <time>{format(post.date, 'yyyy/MM/dd')}</time>
                </div>
                
                <h3 className="text-sm font-normal text-gray-900 leading-relaxed group-hover:text-gray-600 transition-colors">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/posts"
            className="text-xs text-gray-600 hover:text-gray-900 tracking-wider border-b border-gray-300 hover:border-gray-600 transition-colors"
          >
            ほかの記事
          </Link>
        </div>
      </section>

      {/* AdSense広告 */}
      <div className="my-16">
        <AdUnit slot="1234567890" />
      </div>

      {/* 人気の記事 */}
      <section className="mb-20">
        <h2 className="text-sm font-light text-gray-900 tracking-wider mb-8 border-b border-gray-100 pb-4">人気の記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <article key={post.id + '-popular'} className="group">
              <div className="relative w-full h-48 bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <time>{format(post.date, 'yyyy/MM/dd')}</time>
                </div>
                
                <h3 className="text-sm font-normal text-gray-900 leading-relaxed group-hover:text-gray-600 transition-colors">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/posts"
            className="text-xs text-gray-600 hover:text-gray-900 tracking-wider border-b border-gray-300 hover:border-gray-600 transition-colors"
          >
            ほかの記事
          </Link>
        </div>
      </section>

      {/* AdSense広告 */}
      <div className="my-16">
        <AdUnit slot="0987654321" />
      </div>
    </div>
  )
} 