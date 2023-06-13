(() => {
  function showMsg(str:string) {
    return '跌谷底也要开花' + str
  }

  let msg = '，沉海底也要望月'
  // let msg = 100
  console.log(showMsg(msg));
})()

// 类型注解：是一种轻量级的为函数或者变量添加的约束
// TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解