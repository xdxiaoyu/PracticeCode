const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')


// node核心模块path两个小知识点复习
// __dirname：或取当前执行文件所在目录的完整目录名
// path.resolve()：把路径或者路径片段的序列解析为一个绝对路径
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // production环境下使用cheap-module-source-map
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器访问地址
    hot: true,
    // hotOnly: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // production 环境打包时，下方代码可以注释
  optimization: {
    usedExports: true
  },
}
module.exports = merge(commonConfig, devConfig)
