// import $ from 'jquery'

export function ui() {
  $('body').css('background', _join(['green'], ''));
}
// 报错 Uncaught ReferenceError: $ is not defined
// 因为一个模块和另一个模块变量是隔离的
// 需要直接引入  import $ from 'jquery'
// 如果使用第三方的库，不可能去修改源码，此时就需要使用webpack解决这个问题
