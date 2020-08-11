/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-11 09:45:18
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-11 10:00:38
 */
let events = require('events')
let fs = require('fs');
let ee = new events.EventEmitter()

ee.on('helloSuccess', (data) => {
  console.log('学Node');
  console.log(data);
})
ee.on('helloSuccess', () => {
  console.log('学webpack');
})
ee.on('helloSuccess', () => {
  console.log('学React');
})

function xyReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
xyReadFile('hello.txt').then(res => {
  ee.emit('helloSuccess', res)
})
// 第二种写法
async function test() {
  let data = await xyReadFile('hello.txt')
  ee.emit('helloSuccess', data)
}
test()


