import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/endfield-archive" : "";

const nextConfig: NextConfig = {
  // Stops next dev writing AGENTS.md and CLAUDE.md into the repo root.
  agentRules: false,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? "/endfield-archive/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
