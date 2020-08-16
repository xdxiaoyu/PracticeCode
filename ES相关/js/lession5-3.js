/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-06-03 21:01:06
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-05 15:29:47
 */

//  const  input = {
//    a:1,
//    b:2
//  }
//  const  test = {
//    d:1,
// }
//  const ouput = {
//    ...input, //  Spread 扩展
//    c:3
//  }
//  console.log(ouput)

//  input.a = 4
// // 拷贝的方式
//  console.log(input,ouput)



const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const { a, b, ...rest } = input
console.log(a, b, rest)



