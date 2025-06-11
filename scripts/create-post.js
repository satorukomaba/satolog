#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { templates } = require('./templates');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(text) {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function generateTSXContent(frontmatter, templateContent) {
  // Markdownコンテンツを基本的なHTMLに変換
  const htmlContent = templateContent
    .replace(/^# (.+)$/gm, '<h1 className="text-3xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-3">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 className="text-xl font-semibold mb-3 mt-6 text-gray-700">$1</h3>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">$1</ul>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>{`$2`}</code></pre>')
    .replace(/^(?!<[\/]?[hlup]|<pre|<li)(.+)$/gm, '<p className="mb-4 text-gray-700 leading-relaxed">$1</p>')
    .split('\n')
    .filter(line => line.trim())
    .join('\n          ');

  const tags = frontmatter.tags || [];
  const tagColors = ['blue', 'green', 'purple', 'yellow', 'red', 'indigo'];
  
  return `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "${frontmatter.title}",
  description: "${frontmatter.description || ''}",
}

export default function Post() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-3">
            ${frontmatter.title}
          </h1>
          ${tags.length > 0 ? `<div className="flex flex-wrap gap-2 mb-4">
            ${tags.map((tag, index) => {
              const color = tagColors[index % tagColors.length];
              return `<span className="bg-${color}-100 text-${color}-800 px-2 py-1 rounded text-sm">${tag}</span>`;
            }).join('\n            ')}
          </div>` : ''}
          <p className="text-gray-600 text-sm">${frontmatter.date}</p>
        </div>

        <div className="space-y-6">
          ${htmlContent}
        </div>
      </article>
    </div>
  )
}`;
}

async function createPost() {
  try {
    console.log('🚀 新しいブログ投稿を作成します\n');

    const title = await question('タイトルを入力してください: ');
    const description = await question('説明を入力してください（省略可）: ');
    const tags = await question('タグを入力してください（カンマ区切り、省略可）: ');
    
    // テンプレート選択
    console.log('\n📝 テンプレートを選択してください:');
    console.log('1. デフォルト (default)');
    console.log('2. レビュー (review)');
    console.log('3. チュートリアル (tutorial)');
    console.log('4. お知らせ (announcement)');
    
    const templateChoice = await question('\nテンプレート番号を入力してください (1-4, デフォルト: 1): ') || '1';
    const templateMap = {
      '1': 'default',
      '2': 'review', 
      '3': 'tutorial',
      '4': 'announcement'
    };
    const selectedTemplate = templateMap[templateChoice] || 'default';

    const slug = slugify(title);
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    const postDir = path.join(process.cwd(), 'app', 'posts', slug);

    // ディレクトリが既に存在するかチェック
    if (fs.existsSync(postDir)) {
      console.log(`❌ エラー: "${slug}" は既に存在します`);
      process.exit(1);
    }

    // ディレクトリを作成
    fs.mkdirSync(postDir, { recursive: true });

    // MDXファイルの内容を生成
    const frontmatter = {
      title,
      date: formattedDate,
      ...(description && { description }),
      ...(tags && { tags: tags.split(',').map(tag => tag.trim()).filter(Boolean) })
    };

    // 選択されたテンプレートを取得し、タイトルを置換
    const templateContent = templates[selectedTemplate].replace('{title}', title);
    
    const mdxContent = `---
${Object.entries(frontmatter)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}:\n${value.map(v => `  - ${v}`).join('\n')}`;
    }
    return `${key}: "${value}"`;
  })
  .join('\n')}
---

${templateContent}`;

    // TSXファイルとしてReactコンポーネントを作成
    const tsxContent = generateTSXContent(frontmatter, templateContent);
    const tsxFilePath = path.join(postDir, 'page.tsx');
    fs.writeFileSync(tsxFilePath, tsxContent);

    console.log(`\n✅ 投稿が作成されました!`);
    console.log(`📁 ディレクトリ: ${postDir}`);
    console.log(`📄 ファイル: ${tsxFilePath}`);
    console.log(`🔗 URL: /posts/${slug}`);
    console.log(`\n次のコマンドでエディタを開けます:`);
    console.log(`code "${tsxFilePath}"`);

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
  } finally {
    rl.close();
  }
}

createPost(); 