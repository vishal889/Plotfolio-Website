/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig


module.exports = {

  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://google.com/about',
        permanent: false
      }
    ];
  }
};



