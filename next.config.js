/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        protocol: 'https',
        domains: ['img.shields.io']
    },
    paths: {
        "@/*": ["src/*"]
      },
    // 环境变量
    env: {
        APP_ENV: process.env.APP_ENV
    }
}

module.exports = nextConfig
