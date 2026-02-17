
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "shared"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    // Mapping Vercel Variable (GEMINI_API_KEY_1) to App Standard (API_KEY)
    API_KEY: process.env.GEMINI_API_KEY_1
  }
};

module.exports = nextConfig;
