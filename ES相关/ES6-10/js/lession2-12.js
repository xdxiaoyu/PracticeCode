/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-06 18:52:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-08 10:31:13
 */

/*
var obj = new Proxy({}, {
  get: (target, propkey, receiver) => {
    console.log(`getting ${propkey}`)
    return Reflect.get(target, propkey, receiver)
  },
  set: (target, propkey, receiver) => {
    console.log(`setting ${propkey}`);
    return Reflect.get(target, propkey, receiver)
  }
})
// 上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为
obj.count = 1 // setting count
++obj.count // getting count 、 setting count
*/
// ES6原生提供Proxy构造函数，用来生成Proxy实例
// var proxy = new Proxy(target, handler)

// var proxy = new Proxy({}, {
//   get: (target, propkey, receiver) => {
//     console.log(target, propkey, receiver);

//     return 35
//   }
// })

// console.log(proxy.time)
// console.log(proxy.name)
// console.log(proxy.title)

// var object = { proxy: new Proxy({object}, {
//   get : (target, propkey) => {
//     if(propkey === 'a') {
//       return 1000
//     } else {
//       return 'SD'
//     }

//   }
// })}
// console.log(object.proxy.c);


/*
// 同一个拦截器函数，可以设置多个操作
var handler = {
  get: (target, name) => {
    if (name === 'prototype') {
      return Object.prototype
    }
    return `Hello ${name}`
  },
  // apply方法拦截函数的调用、call和apply操作
  apply: (target, thisBinding, args) => {
    console.log('apply:',target);

    return args[0]
  },
  // construct方法用于拦截new命令
  construct: (target, args) => {
    return { value: args[1] }
  }
}

var fproxy = new Proxy((x, y) => {
  return x + y
}, handler)
console.log(fproxy(1,2));
// let d = new fproxy(1,2)
// console.log(d);

// fproxy(1,2)
// new fproxy(1,2)
*/

// var persion = {
//   name: '张三'
// }
// var proxy = new Proxy(persion, {
//   get: (target, propKey) => {
//     if(Reflect.has(target,propKey)) {
//       return target[propKey]
//     }
//     throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
//   }
// });
// console.log(proxy.name);
// console.log(proxy.age);

// var twice = {
//   apply(target,ctx,args) {
//     return Reflect.apply(...arguments)*2
//   }
// }

// function sum (left,right) {
//   return left + right
// }

// var proxy = new Proxy(sum,twice);
// console.log(proxy(1,2));
// console.log(proxy.call(null, 5, 6));

