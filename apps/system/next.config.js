/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared", "data"],
  reactStrictMode: true,
};

module.exports = nextConfig;