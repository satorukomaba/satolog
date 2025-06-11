@echo off
echo 🔍 ブログシステムの状況確認
echo.

echo 📁 投稿ディレクトリの確認:
if exist "app\posts\" (
    echo    ✅ app\posts\ が存在します
    dir /B app\posts\
) else (
    echo    ❌ app\posts\ が見つかりません
)

echo.
echo 📜 スクリプトファイルの確認:
if exist "scripts\create-post.js" (echo    ✅ create-post.js) else (echo    ❌ create-post.js)
if exist "scripts\list-posts.js" (echo    ✅ list-posts.js) else (echo    ❌ list-posts.js)
if exist "scripts\templates.js" (echo    ✅ templates.js) else (echo    ❌ templates.js)

echo.
echo 🎯 次のステップ:
echo 1. 開発サーバー起動: npm run dev
echo 2. ブラウザ確認: http://localhost:3000
echo 3. 新規投稿作成: new-post.bat
echo 4. 投稿一覧確認: list-posts.bat
echo.
pause 