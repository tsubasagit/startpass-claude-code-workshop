import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/startpass-claude-code-workshop",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
