#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listPosts() {
  const postsDir = path.join(process.cwd(), 'app', 'posts');
  
  if (!fs.existsSync(postsDir)) {
    console.log('❌ 投稿ディレクトリが見つかりません');
    return;
  }

  const posts = fs.readdirSync(postsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== '[slug]'); // 動的ルートを除外

  if (posts.length === 0) {
    console.log('📝 投稿がまだありません。新しい投稿を作成してみましょう！');
    console.log('コマンド: npm run new-post');
    return;
  }

  console.log(`📚 投稿一覧 (${posts.length}件)\n`);
  
  posts.forEach((post, index) => {
    const postPath = path.join(postsDir, post);
    const mdxPath = path.join(postPath, 'page.mdx');
    const tsxPath = path.join(postPath, 'page.tsx');
    
    let title = post;
    let date = '';
    
    // TSXファイルまたはMDXファイルからメタデータを読み取る
    if (fs.existsSync(tsxPath)) {
      const content = fs.readFileSync(tsxPath, 'utf-8');
      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      const dateMatch = content.match(/(\d{4}-\d{2}-\d{2})/);
      
      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
    } else if (fs.existsSync(mdxPath)) {
      const content = fs.readFileSync(mdxPath, 'utf-8');
      const frontmatterMatch = content.match(/^---\n(.*?)\n---/s);
      
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
        const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
        
        if (titleMatch) title = titleMatch[1];
        if (dateMatch) date = dateMatch[1];
      }
    }
    
    console.log(`${index + 1}. ${title}`);
    console.log(`   📁 ${post}`);
    if (date) console.log(`   📅 ${date}`);
    console.log(`   🔗 /posts/${post}`);
    console.log();
  });
  
  console.log('💡 投稿を編集するには:');
  console.log('   code app/posts/[投稿名]/page.tsx');
  console.log('   または');
  console.log('   code app/posts/[投稿名]/page.mdx');
}

listPosts(); 