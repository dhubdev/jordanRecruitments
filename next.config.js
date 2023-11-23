/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
