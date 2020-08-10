/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-10 13:50:14
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-10 16:03:26
 */
let fs = require('fs')

// 创建写入流
//    ---语法：fs.createWriteStream(文件路径，【可选的配置操作】)
let ws = fs.createWriteStream('hello.txt', { flags: 'w', encoding: 'utf-8' })
console.log(ws);
// 监听文件打开事件 
ws.on('open', () => {
  console.log("文件打开了");
})
// 监听准备事件
ws.on('ready', () => {
  console.log("文件写入已准备状态");
})
// 监听文件关闭事件
ws.on('close', () => {
  console.log('文件写入完成关闭');
})

// 文件流式写入
ws.write("helloworld!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入完成");
  }
})
ws.write("helloworld!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容1流入完成");
  }
})
ws.write("helloworld2!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容2流入完成");
  }
})
ws.write("helloworld3!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容3流入完成");
  }
})
ws.write("helloworld4!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容4流入完成");
  }
})

// 文件写入完成 
ws.end(() => {
  console.log("文件写入关闭");
})


