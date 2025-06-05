import React from 'react'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import ShareButtons from '@/components/ShareButtons'
import AdUnit from '@/components/AdUnit'

// サンプル記事データ
const posts = {
  'first-post': {
    id: '1',
    title: '初回投稿：ブログを始めました',
    content: `# 初回投稿：ブログを始めました

こんにちは！「サトログ」へようこそ。

この度、雑記ブログを始めることにしました。最初の投稿ということで、なぜこのブログを立ち上げたのか、そして今後どのような内容を発信していきたいかについて書いてみたいと思います。

## なぜブログを始めたのか

### アウトプットの重要性を実感

普段の生活の中で、本を読んだり、新しい技術を学んだり、面白い体験をしたりすることがありますが、それらの学びや体験を自分の中だけに留めておくのはもったいないと感じるようになりました。

アウトプットすることで、自分の理解が深まるだけでなく、同じような興味を持つ人との出会いも期待できるのではないかと思います。

### 記録として残したい

人間の記憶は曖昧で、時間が経つと大切な学びや体験も忘れてしまいがちです。ブログという形で記録を残すことで、将来の自分にとっても価値のあるアーカイブになるのではないかと考えています。

### 文章力を向上させたい

普段の仕事では技術的な文書を書くことが多いのですが、もう少し自由な文章を書く機会を作りたいと思っていました。ブログを通じて、より読みやすい文章を書けるようになりたいです。

## このブログで扱う予定のトピック

### 🎬 アニメ・エンタメ
アニメが好きなので、観た作品の感想やレビューを書いていきたいと思います。新作から名作まで、幅広いジャンルのアニメについて語っていく予定です。おすすめの作品があれば紹介もしていきます。

### 💻 技術・プログラミング
仕事でWeb開発に携わっているので、学んだ技術や便利なツール、プログラミングに関する気づきなどを記事にしていく予定です。初心者の方にも分かりやすく書くことを心がけたいと思います。

### 🎯 ライフスタイル・生産性
効率的な作業環境の構築、時間管理、健康管理など、日々の生活を改善するために試行錯誤していることを共有していきます。

### 📷 趣味・興味のあること
写真撮影、ガジェット、旅行など、個人的な趣味についても時々書いていきたいと思います。

### 🤔 雑記・思考の整理
その名の通り「雑記」ブログなので、日々感じたことや考えたことを自由に書いていく記事もあると思います。

## ブログのデザインについて

このブログは、Next.jsを使って自作しました。ミニマルで読みやすいデザインを心がけ、コンテンツに集中できるような仕上がりを目指しています。

また、レスポンシブデザインに対応しているので、スマートフォンからも快適に読んでいただけるはずです。

## 更新頻度について

完璧主義になりすぎず、気負わずに続けていきたいと思います。週に1〜2回程度の更新を目標にしていますが、書きたいことがあるときはもう少し頻繁に更新するかもしれません。

継続することが一番大切だと思っているので、無理をせず、楽しみながら続けていきたいと思います。

## 最後に

長くなりましたが、これが「サトログ」の第一歩です。

このブログを通じて、読んでくださる方との新しい出会いや、有意義な情報交換ができれば嬉しいです。また、自分自身の成長にも繋がるような場にしていきたいと思います。

何かご意見やご感想がありましたら、SNSなどでお気軽にお声がけください。

これからよろしくお願いします！`,
    date: new Date('2024-01-15'),
    slug: 'first-post',
    category: '日記',
    excerpt: 'サトログを始めた理由と今後の展望について詳しく書きました。ブログを通じて学びをシェアし、読者の皆様との交流を楽しみにしています。'
  },
  'web-development-thoughts': {
    id: '2',
    title: 'Web開発について思うこと',
    content: `# Web開発について思うこと

最近のWeb開発のトレンドについて、個人的な見解をまとめてみました。

## React/Next.jsの台頭

React.jsとNext.jsの組み合わせは、現在のWebフロントエンド開発においてデファクトスタンダードになりつつあります。

### メリット
- コンポーネントベースの開発
- SSG/SSRによるパフォーマンス向上
- 豊富なエコシステム

### 注意点
- 学習コストの高さ
- 複雑性の増大
- 適切な使い分けが重要

## 今後の展望

Web開発の世界は日々進化しています。新しい技術に目を向けつつ、基本的な原理原則を大切にしていきたいと思います。`,
    date: new Date('2024-01-10'),
    slug: 'web-development-thoughts',
    category: '技術',
    excerpt: '最近のWeb開発トレンドについて、個人的な見解をまとめました。'
  },
  'book-review-2024': {
    id: '3',
    title: '読書記録：今年読んだ本たち',
    content: `# 読書記録：今年読んだ本たち

2024年に読んだ本の中で、特に印象に残った作品をご紹介します。

## ビジネス書

### 「エフェクチュエーション」
起業家の思考法について書かれた本。従来の予測型アプローチとは異なる、創造型のアプローチについて学べました。

### 「チームトポロジー」
組織とチームの構造について考察した本。ソフトウェア開発における組織設計の重要性を再認識しました。

## 小説

### 「三体」シリーズ
中国のSF小説。スケールの大きさと科学的な考察に圧倒されました。

## まとめ

読書を通じて新しい視点や知識を得ることができた一年でした。来年も継続して読書を続けていきたいと思います。`,
    date: new Date('2024-01-05'),
    slug: 'book-review-2024',
    category: '読書',
    excerpt: '2024年に読んだ本の中で特に印象に残ったものをご紹介します。'
  }
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props) {
  const post = posts[params.slug as keyof typeof posts]
  
  if (!post) {
    return {
      title: 'Not Found'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date.toISOString(),
    },
  }
}

export default function PostPage({ params }: Props) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  const currentUrl = `https://yourdomain.com/posts/${post.slug}`

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <article>
        {/* ヘッダー */}
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-xs text-gray-500 tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-gray-300">•</span>
            <time className="text-xs text-gray-500 tracking-wider">
              {format(post.date, 'yyyy/MM/dd')}
            </time>
          </div>
          
          <h1 className="text-2xl font-light text-gray-900 leading-relaxed tracking-wide">
            {post.title}
          </h1>
        </header>

        {/* AdSense広告 */}
        <AdUnit slot="1111111111" />

        {/* 記事コンテンツ */}
        <div className="prose prose-lg max-w-none">
          <div className="text-sm text-gray-700 leading-loose tracking-wide">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-xl font-light text-gray-900 mb-8 mt-12 tracking-wide">{line.substring(2)}</h1>
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="text-lg font-light text-gray-900 mb-6 mt-10 tracking-wide">{line.substring(3)}</h2>
              } else if (line.startsWith('### ')) {
                return <h3 key={index} className="text-base font-light text-gray-900 mb-4 mt-8 tracking-wide">{line.substring(4)}</h3>
              } else if (line.startsWith('- ')) {
                return <li key={index} className="text-sm text-gray-700 mb-2 ml-4">{line.substring(2)}</li>
              } else if (line.match(/^\d+\./)) {
                return <li key={index} className="text-sm text-gray-700 mb-2 ml-4">{line.substring(line.indexOf('.') + 2)}</li>
              } else if (line.trim() === '') {
                return <div key={index} className="mb-6"></div>
              } else {
                return <p key={index} className="text-sm text-gray-700 leading-loose mb-6">{line}</p>
              }
            })}
          </div>
        </div>

        {/* AdSense広告 */}
        <AdUnit slot="2222222222" />

        {/* SNSシェアボタン */}
        <ShareButtons 
          url={currentUrl}
          title={post.title}
          description={post.excerpt}
        />
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
} 