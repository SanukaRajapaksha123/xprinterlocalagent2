/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable network access
  experimental: {
    serverComponentsExternalPackages: []
  }
};

module.exports = nextConfig;
