/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource'
    });
    return config;
  },
}

export default nextConfig; 