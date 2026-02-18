
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared", "data"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_KEY: process.env.GEMINI_API_KEY_1
  }
};

module.exports = nextConfig;
