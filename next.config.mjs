// GitHub Pages のプロジェクトサイト（/リポジトリ名/ 配下）では BASE_PATH を渡す。
// カスタムドメイン運用時は空文字になる。
const basePath = process.env.BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig
