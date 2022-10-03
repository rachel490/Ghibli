/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.ghibli.jp", "www.pixelstalk.net"],
  },
};

module.exports = nextConfig;
