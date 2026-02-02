import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Rewrite unnecessary for SWA CLI, but kept for standalone Next.js dev
  async rewrites() {
    return process.env.NODE_ENV === "development" ? [
      { source: "/api/:path*", destination: "http://localhost:7071/api/:path*" }
    ] : [];
  },
};

export default nextConfig;
