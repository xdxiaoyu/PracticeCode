const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals: ['lodash'],
  // externals: {
  //   lodash: {
  //     root: '_',
  //     commonjs: 'lodash'
  //   }
  // },
  externals: 'lodash', // lodash在打包库的时候，不打包到库的代码里面去，而是让业务代码加载。
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',

    // 不管你通过任何形式引入这个库，都能让你引入得到。
    libraryTarget: 'umd', 
    // ex: import libary from 'library'
    //     const library = reqyire('library')
    //     require(['library'], function() {})

    // 想用下面这种方式引入，<script src='library.js'></script>,全局使用 library.math
    library: 'library', // 可以命名为其他字符串名称
    // 打包生成的代码挂载到一个页面的全局上library，配置了一个'library'参数

    // libraryTarget: 'this' // 'window'  
    // 将'library'挂载到this对象或者window上，此时不支持'umd'的引入模块方式
  }
}