const path = require('path')
require('dotenv').config()

module.exports = {

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ]
  },

  devIndicators: {
    autoPrerender: false,
  },

  images: {
    domains: [process.env.BLOG_URL, 'localhost'],
  },

  env: {
    HOST_DOMAIN: process.env.HOST_DOMAIN,
    BLOG_URL: process.env.BLOG_URL,
    CONTENT_API_KEY: process.env.CONTENT_API_KEY,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
  
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  }
}