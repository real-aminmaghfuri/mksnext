/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared", "data"],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;