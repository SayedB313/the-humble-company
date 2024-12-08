/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  swcMinify: true,
};

module.exports = nextConfig;