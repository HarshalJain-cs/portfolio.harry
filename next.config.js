/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  // Enable static export for GitHub Pages compatibility
  output: 'export',
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig
