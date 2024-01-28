const { env } = require('./src/server/env');

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

module.exports = getConfig({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/referrals',
        permanent: true,
      }
    ]
  },
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
})
