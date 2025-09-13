import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Skip lint checks during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Skip type checking during build
    ignoreBuildErrors: true,
  },
  // output: "export", // ✅ Generate static HTML in "out" folder
  experimental: {
    // Increase body size limit for file uploads
    serverComponentsExternalPackages: [],
  },
  // Configure API routes for larger file uploads
  api: {
    bodyParser: {
      sizeLimit: '35mb',
    },
    responseLimit: '35mb',
  },
};

export default nextConfig;
