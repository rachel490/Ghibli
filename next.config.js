/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.ghibli.jp", "www.pixelstalk.net", "image.tmdb.org", "www.themoviedb.org", "e1.pxfuel.com"],
  },
};

module.exports = nextConfig;
