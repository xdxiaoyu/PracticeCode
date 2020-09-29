const path = require('path')

// node核心模块path两个小知识点复习
// __dirname：或取当前执行文件所在目录的完整目录名
// path.resolve()：把路径或者路径片段的序列解析为一个绝对路径
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        // loader: 'file-loader',
        // options: {
        //   // placeholder 占位符
        //   name: '[name]_[hash].[ext]',
        //   outputPath: 'images/'
        // }
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}