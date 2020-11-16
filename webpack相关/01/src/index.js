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

// import { add } from './math.js'

// add(1, 7)



/* code splitting 代码分割


// import _ from 'lodash'; // 假设lodash 一共1mb 转入lodash.js中

// 假设业务代码 1mb
console.log(_.join(['a', 'b', 'c'], '***'));
// 此处省略10万行业务逻辑
console.log(_.join(['a', 'b', 'c'], '***'));

// 假设不压缩main.js  2mb
// 打包文件会很大，加载时间会长
// 逻辑代码更改，再次打包 -> 2mb
// 重新访问我们的页面，又要加载2mb的内容

// 第一种方式
// main.js被拆成 lodash.js(1MB), main.js(1MB)
// 当页面业务逻辑发生变化时，只需要加载main.js即可（1MB）

// Code Splitting -> 对代码进行拆分，代码执行性能更高，用户体验更好

*/


/* 同步 splitChunks 使用webpack插件打包*/
// import _ from 'lodash';
// import jquery from 'jquery'
// console.log(_.join(['a', 'b', 'c'], '***'));


/*异步*/
// function getComponent() {
//   return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
// var element = document.createElement('div')
// element.innerHTML = _.join(['Dell', 'Lee'], '-')
//     return element
//   })
// }

// getComponent().then(element => {
// document.body.appendChild(element)
// })

// 总结 代码分割和webpack无关
// webpack中实现代码分割，两种方式
// 1.同步代码：只需要在webpack.common.js中做optimization的配置即可 
// 2.异步代码（import）：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中


// import test from './test'
// console.log(test);

/* Lazy Loading */
// function getComponent() {
//   return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['Dell', 'Lee'], '-')
//     return element
//   })
// }
// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })

// 借助import这种语法，可以让页面加载速度更快
// 懒加载其实并不是webpack里面的模块，是ES里面的。本质关系不大，webpack只是能识别inport这种语法进行代码分割

// 用async和await优化

// async function getComponent() {
//   const { default: _ } =  await import(/*webpackChunkName:"lodash"*/'lodash')
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['Dell', 'Lee'], '-')
//   return element
// }
// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })

/*
Chunk
每一个打包出来的js文件都是chunk
*/


/*
Preloading
*/

document.addEventListener('click', () => {
  import('./click.js').then(({default: func}) => {
    func()
  })
})
