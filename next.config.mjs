/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/seller', destination: '/seller/listings', permanent: false },
      { source: '/buyer', destination: '/buyer/browse', permanent: false },
      { source: '/admin', destination: '/admin/dashboard', permanent: false },
    ];
  },
};

export default nextConfig;
