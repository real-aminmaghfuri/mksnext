/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "shared"],
  async rewrites() {
    const isProd = process.env.NODE_ENV === 'production';
    return [
      {
        source: '/cms/:path*',
        destination: isProd 
          ? 'https://mks-cms.vercel.app/cms/:path*'
          : 'http://localhost:3001/cms/:path*',
      },
      {
        source: '/system/:path*',
        destination: isProd
          ? 'https://mksapp.vercel.app/system/:path*'
          : 'http://localhost:3002/system/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
