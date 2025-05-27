import type { NextConfig } from "next";

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*', // API ルートにマッチ
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: FRONTEND_ORIGIN || '' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
};

export default nextConfig;
