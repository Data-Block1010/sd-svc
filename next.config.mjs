/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // reactStrictMode: true,
  // trailingSlash: true,
  // images: {
  //   unoptimized: true,
  // },
  webpack: (config) => {
    // node-fetch (pulled in by @metamask/sdk) optionally requires 'encoding'
    // at runtime; it's never actually needed in the browser/edge bundle.
    config.resolve.fallback = { ...config.resolve.fallback, encoding: false };
    return config;
  },
};

export default nextConfig;
