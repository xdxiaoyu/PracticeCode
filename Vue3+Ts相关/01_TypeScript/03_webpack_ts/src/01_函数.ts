// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {

  // 函数声明，命名函数
  function add(x: number, y: number): number {
    return x + y
  }

  // 函数表达式，匿名函数
  let myAdd = function (x: number, y: number): number {
    return x + y
  }

  console.log(add(1,2));
  console.log(myAdd(10,20));

  // 函数的完整写法
  //  (x: number, y: number) => number 当前这个函数的类型
  let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
      return x + y
    }

  console.log(myAdd2(100,200));

})()