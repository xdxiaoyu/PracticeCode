/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-12 11:59:29
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-12 13:49:43
 */
let path = require('path')

// 获取当前执行文件的目录
console.log(__dirname);
// D:\exces\PracticeCode\Node相关\PATH

// 获取当前的执行文件
console.log(__filename);
// D:\exces\PracticeCode\Node相关\PATH\nodePath2.js

console.log(path.extname(__filename));
// .js

// 解析路径,可以将路径信息直接解析出来，解析出根路径，
// 目录，扩展名，文件名称，文件名
console.log(path.parse(__filename));
// { root: 'D:\\',
//   dir: 'D:\\exces\\PracticeCode\\Node相关\\PATH',
//   base: 'nodePath2.js',
//   ext: '.js',
//   name: 'nodePath2' }


console.log(process.cwd(__filename));
//  D:\exces\PracticeCode\Node相关\PATH

