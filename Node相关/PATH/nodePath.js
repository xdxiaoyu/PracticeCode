/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-11 18:16:18
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-12 11:48:14
 */
let path = require('path')
let fs = require('fs')

console.log(path);

let strPath = "http://www.xinhuanet.com//2019-11/23/c_1125266028.html"

// 获取路径信息的扩展名
let info = path.extname(strPath)
console.log(info);


let arr = ['/sxt','qianduan', 'zhongji']
let info1 = path.resolve(...arr)
console.log(info1);
// D:\sxt\qianduan\zhongji


// 获得当前执行目录的完整路径
console.log(__dirname);
let info2 = path.join(__dirname,'sxt','qianduan', 'zhongji')
console.log(info2);


let str = "http://www.sxt.com/xinwen/guonei.html"

// 解析出请求目录
let arrParse = str.split('/')
console.log(arrParse);
arr = arrParse.slice(arrParse.length-2,arrParse.length)
console.log(arr);

filPath = path.join(__dirname, ...arr)
console.log(filPath);
fs.readFile(filPath,{flag:'r',encoding:"utf-8"},(err,data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
})



