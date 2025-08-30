/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures trailing slashes for SEO

  images: {
    unoptimized: true, // ✅ Disable Next.js Image Optimization for static exports
    domains: ["rbshstudio.com"], // Allow images from activesine.in
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  reactStrictMode: true, // Enables strict mode for better debugging
};

export default nextConfig;