/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for catching potential issues early
  reactStrictMode: true,

  // Image optimization – allow briven.ai CDN origin when needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "briven.ai",
      },
    ],
  },
};

export default nextConfig;
