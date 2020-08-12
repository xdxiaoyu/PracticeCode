/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-10 16:18:59
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-10 16:25:39
 */
let fs = require('fs')

// 创建读取流。
// 语法：fs.createReadStream(路径,[可选的配置项])
let rs = fs.createReadStream('hello.txt', { flags: 'r', encoding: 'utf-8' })
console.log(rs);

rs.on('open',() => {
  console.log('读取的文件打开');
})

rs.on('close',() => {
  console.log('读取流结束');
})

// 每一次数据流入完成
rs.on('data',(chunk) => {
  console.log(chunk);
})


