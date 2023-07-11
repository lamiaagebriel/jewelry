/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["source.unsplash.com"] },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
    serverActions: true,
    // runtime: "edge",
  },
}

module.exports = nextConfig
