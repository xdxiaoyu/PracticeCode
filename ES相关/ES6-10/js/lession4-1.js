/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-21 16:46:20
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-22 15:06:14
 */
// async function firstAsync() {
//   return 28
// }

// // firstAsync().then(val => {
// //   console.log(val)
// // })

// console.log(firstAsync() instanceof Promise)

/*
async function firstAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('now it is done')
    }, 1000)
  })
  console.log(await promise) // await 是表达式
  console.log(await Promise.resolve(40))
  console.log(await 30)
  // promise.then(val => {console.log(val)})
  console.log(2)
  return 3
}

firstAsync().then(val => {
  console.log(val)
})
*/


function takeLongTime(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n + 200), n)
  })
}

function step1(n) {
  console.log(`step1 with ${n}`)
  return takeLongTime(n)
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return takeLongTime(n)  
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return takeLongTime(n)  
}

// function doit() {
//   console.time('doit')
//   const time1 = 300
//   step1(time1).then(time2 => step2(time2))
//   .then(time3 => step3(time3))
//   .then(res => {
//     console.log(`result is ${res}`)
//     console.timeEnd('doit')
//   })
// }

// doit()

async function doit() {
  console.time('doit')
  const time1 = 300
  const time2 = await step1(time1)
  const time3 = await step2(time2)
  const res = await step3(time3)
  console.log(`result is ${res}`)
  console.timeEnd('doit')
}

doit()



// async function test() {
//   let promis = new Promise(resolve => {
//     setTimeout(() => {
//       console.log('朋友准备中....');
//       resolve()
//     }, 1000); // 并不知道朋友需要准备多久
//   })
//   await promis
//   await go()
// }
// test()

// function go() {
//   console.log('朋友准备完毕,一起出去玩');
// }





