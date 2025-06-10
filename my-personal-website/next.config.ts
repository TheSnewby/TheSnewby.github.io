import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  
  // Add the webpack config to handle the canvas dependency for react-pdf
  webpack: (config) => {
    // This is a common workaround for react-pdf in Next.js
    // It ensures that the 'canvas' module is resolved correctly.
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
};

export default config;