/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-03 15:34:39
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-03 20:00:56
 */
// 参数默认值
// ES5
// function f(x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 42
//   }
//   return x + y + z
// }
// console.log(f(1));

// ES6
/*
function f(x, y, z = x+y) {
  // 判断传入多少个参数 ES5-> Array.from(arguments)
  //ES6-> f.length可以获取到没有默认值参数的个数
  console.log(f.length);
  return x*10 + z
}
console.log(f(1,2,3,4));
*/


// ES5，求一组数据的和
// function sum() {
//   let num = 0
//   /* 
//   Array.prototype.forEach.call(arguments,function(item) {
//     num += item*1
//   })
//   num = Array.prototype.reduce.call(arguments,function (x,y) {
//     return  x + y
//   })
//   */
//   num = Array.from(arguments).reduce((x, y) => {
//     return x + y
//   })
//   return num
// }

// ES6
// function sum(base, two, ...nums) {
//   // Rest parameter
//   let num = 0
//   num = nums.reduce((x, y) =>  x + y)
//   return num + base * 2 + two * 2
// }
// console.log(sum(1, 2, 3, 4));
// Rest参数 
//1、用来获取所有的参数的，而且是函数执行时的参数
//2、nums它是数组，不是伪数组。可以直接用数组API
//3、可以拆分开，将剩余不确定的参数放入nums中


function sum(x = 1, y = 2, z = 3) {
  return x + y + z
}
let data = [4, 5, 7]
// console.log(sum(data[0],data[1]));
// ES5-> console.log(sum.apply(this, data)); 
// spread
// ES6 console.log(sum(...data));



/*
// 箭头后面是表达式，可以省略return和{}
let sum = (x, y, z) => ({
  x: x,
  y: y,
  z: z,
}) // 不加小括号报错，why? 小括号当做运算表达式的作用
console.log(sum(1, 2, 3));
let sun = (x, y, z) => {
  return {
    x: x,
    y: y,
    z: z,
  }
}
console.log(sun(1,2,4));
*/ 
let test = {
  name: 'test',
  say:  () => {
    console.log(this.name);
    // console.log(this);
  }
}
test.say()
//ES6  构建时执行了 eval，把最外层的作用域指向了空对象  
// ES6的箭头函数的this指向的是写这个函数时this的指向，而不是执行时this的指向


