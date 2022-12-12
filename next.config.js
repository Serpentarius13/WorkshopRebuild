/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    esmExternals: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/todo-72003.appspot.com/o/**",
      },
    ],
  },

  env: { ENDPOINT: process.env.ENDPOINT },
};

module.exports = nextConfig;
