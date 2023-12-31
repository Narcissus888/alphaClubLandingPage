/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
    loader: "custom",
    loaderFile: "./image-loader.ts",
    unoptimized: true,
  },
  reactStrictMode: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: process.env.NEXT_PUBLIC_APP_URL + "/:path*",
  //     },
  //   ]
  // },
}

module.exports = {
  ...nextConfig,
}
