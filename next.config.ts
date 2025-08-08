// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",       // When user visits root
        destination: "/dashboard", // Redirect to dashboard
        permanent: false,  // false = 307 Temporary Redirect
      },
    ];
  },
};

module.exports = nextConfig;
