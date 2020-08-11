/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-11 18:16:18
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-11 18:28:01
 */
let path = require('path')

console.log(path);

let strPath = "http://www.xinhuanet.com//2019-11/23/c_1125266028.html"

// 获取路径信息的扩展名
let info = path.extname(strPath)
console.log(info);