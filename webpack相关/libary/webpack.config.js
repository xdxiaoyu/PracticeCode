const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',

    // 不管你通过任何形式引入这个库，都能让你引入得到。
    libraryTarget: 'umd', 
    // ex: import libary from 'library'
    //     const library = reqyire('library')
    //     require(['library'], function() {})

    // 想用下面这种方式引入，<script src='library.js'></script>
    // 全局使用 library.math
    library: 'library',
    // 打包生成的代码挂载到一个页面的全局上library，配置了一个'library'参数

    // libraryTarget: 'this' // 'window'  
    // 将'library'挂载到this对象或者window上，此时不支持'umd'的引入模块方式
  }
}