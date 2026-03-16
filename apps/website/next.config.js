/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "shared"],
  async rewrites() {
    return [
      {
        source: '/cms/:path*',
        destination: 'http://localhost:3001/cms/:path*',
      },
      {
        source: '/system/:path*',
        destination: 'http://localhost:3002/system/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
