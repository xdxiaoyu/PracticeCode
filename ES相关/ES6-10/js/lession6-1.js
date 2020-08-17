// /*
//  * @Descripttion: 
//  * @version: 
//  * @Author: dxiaoxing
//  * @Date: 2020-06-06 10:52:23
//  * @LastEditors: dxiaoxing
//  * @LastEditTime: 2020-07-01 17:52:24
//  */
// //JSON
// // console.log(JSON.stringify('\u{D800}'))
// // 0xD800-0xDFFF -这之间的字符无法编码成UTF-8，导致显示错误。ES10之前有这个bug


// /*
// let arr = [1, [2, 3], [4, 5, [6, 7, [8, 9]]]]
// //arr.flat() 扁平化，按照一个可指定的深度递归遍历数组
// console.log(arr.flat(4))

// //arr.flatMap()
// let arr2 = [1, 2, 3]
// console.log(arr2.map(item => [item * 2]).flat())
// console.log(arr2.flatMap(item => [item * 2]))
// */

// /*
// let str ='   foo    '
// console.log(str.trimRight()) //  trimEnd 去除末尾空字符串
// console.log(str.trim()) // 去除开头和末尾空字符串
// console.log(str.trimStart()) //  trimLeft 去除末尾空字符串
// */

// let str = '"foo" and "bar" and "baz"'
// // function select(regExp, str) {
// //   const matches = []
// //   while (true) {
// //     const match = regExp.exec(str)
// //     if (match === null) break
// //     matches.push(match[1])
// //   }
// //   return matches
// // }
// // console.log(select(/"([^"]*)"/g, str)); //["foo", "bar", "baz"]

// // console.log(str.match(/"([^"]*)"/))

// // function select(regExp,str) {
// //   const matches = []
// //   str.replace(regExp,function(all, first) {
// //     matches.push(first)
// //   })
// //   return matches
// // }
// // console.log(select(/"([^"]*)"/g, str))


// // function select(regExp,str) {
// //   const matches = []
// //   for (const match of str.matchAll(regExp)) {
// //     matches.push(match[1])
// //   }
// //   return matches
// // }
// // console.log(select(/"([^"]*)"/g, str))

// /*
// const arr = [['foo', 1], ['bar',2]]
// console.log(arr[1][1])
// const obj = Object.fromEntries(arr) // 数组到obj
// console.log(obj.bar);
// */

// const obj = {
//   abc: 1,
//   def: 2,
//   ghksks: 3
// }

// let res = Object.fromEntries(
//   Object.entries(obj).filter(([key,val]) => key.length === 3)
// )

// console.log(res,Object.entries(obj));

function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log('baidu' && 'google')
}
var getName = function () {
  console.log(4)
}
function getName() {
  console.log(5)
}
// 请写出以下输出结果
Foo.getName() //2
getName() //4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // google
new new Foo().getName() // google