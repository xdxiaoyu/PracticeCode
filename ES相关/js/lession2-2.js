/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-03-31 19:03:51
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-01 20:53:21
 */

//1、 for 循环
// for循环有break和continue，可以控制循环进行或者结束
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
    // break
  }
  // console.log(arr[i]);
}
//2、 forEach
arr.forEach((item) => {
  if (item === 2) {
    // continue
  }
  // console.log(item);
})
//3、 every -> 特性：能不能继续往下遍历，取决于函数体的返回值，默认返回fasle
arr.every((item) => {
  if (item === 2) {

  } else {
    // console.log(item);
  }
  return true
})
//4、 for in
// arr.a =8
for (let index in arr) {
  //能遍历数组的原因：1、数组可遍历的。2、数组也是对象
  // console.log(index,arr[index])
}


// for of
for (let item of arr) {
  // console.log(item)
}


// two 转换
// let args 

// Array.from(arrayLike,mapFn,thisArg)

// 什么是伪数组 -> 1、这个对象是按照索引方式存储数据的；2、它具备一个length属性
// ex: {0: 'a',1:'b',length:2}

// let args = Array.from({ length: 5 }, () => { return 1 })
// console.log(args);

// 生成新数组
// let array = Array(5) 定义数组长度
// let array = [1,2] 对象字面量
// ES6：
// let array = Array.of(1,2,3,4)
// console.log(array);
// array = Array.of(9,8)
// console.log(array);

// Array.fill
// let array = Array(5).fill(7)
// console.log(array);
let array = [1, 2, 3, 4, 5]
// array.fill(9,0,2)
// console.log(array);

// Array.find
// let find = array.filter(item =>  item%2 === 0   // ES5
// )
let find = array.findIndex(item => item === 5)
console.log(find);

// Array.findIndex

// 1、JavaScript世界里有哪些元素是可遍历的？
// 2、如何给数据结构自定义遍历？
// 3、find()和ES5的filter()有什么区别？