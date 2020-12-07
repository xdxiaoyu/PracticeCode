const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // production环境下使用cheap-module-source-map
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器访问地址
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    // exclude 排出在外的模块
    {
      test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin()  注释打包分析  
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  }
}