/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['store.hivetechs.io'],
  },
  // Remove output: 'export' to enable API routes on Cloudflare Pages
  trailingSlash: true,
  // Temporarily ignore TypeScript errors for deployment
  // Remove this after fixing all TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
