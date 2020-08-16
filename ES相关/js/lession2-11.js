/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-30 18:42:36
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-11 19:46:27
 */

// function loop() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()

// ES6  1、function后面加* 2、停下来的地方加yield
// function * loop() {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }

// const l =loop()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }

// const l = gen()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = (yield [1,2,3]) + 7 // yield加*以后，表示的是可遍历的对象(可迭代的对象)
//   console.log(1,val)
// }

// const l = gen()
// console.log(l.next(10))
// console.log(l.return(100))
// console.log(l.next(20))

// 抛出异常的方式阻止程序运行
// function* gen() {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('xx'))
// console.log(g.next())

// 实战
// ES5
// function draw(first = 1, second = 3, third = 5) {
//   let firstPrize= ['1A','1B','1C','1D','1E']
//   let secondPrize= ['2A','2B','2C','2D','2E','2F','2G','2H','2I']
//   let thirdPrize= ['3A','3B','3C','3D','3E','3F','3G','3K','3I','3F','30']
//   let result = []
//   let random
//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrize.length)
//     result = result.concat(firstPrize.splice(random, 1)) 
//   }
//   // 抽二等奖
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrize.length)
//     result = result.concat(secondPrize.splice(random, 1)) 
//   }
//   // 抽三等奖
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrize.length)
//     result = result.concat(thirdPrize.splice(random, 1)) 
//   }
//   return result
// }

// let t = draw()
// for ( let value of t) {
//   console.log(value);
// }

// ES6
// function* draw(first = 1, second = 3, third = 5) {
//   let firstPrize = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3K', '3I', '3F', '30']
//   let count = 0
//   let random
//   // 抽一等奖
//   while (1) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrize.length)
//       yield firstPrize[random]
//       count++
//       firstPrize.splice(random, 1)
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrize.length)
//       yield secondPrize[random]
//       count++
//       secondPrize.splice(random, 1)
//     } else if (count < first + second +third) {
//       random = Math.floor(Math.random() * thirdPrize.length)
//       yield thirdPrize[random]
//       count++
//       thirdPrize.splice(random, 1)
//     } else {
//       return false
//     }
//   }
//   return result
// }
// let d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)

// function* count(x = 1) {
//   while (1) {
//     if (x % 3 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let num = count()
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)

// 1、1、2、3、5、8、13、21、34 斐波那契数列

function* series() {
  // let a = 1 , b= 1 , c=0
  // let d
  let [x,y] = [0,1]
  while (1) {
    // if(c < 2) {
    //   yield 1
    // } else {
    //   yield a+b
    //   d = a + b
    //   a = b
    //   b = d 
    // }
    // c++
    [x,y] = [y,x+y]
    yield y
  }
}
let ts = series()

console.log(ts.next().value);
console.log(ts.next().value);
console.log(ts.next().value);
console.log(ts.next().value);
// console.log(ts.next().value);
// console.log(ts.next().value);
// console.log(ts.next().value);
// console.log(ts.next().value);
// console.log(ts.next().value);
