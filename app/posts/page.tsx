import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import AdUnit from '@/components/AdUnit'

// サンプル記事データ
const allPosts = [
  {
    id: '1',
    title: '初回投稿：ブログを始めました',
    excerpt: 'サトログを始めた理由と今後の展望について詳しく書きました。ブログを通じて学びをシェアし、読者の皆様との交流を楽しみにしています。',
    date: new Date('2024-01-15'),
    slug: 'first-post',
    category: '日記',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop&auto=format&q=80'
  },
  {
    id: '2',
    title: 'Web開発について思うこと',
    excerpt: '最近のWeb開発トレンドについて、個人的な見解をまとめました。Next.jsやReactの話題を中心に...',
    date: new Date('2024-01-10'),
    slug: 'web-development-thoughts',
    category: '技術',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&auto=format&q=80'
  },
  {
    id: '3',
    title: '今期視聴アニメ "ゆるっと感想まとめ"',
    excerpt: 'ガンダム初心者でも気軽に読めるネタバレ控えめのファンコラム。ジークアクス、片田舎のおっさん、にんころの3作品を紹介します。',
    date: new Date('2024-01-05'),
    slug: 'anime-review-2024',
    category: 'アニメ',
    image: '/anime-article-image.png'
  }
]

export const metadata = {
  title: '記事一覧',
  description: 'ブログの記事一覧ページです。',
}

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-sm font-light text-gray-900 tracking-wider mb-12 text-center border-b border-gray-100 pb-8">記事一覧</h1>
      
      {/* AdSense広告 */}
      <div className="mb-16">
        <AdUnit slot="3333333333" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {allPosts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative w-full h-64 bg-gray-100 mb-6 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500 tracking-wider">
                <span>{post.category}</span>
                <span>•</span>
                <time>{format(post.date, 'yyyy/MM/dd')}</time>
              </div>
              
              <h2 className="text-base font-normal text-gray-900 leading-relaxed group-hover:text-gray-600 transition-colors tracking-wide">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-xs text-gray-600 leading-relaxed tracking-wide">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* AdSense広告 */}
      <div className="mt-20">
        <AdUnit slot="4444444444" />
      </div>
    </div>
  )
} 