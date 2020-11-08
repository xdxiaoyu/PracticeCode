// node核心模块path两个小知识点复习
// __dirname：或取当前执行文件所在目录的完整目录名
// path.resolve()：把路径或者路径片段的序列解析为一个绝对路径
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // lodash: './src/lodash.js',
    main: './src/index.js',
  },
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
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    },
    // exclude 排出在外的模块
    {
      test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
      // options: 将放入.babelrc中 
      // {
      //   // 业务代码使用
      //   // "presets": [["@babel/preset-env", {
      //   //   targets: {
      //   //     chrome: '67', // 打包会运行在67版本的上的浏览器
      //   //     safari: '11.1', // 同理
      //   //   },
      //   //   useBuiltIns: 'usage'
      //   // }]]
      //   "plugins": [[
      //     // 不会污染全局，已闭包的形式注入，适合编写UI组件库或者库的时候使用
      //     "@babel/plugin-transform-runtime",
      //     {
      //       "absoluteRuntime": false,
      //       "corejs": 2, // 不配置不会把es6语法打包进去
      //       "helpers": true,
      //       "regenerator": true,
      //       "useESModules": false,
      //       "version": "7.0.0-beta.0"
      //     }
      //   ]]
      // }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    /*  
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
    */
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
  },
  output: {
    // publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}