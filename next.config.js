const path = require('path')

module.exports = {
  reactStrictMode: true,
  //distDir: 'dist/functions/next',
  env: {
    API_URL: process.env.API_URL,
    MEDIA_STORAGE_URL: process.env.MEDIA_STORAGE_URL
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }, 
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    MEDIA_STORAGE_URL: process.env.MEDIA_STORAGE_URL
  },
  images: {
/*     deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],  */
    domains: [ 'localhost', 'cloudinary', 'vercel'],
  }
}