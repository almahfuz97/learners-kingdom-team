/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
  env: {
    URL: 'http://localhost:3000',
  },
};

// module.exports = {
//   env: {
//     URL: 'http://localhost:3000',
//   },

// }


