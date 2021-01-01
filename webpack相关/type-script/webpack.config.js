const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader', // 这个loader打包时需要一个tsconfig.json文件。tsconfig.json中配置了对ts打包的配置项
      exclude: /node_modules/
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}