
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared", "data"],
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
