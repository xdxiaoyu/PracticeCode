/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-07 18:16:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-07 18:36:51
 */
let fs = require('fs');
const { resolve } = require('path');

// flag
// write=>w   read=>r   apped=>a
// 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
// 'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
// fs.writeFile('test.txt',"今晚吃啥？\n", {flag: 'a',encoding:"utf-8"},function(err){
//   if(err) {
//     console.log(err,'写入内容出错');
//   }else {
//     console.log('写入内容成功');
//   }
// })

function writefs(path,content){
  return new Promise((resolve,reject) => {
    fs.writeFile(path,`${content}\n`, {flag: 'a',encoding:"utf-8"},function(err){
      if(err) {
        reject(err)
        // console.log(err,'写入内容出错');
      }else {
        resolve(err)
        // console.log('写入内容成功');
      }
    })
  })
}

// async function writeList() {
//   await writefs('xy.txt', '1今天学Node')
//   await writefs('xy.txt', '2明天学Node')
//   await writefs('xy.txt', '3后天学Node')
//   await writefs('xy.txt', '4大后天学Node')
// }

async function writeList() {
  await writefs('xy.html', '<h1>1今天学Node</h1>')
  await writefs('xy.html', '<h1>2明天学Node</h1>')
  await writefs('xy.html', '<h1>3后天学Node</h1>')
  await writefs('xy.html', '<h1>4大后天学Node</h1>')
}

writeList()