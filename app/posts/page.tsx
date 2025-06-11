import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export const metadata: Metadata = {
  title: '記事一覧',
  description: 'サトログの全記事一覧です。技術、アニメ、ライフスタイルなど様々なトピックについて書いています。',
}

// サンプル記事データ（後でデータベースやファイルシステムから取得）
const allPosts = [
  {
    id: '0b',
    title: 'このブログを作った方法について',
    excerpt: 'プログラミング初心者だった私が、このブログ「サトログ」をどのように作ったかを、できるだけわかりやすく説明してみます。Cursor、Next.js、TypeScript、Vercelを使った開発体験。',
    date: new Date('2025-06-02'),
    slug: 'how-i-built-this-blog',
    category: '技術',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&auto=format&q=80',
    tags: ['ブログ', 'Next.js', 'TypeScript', 'Vercel', '開発']
  },
  {
    id: '0',
    title: '初回投稿：ブログを始めました',
    excerpt: 'この度、雑記ブログを始めることにしました。なぜこのブログを立ち上げたのか、今後どのような内容を発信していきたいかについて書いてみたいと思います。',
    date: new Date('2025-06-01'),
    slug: 'blog-launch-hello-world',
    category: 'お知らせ',
    image: '/hero-image.png',
    tags: ['ブログ', '開始', 'Next.js', '技術']
  },

  {
    id: '3',
    title: '【2025年最新版】iOS 26 対応機種 iPad 完全ガイド',
    excerpt: 'WWDC 25で発表されたiPadOS 26対応機種を完全網羅！Apple Intelligence対応モデル、新機能、買い替えガイドまで詳しく解説します。',
    date: new Date('2025-06-10'),
    slug: 'ios-26-ipad-compatibility-guide',
    category: '技術',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=400&fit=crop&auto=format&q=80',
    tags: ['iOS', 'iPad', 'Apple', '技術']
  },
  {
    id: '4',
    title: '「林原めぐみブログ炎上」徹底解説｜発端・修正・余波を時系列で追う',
    excerpt: '声優界のレジェンド林原めぐみさんのブログ投稿が炎上した一連の騒動を詳しく解説。韓国への言及、記事修正、SNSでの反応まで時系列で徹底分析。',
    date: new Date('2025-06-09'),
    slug: 'hayashihara-megumi-blog-controversy',
    category: 'エンタメ',
    image: '/00325-2107443118.png',
    tags: ['声優', 'ニュース', '炎上', 'エンタメ']
  },
  {
    id: '4b',
    title: '【スト6シーズン3まとめ】大型バランス調整とYear 3キャラ解説',
    excerpt: '――僕は豪鬼を使い続けるか？ それともリュウで"波動"デビューするか？ Season 3の大型アップデート内容と個人的な使用キャラ検討記録。',
    date: new Date('2025-06-08'),
    slug: 'sf6-season3-summary',
    category: 'ゲーム',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&auto=format&q=80',
    tags: ['ストリートファイター', 'ゲーム', '格闘ゲーム']
  },
  {
    id: '5',
    title: '今期視聴アニメ "ゆるっと感想まとめ"',
    excerpt: '『機動戦士ガンダム ジークアクス』『片田舎のおっさん、剣聖になる』『忍者と殺し屋のふたりぐらし（にんころ）』の3作品をライトに紹介。ガンダム初心者向けのネタバレ控えめファンコラム。',
    date: new Date('2025-06-05'),
    slug: 'anime-review-2024',
    category: 'アニメ',
    image: '/anime-article-image.png',
    tags: ['アニメ', 'レビュー', 'ガンダム']
  }
].sort((a, b) => b.date.getTime() - a.date.getTime())

// カテゴリ別の色設定
const categoryColors: { [key: string]: string } = {
  '技術': 'bg-green-100 text-green-800',
  'エンタメ': 'bg-pink-100 text-pink-800',
  'アニメ': 'bg-orange-100 text-orange-800',
  'ゲーム': 'bg-red-100 text-red-800',
  'お知らせ': 'bg-indigo-100 text-indigo-800',
  'default': 'bg-gray-100 text-gray-800'
}

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ページヘッダー */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">記事一覧</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          技術、アニメ、映画、ライフスタイルなど様々なトピックについて書いています。
          気になる記事があれば、ぜひお読みください。
        </p>
      </header>

      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post) => (
          <article key={post.id} className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <Link href={`/posts/${post.slug}`}>
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${categoryColors[post.category] || categoryColors.default}`}>
                    {post.category}
                  </span>
                  <time className="text-xs text-gray-500">
                    {format(post.date, 'yyyy/MM/dd', { locale: ja })}
                  </time>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* フッター */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          全 {allPosts.length} 件の記事があります
        </p>
        <Link 
          href="/"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium border-b border-blue-300 hover:border-blue-600 transition-colors"
        >
          ← ホームに戻る
        </Link>
      </div>
    </div>
  )
} 