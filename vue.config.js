const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/gateway': {
        target: 'https://example.com/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': ''
        }
      }
    }
  },
  // true, false, undefined
  lintOnSave: undefined
}
