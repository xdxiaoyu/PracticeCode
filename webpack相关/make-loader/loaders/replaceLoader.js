const loaderUtils  = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  console.log(options);
  // return source.replace('dell', options.name)
  const result = source.replace('dell', options.name)
  this.callback(null, result)
}

// 可以同步或异步调用以返回多个结果的函数
// this.callback(
//   err: Error | null,
//   content: string | Buffer, // 源代码进来，解析过后新的代码
//   sourceMap?: SourceMap, // 打包sourceMap的信息
//   meta?: any // 额外想往外传递的信息
// );