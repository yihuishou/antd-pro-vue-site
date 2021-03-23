const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function isProd () {
  return process.env.NODE_ENV === 'production'
}

const assetsCDN = {
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js'
  ]
}

const modulesExternals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex'
}

module.exports = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    externals: isProd() ? modulesExternals : {}
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.module.rule('md')
      .test(/\.md$/i)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
      .end()

    if (isProd()) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    }
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
    port: 9000,
    compress: true,
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
  // disable source map in production
  productionSourceMap: false,
  // true, false, undefined
  lintOnSave: undefined
}
