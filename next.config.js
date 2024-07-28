/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.graphassets.com", "www.placeholder.com"],
  },
};

module.exports = nextConfig;
