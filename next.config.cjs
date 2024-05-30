/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: "standalone",
    serverComponentsExternalPackages: ["@tldraw/tldraw"],
  },
};

module.exports = nextConfig;
