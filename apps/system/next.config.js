
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared", "data"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
