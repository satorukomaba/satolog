# サトログ

Next.js で作成したアドセンス対応の雑記ブログです。

## 特徴

- ✨ **ミニマルなデザイン**: 読みやすさを重視したクリーンなUI
- 📱 **レスポンシブ対応**: モバイルからデスクトップまで最適化
- 🚀 **高速表示**: Next.js のSSG/SSRによる高速なページロード
- 💰 **AdSense対応**: Google AdSense の広告配置を最適化
- 📊 **SEO最適化**: メタタグ、構造化データ、sitemap対応
- 📱 **SNSシェア**: Twitter、Facebook、LINEでのシェア機能
- 🎨 **Tailwind CSS**: カスタマイズしやすいスタイリング

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **コンテンツ**: MDX
- **日付操作**: date-fns
- **SEO**: next-seo

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

\`env.example\` を参考に \`.env.local\` ファイルを作成してください。

```bash
cp env.example .env.local
```

重要な環境変数：
- \`NEXT_PUBLIC_GOOGLE_ADSENSE_ID\`: Google AdSense のパブリッシャーID
- \`NEXT_PUBLIC_SITE_URL\`: サイトのURL
- \`NEXT_PUBLIC_SITE_NAME\`: サイト名

### 3. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でアクセスできます。

## AdSense設定

1. Google AdSense のアカウントを取得
2. \`.env.local\` にパブリッシャーIDを設定
3. \`components/AdSense.tsx\` と \`components/AdUnit.tsx\` の設定を更新
4. 広告審査を通過後、広告ユニットのスロットIDを設定

## カスタマイズ

### デザインの変更

- \`tailwind.config.js\`: カラーテーマやタイポグラフィの調整
- \`app/globals.css\`: グローバルスタイルの変更

### 記事の追加

1. \`app/posts/[slug]/page.tsx\` の \`posts\` オブジェクトに記事データを追加
2. または将来的にCMSやMarkdownファイルベースに移行可能

### SEO設定

- \`app/layout.tsx\`: サイト全体のメタデータ
- 各ページのメタデータ関数でページ固有のSEO設定

## デプロイ

### Vercel（推奨）

```bash
npm install -g vercel
vercel
```

### その他のプラットフォーム

```bash
npm run build
npm start
```

## ライセンス

MIT License

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google AdSense](https://www.google.com/adsense/) 