class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log('插件被使用了',options);
  // }

  apply(compiler) {
    // compiler - 存放打包所有相关的内容
    // 钩子。emit: 生成资源到 output 目录之前。
    // tapAsync: 接收两个参数，这个plugin的名字和回调函数
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => { // compilation - 存放这次打包的相关内容
      debugger;
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by dell lee'
        },
        size: function() {
          return 21
        }
      };
      cb()
    })

    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compiler');
    })
  }
}

module.exports = CopyrightWebpackPlugin