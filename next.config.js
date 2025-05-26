/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['store.hivetechs.io'],
  },
  // Remove output: 'export' to enable API routes on Cloudflare Pages
  trailingSlash: true,
}

module.exports = nextConfig
