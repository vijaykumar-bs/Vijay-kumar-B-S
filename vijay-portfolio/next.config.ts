import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/vijay-portfolio',
  assetPrefix: '/vijay-portfolio',
};

export default nextConfig;
