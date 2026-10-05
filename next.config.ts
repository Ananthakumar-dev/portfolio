import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/my-portfolio',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
