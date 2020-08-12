/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-09 10:11:04
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-09 10:22:41
 */
let fs = require('fs')
let { fsWritefs, fsRead } = require('./lcfs')

const txtPath = "all.txt"
fs.readdir('../fs', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    files.forEach(async (filename, i) => {
      let content = await fsRead('../fs/' + filename)
      await fsWritefs(txtPath, content)
    })
  }
})

