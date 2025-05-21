/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['store.hivetechs.io'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Static site generation for Cloudflare Pages
  // Disable server-side features that aren't compatible with static export
  trailingSlash: true,
}

module.exports = nextConfig
