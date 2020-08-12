/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-07 18:47:30
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-07 18:48:39
 */
let fs = require('fs')
fs.unlink('xy.txt',function() {
  console.log('成功删除');
})