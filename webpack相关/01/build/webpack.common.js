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
      chunks: 'all', // 针对同步和异步代码都做分割。initial-同步代码 async-异步代码
      minSize: 30000, // 引入库大于当前数值30000kb 才会做代码分割
      // minRemainingSize: 0,
      minChunks: 1, // 当一个模块被用了至少多少次的时候才进行代码分割 ->（打包生成的文件有几个chunk引用了这个模块，小于当前数值将不进行分割）
      maxAsyncRequests: 30, // 按需加载时的最大并行请求数超过30就不分割了
      maxInitialRequests: 30, // 入口文件最多分割成30个文件
      automaticNameDelimiter: '~', // 文件名连接符
      enforceSizeThreshold: 50000,
      cacheGroups: { // 缓存组。同时引入loadsh和jquery。使用cacheGroups可以让两个模块打包在一个js文件中
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // default和vendors都满足时，哪个priority值大就会被打包到哪个组里面
          // filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true, // 已打包过的模块再次在其他模块中被使用时，将不会重复打包
          filename: 'common.js'
        }
      }
    }
  },
  output: {
    // publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  }
}