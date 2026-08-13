import type { NextConfig } from "next";

// STATIC_EXPORT=1 produces a fully static build (used by GitHub Pages).
// NEXT_PUBLIC_BASE_PATH hosts the site under a sub-path (e.g. /newrizon).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1"
    ? {
        output: "export" as const,
        basePath,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
