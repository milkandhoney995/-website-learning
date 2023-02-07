# Next.js 13の勉強

## 2023/02/07： [Next.js 13を試した](https://dev.classmethod.jp/articles/next-js-13-sample/)
----
### **手順**

1. プロジェクト作成
```
$ npx create-next-app nextjs13-sample --ts --use-npm
```
2. app/ Directory (beta) をnext.config.jsで有効化
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig
```
3. pagesフォルダの削除
  - URL の重複を避けるためpages以下は削除
```
$ rm -rf pages
```

### **フォルダ構成**
```
app：ルートディレクトリ
├── globals.css
├── head.tsx：<head>内
├── layout.tsx：_app.tsxおよび_document.tsxはlayout.tsxに統一された
├── loading.tsx
├── page.module.css
└── page.tsx：index ファイル
```
