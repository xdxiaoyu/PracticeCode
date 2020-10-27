// // import Header from './header'
// // import Sidebar from './sidebar'
// // import Content from './content'
// // var two = require('./2.jpg')

// // console.log(two);


// // new Header()
// // new Sidebar()
// // new Content()

// // import two from './2.jpg'

// // var img = new Image()
// // img.src = two

// // var root = document.getElementById('root')
// // root.append(img)


// // console.log('hello word!+++!');


// // sourceMap

// // 现在知道dist目录下main.js文件117行出错

// // sourceMap 它是一个映射关系，他知道dist目录下main.js文件117实际
// // 对应的是src目录下index.js文件中的第一行

// // 当前其实是index.js中的22行代码出错了


// // import './style.css'

// // var btn = document.createElement('button')
// // btn.innerHTML = '新增'
// // document.body.appendChild(btn)
// // btn.onclick = function() {
// //   var div = document.createElement('div')
// //   div.innerHTML = 'item'
// //   document.body.appendChild(div)
// // }
// import counter from './counter'
// import number from './number'

// counter()
// number()

// if(module.hot) {
//   module.hot.accept('./number.js', () => {
//     document.getElementById('number')
//     document.body.removeChild(document.getElementById('number'))
//     number()
//   })
// }

// import "@babel/polyfill";

// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {}),
// ]
// arr.map(item => {
//   console.log(item);
// })

// import '@babel/polyfill' 
// 实际上并未导出任何内容， 是在windowd对象直接绑定Promise
// Tree Shaking 打包的时候发现没有任何导出可能就会直接忽略掉
// 实现是需要的，但是因为没有导出内容，使用Tree Shaking就会忽略掉会导致报错
// 解决方案：package.json中写入"sideEffects": ["@babel/polyfill"],
// 没有特殊处理的，直接写false
// 一般会遇到引入css文件的情况，需要配置"sideEffects": ["*.css"]

import { add } from './math.js'

add(1, 2)