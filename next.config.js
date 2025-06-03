const withBundleAnalyzer = require("@next/bundle-analyzer");
require("dotenv").config(); // Ensure env variables are loaded

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["lab.basement.studio"],
  },
  async rewrites() {
    const docsBase = process.env.NEXT_PUBLIC_DOCS_URL;

    if (!docsBase) {
      throw new Error("Missing environment variable: NEXT_PUBLIC_DOCS_URL");
    }

    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: `${docsBase}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${docsBase}/docs/:path*`,
      },
    ];
  },
};

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
