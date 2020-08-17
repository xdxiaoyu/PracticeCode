/*
 * @Descripttion: 1
 * @version: 1
 * @Author: dxiaoxing
 * @Date: 2020-03-31 13:48:47
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-03-31 18:54:14
 */
/* 
{
  let a = 1
  console.log(a)
}
// console.log(a) // a is not defined
var b = 3
let c = 4
console.log(b,c)

console.log(a) // 引用错误
let a = 1
*/


for( let i = 0; i < 3; i++ ) {
  setTimeout(function() {
    console.log(i);
  },1000)
}

// 1、什么是作用域
// 2、JavaScript深入词法作用域和动态作用域
// 3、深入理解JS中声明提升、作用域(链)和this关键字


