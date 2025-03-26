/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/Rensley" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Rensley/" : "",
};

module.exports = nextConfig;
