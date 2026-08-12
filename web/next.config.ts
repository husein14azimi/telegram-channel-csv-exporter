import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Optional: Configure base path if needed for GitHub Pages
  // basePath: '/telegram-channel-csv-exporter',

  // Images configuration for static export
  images: {
    unoptimized: true,
  },

  // Experimental features if needed
  // experimental: {
  //   appDir: true,
  // },

  // Webpack configuration for custom handling if needed
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     // Custom server webpack config
  //   }
  //   return config;
  // },
};

export default nextConfig;