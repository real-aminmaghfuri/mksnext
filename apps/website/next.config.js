/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared"],
  reactStrictMode: true,
};

module.exports = nextConfig;