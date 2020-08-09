/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-09 10:29:48
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-09 10:31:45
 */
let fs = require('fs')

fs.rmdir('abc',() => {
  console.log('删除成功');
})