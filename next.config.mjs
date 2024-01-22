/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'my-value',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;