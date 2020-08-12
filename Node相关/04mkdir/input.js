/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-09 10:33:48
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-09 11:57:08
 */
let readline = require('readline');
let { fsWritefs } = require('./lcfs')
// 导入readline包

// 实例化接口对象
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//设置r1,提问事件
// r1.question("今天学什么？", (answer) => {
//   console.log('答复：', answer);
//   r1.close()
// })

r1.on('close', () => {
  process.exit(0)
})


function lcQuestion(title) {
  return new Promise(resolve => {
    //设置r1,提问事件
    r1.question(title, (answer) => {
      resolve(answer)
    })
  })
}

async function createPackage() {
  let name = await lcQuestion("你的包名叫什么？")
  let description = await lcQuestion("你的包名如何描述？")
  let main = await lcQuestion("你的包名入口文件是什么？")
  let author = await lcQuestion("你的包的作者是什么?")
  let content = `{
    "packge": "${name}",
    "description": "${description}",
    "main": "${main}",
     "author": "${author}"
  }`
  
  await fsWritefs('package.json',content)
  r1.close()
}

createPackage()