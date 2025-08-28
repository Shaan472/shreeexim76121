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
};

export default nextConfig;
