/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
