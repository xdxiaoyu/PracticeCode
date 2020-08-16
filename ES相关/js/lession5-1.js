/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-06-01 20:15:51
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-03 20:26:01
 */
// function Gen(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time)
//     }, time)
//   })
// }

// async function test() {
//   let arr = [Gen(2000), Gen(100), Gen(3000)]
//   for await (let item of arr) {
//     console.log(Date.now(),  item)
//   }
// }
// test()

//1、 for of 是来遍历同步操作的(集合有异步操作，拿不到正确结果)

const obj = {
  count: 0,
  Gen (time) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({done: false, value: time})
      },time)
    })
  },
  [Symbol.asyncIterator] () {
    let self = this
    return {
      next() {
        self.count++
        if(self.count < 4) {
          return self.Gen(Math.random() * 1000)
        } else {
          return Promise.resolve({
            done: true,
            value: ''
          })
        }
      }
    }
  }
}

async function test() {
  for await (let item of obj) {
    console.log(new Date(), item);
  }
}

test()

// 1、 for await of 是来解决什么问题的
// 2、 for of 和 for await of的区别
// 3、 自定数据结构异步遍历，该如何操作
