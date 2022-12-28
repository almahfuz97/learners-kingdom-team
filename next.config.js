/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = {
  nextConfig,
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


