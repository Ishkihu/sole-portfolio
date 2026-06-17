import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required because Next.js image optimization needs a live server
  },
  // Replace 'sole-portfolio' with your exact repository name if it differs
  basePath: process.env.NODE_ENV === 'production' ? '/sole-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sole-portfolio/' : '',
};

export default nextConfig;