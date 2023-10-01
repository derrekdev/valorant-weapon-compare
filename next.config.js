/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  env: {
    DATA_API_URL: process.env.DATA_API_URL,
  },
};

module.exports = nextConfig;
