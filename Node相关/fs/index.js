/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-07 14:21:17
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-07 18:06:07
 */
var fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
// 导入文件模块
// node,读写文件也有同步和异步的接口


// 同步,等待和阻塞
// var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: "utf-8" })
// console.log(content);
// 异步
// fs.readFile('hello.txt', { flag: 'r', encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log(456);
// })

// console.log(123);

// 用promise对读取文件进行封装
function fsRead(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { flag: 'r', encoding: "utf-8" }, (err, data) => {
      if (err) {
        // console.log(err);
        // 失败执行的内容
        reject(err)
      } else {
        // console.log(data);
        resolve(data)
      }
      // console.log(456);
    })
  })
}


// var w1 = fsRead('hello.txt')
// w1.then(res => {
//   console.log(res);
// })

async function ReadList() {
  var file2 = await fsRead('hello.txt')
  console.log('1:',file2.toString()+ '.txt');
  console.log('1:','hello2.txt');
  console.log(file2.length);
  var file3 = await fsRead(file2.trim()+ '.txt')
  console.log(file3);
  var file3Content = await fsRead(file3+ '.txt')
  console.log(file3Content);
}

ReadList()