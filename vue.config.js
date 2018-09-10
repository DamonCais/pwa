// const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: require('os').cpus().length > 1,

  productionSourceMap: false,
  devServer: {
    port: 80,
    disableHostCheck: true

  },
  configureWebpack: {
    plugins: [
      // new CompressionWebpackPlugin({
      //     asset: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: new RegExp(
      //         '\\.(' + ['js', 'css'].join('|') +
      //         ')$'
      //     ),
      //     threshold: 10240,
      //     minRatio: 0.8
      // })
    ]
  }
}
