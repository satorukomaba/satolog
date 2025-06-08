import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import ShareButtons from '@/components/ShareButtons'
import AdUnit from '@/components/AdUnit'

export const metadata = {
  title: '今期視聴アニメ "ゆるっと感想まとめ"『機動戦士ガンダム ジークアクス』／『片田舎のおっさん、剣聖になる』／『忍者と殺し屋のふたりぐらし（にんころ）』',
  description: 'ガンダム初心者でも気軽に読めるネタバレ控えめのファンコラム。ジークアクス、片田舎のおっさん、にんころの3作品の魅力をライトにまとめます。',
  keywords: 'アニメ, ガンダム, ジークアクス, 片田舎のおっさん, にんころ, 感想, レビュー',
  openGraph: {
    title: '今期視聴アニメ "ゆるっと感想まとめ"',
    description: 'ガンダム初心者でも気軽に読めるネタバレ控えめのファンコラム。',
    type: 'article',
    publishedTime: '2025-06-05',
    authors: ['サトログ'],
  },
}

export default function AnimeReviewPost() {
  const postDate = new Date('2025-06-05')
  
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* ヘッダー */}
      <header className="mb-12 text-center">
        <div className="mb-6">
          <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-wider">アニメ</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed tracking-wide mb-6">
          今期視聴アニメ "ゆるっと感想まとめ"<br />
          <span className="text-lg md:text-xl text-gray-600">
            『機動戦士ガンダム ジークアクス』／『片田舎のおっさん、剣聖になる』／『忍者と殺し屋のふたりぐらし（にんころ）』
          </span>
        </h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-8">
          <time>{format(postDate, 'yyyy年MM月dd日', { locale: ja })}</time>
        </div>
      </header>

      {/* 記事画像 */}
      <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/anime-article-image.png"
          alt="今期視聴アニメ感想まとめ - 赤髪の女子高生キャラクター"
          fill
          className="object-cover"
        />
      </div>

      {/* 記事本文 */}
      <article className="prose prose-lg max-w-none">
        <div className="text-base text-gray-700 leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">はじめに</h2>
            <p>
              今期はロボット、剣と魔法、忍びコメディとジャンルがバラけていて毎週が本当に楽しい！　この記事では <strong>ガンダム初心者でも気軽に読めるネタバレ控えめのファンコラム</strong> として、私が今まさに追いかけている 3 作品の魅力を "ライトに" まとめます。視聴のきっかけ探しや布教用のネタにどうぞ。
            </p>
          </section>

          {/* AdSense広告 */}
          <div className="my-12">
            <AdUnit slot="1111111111" />
          </div>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">1. 機動戦士ガンダム ジークアクス</h2>
            <p className="text-sm text-gray-600 mb-4">
              <strong>放送・配信：</strong>2025 年 4 月 8 日より毎週火曜 24:29〜 日テレ系30局 ／ 水曜未明から
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3">あらすじ (さわり)</h3>
            <p className="mb-4">
              女子高生アマテ・ユズリハは "ニャアン" との出会いを機に、闇の MS 決闘競技《クランバトル》へ参戦。謎の赤いガンダムと少年シュウジの出現が、彼女と世界を大きく揺さぶっていく――
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">推しポイント</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>サンライズ×カラー</strong> のダブル体制。セルルック×3DCG の混在が旧作ファンにも刺さる。</li>
              <li>モビルスーツ戦は <strong>鉄血</strong> ばりの重量感＋<strong>水星</strong> 由来のスピード感。第 6 話「キシリア暗殺計画」で一気に温度が上がります。</li>
              <li>主題歌は NOMELON NOLEMON の「HALO」。Pop なのにシリアスな歌詞がクセになる。</li>
            </ul>
            
            <p className="bg-blue-50 p-4 rounded-lg text-sm">
              <strong>ひと言感想：</strong>ビルド系の明るさと U.C. 系の政治劇が絶妙にブレンド。ガンダム未履修でも "主人公＝高校生女子" で入りやすい！
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">2. 片田舎のおっさん、剣聖になる</h2>
            <p className="text-sm text-gray-600 mb-4">
              <strong>放送：</strong>2025 年 4 月 5 日よりテレビ朝日系 "IMAnimation" 枠ほかで放送中
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3">イントロダクション</h3>
            <p className="mb-4">
              田舎で道場を営む中年剣士ベリル・ガーデナント。元弟子の推挙で王国の特別指南役に就き、都会で "遅咲き無双" を始めるハートウォーミング剣劇
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">推しポイント</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>主人公が "圧倒的実力者だけど社会的には無名" というギャップ。『無職転生』を逆年齢にしたような爽快感。</li>
              <li>ベリルと元弟子たちの <strong>世代ギャップコメディ</strong> が毎回ほっこり。</li>
              <li>作画は SILVER LINK. 系列の新スタジオ。10 話の乱戦で動きまくる剣戟は必見！</li>
            </ul>
            
            <p className="bg-green-50 p-4 rounded-lg text-sm">
              <strong>ひと言感想：</strong>若者主人公が多い異世界系の中、 "おっさん" だからこその人生観が沁みる。疲れた週末に刺さる癒やし系バトル。
            </p>
          </section>

          {/* AdSense広告 */}
          <div className="my-12">
            <AdUnit slot="2222222222" />
          </div>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">3. 忍者と殺し屋のふたりぐらし（にんころ）</h2>
            <p className="text-sm text-gray-600 mb-4">
              <strong>放送：</strong>2025 年 4 月クール／TOKYO MX ほかで放送中（BS・配信も多数）
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3">イントロダクション</h3>
            <p className="mb-4">
              くノ一・さとこが街で行き倒れていたところ、通りすがりの女子高生・このはに救われる。しかしこのはの正体はまさかの殺し屋！　こうして始まる "忍者×殺し屋" 危険すぎる同居生活コメディ。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-3">推しポイント</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>ギャグと<strong>〝ガチ暗殺アクション〟</strong>のテンポが絶妙で "シリアス過ぎない緊張感"。</li>
              <li>毎回 1 枚は用意される <strong>変顔＆作画遊び</strong> で Twitter の切り抜きがバズりがち。</li>
              <li>エンディング曲は ClariS が手がけるレトロポップ。耳に残りすぎてループ再生確定。</li>
            </ul>
            
            <p className="bg-pink-50 p-4 rounded-lg text-sm">
              <strong>ひと言感想：</strong>10 分枠感覚で見られる軽さ＆百合み強めの掛け合い。深夜の "口角上げアニメ" 枠にどうぞ。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">まとめ</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <p><strong>重厚なロボアクション</strong> を味わいたい → ジークアクス</p>
              <p><strong>中年主人公×剣と魔法×人情</strong> に浸りたい → 片田舎のおっさん</p>
              <p><strong>さらっと笑って寝落ち</strong> したい → にんころ</p>
            </div>
            
            <p className="mt-6">
              どれも <strong>1 話視聴無料の配信先</strong>があるので、気になったら公式サイトからチェックしてみてください。来週も感想を追記予定。コメントで "あなたの推しポイント" も教えてもらえると嬉しいです！
            </p>
          </section>

        </div>
      </article>

      {/* シェアボタン */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <ShareButtons 
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/posts/anime-review-2024`}
          title="今期視聴アニメ ゆるっと感想まとめ"
        />
      </div>

      {/* AdSense広告 */}
      <div className="mt-16">
        <AdUnit slot="3333333333" />
      </div>
    </div>
  )
} 