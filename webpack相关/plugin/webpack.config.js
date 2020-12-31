const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'dell' // 传参使用（并不是官方配置参数）
    })
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  }
}