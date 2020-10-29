const { merge } = require('webpack-merge')
const commonCofig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map', // production环境下使用cheap-module-source-map

  // 线上打包可以去掉
  // devServer: {
  //   contentBase: './dist',
  //   open: true, // 自动打开浏览器访问地址
  //   hot: true,
  //   hotOnly: true
  // },

  // production 环境打包时，下方代码可以注释
  // optimization: {
  //   usedExports: true
  // },

}
module.exports = merge(commonCofig, prodConfig)