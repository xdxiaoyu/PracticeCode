/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-21 20:23:28
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-29 21:35:22
 */

// console.log(Math.floor.apply(null,[3.72]));
// console.log(Reflect.apply(Math.floor, null, [4.72]))



// var obj = {
//   name : '111',
//   fun: function (val) {
//     console.log(this.name,val);
//     console.log(this);
//   }
// }
// obj.fun.call(null,['起吧'])

// let price = 91.5
// if (price > 100) {
// price = Math.floor.apply(null, [price])  // 先执行方法，反射是执行过程中再决定用哪个方法
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// console.log(price)
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null,[price]));

// 类的实例化
// let d = new Date()
// console.log(d.getTime())
// 反射  可以替代new 实例化对象
// let d = Reflect.construct(Date, []) // construct 构造函数，不加参数必须传递一个空数组
// console.log(d.getTime(), d instanceof Date) //instanceof 判读一个实例对象是不是这个类的实例

// const student = {}
// const r = Reflect.defineProperty(student,'name',{value:'Nick1'})
// const r = Object.defineProperty(student,'name',{value:'Nick1'})
// console.log(student, r);

// const obj = {x:3,y:2}
// Reflect.deleteProperty(obj, 'x')
// console.log(obj);
// console.log(Reflect.get(obj,'x'));
// console.log(Reflect.get([3,4],'x'));
// console.log(Reflect.getOwnPropertyDescriptor(obj,'x'))                                                                                                                                                                                   

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d)); // 新方法 查看此实例对象上的原型对象上的东西
// console.log(Object.getPrototypeOf(d)); // 老方法

// Reflet验证一个对象是否包含此属性
// const obj = { x:1, y:2 }
// console.log(Reflect.has(obj,'y')); // apply ,has ,construct。Object上没有而Reflect上有

// 判断一个对象是否可扩展的
// const obj = { x:1, y:2 }
// obj.z = 3
// Object.freeze(obj) // 冻结obj对象
// console.log(Reflect.isExtensible(obj)); // 判断一个对象是否可扩展
// console.log(obj);

// 判断对象自身属性（还有例如原型链上的属性）
// const obj = { x:1, y:2 }
// console.log(Reflect.ownKeys(obj));
// console.log(Reflect.ownKeys([1,2])); // 返回索引
// Symbol

// 禁止对象扩展
// const obj = { x: 1, y: 2 }
// Reflect.preventExtensions(obj);
// console.log(Reflect.isExtensible(obj));
// Reflect.set(obj, 'z', 4)
// console.log(obj);
// const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 2 , 'goods')
// console.log(arr);

// 修改原型对象上的方法
// const arr = ['duck', 'duck', 'duck']
// console.log(Reflect.getPrototypeOf(arr));
// Reflect.setPrototypeOf(arr,String.prototype)
// arr.sort() 报错
// console.log(Reflect.getPrototypeOf(arr))





// 代理
// 符合条件动态修改
/*
let o = {
  name: 'xiaoming',
  price: 190
}

let d = new Proxy(o, {
  get(trage, key) {
    if(key === 'price') {
      return trage[key] + 20
    } else {
      return trage[key]
    }
  }
})
console.log(d.price,d.name)
*/

// 阻止修改
/*
let o = {
  name: 'xiaoming',
  price: 190
}
let d = new Proxy(o, {
  get(trage, key) {
    return trage[key]
  },
  set(trage, key, value) {
    return false
  }
})
d.price = 300
console.log(d.price, d.name)

for (let key of Object.entries(o)) {
  Object.defineProperty(o,key,{
    writable: false // 是否可以被赋值
  })
}
o.price = 300
console.log(o.name,o.price);
*/


// 校验
// 监听错误

// window.addEventListener('error', (e) => {
//   console.log(e.message);
//   // report('./')
// }, true)
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
/* 解耦
let validator = (trage, key, value) => {
  if (Reflect.has(trage, key)) {
    if (key === 'price') {
      if (value > 300) {
        return false
      } else {
        trage[key] = value
      }
    } else {
      trage[key] = value
    }
  } else {
    return false
  }
}
*/
// 校验规则                     数据结构未被破坏，符合校验规则
// let d = new Proxy(o, {
//   get(trage, key) {
//     return trage[key] || ''
//   },
//   // set: validator 解耦
//   set(trage, key, value) {
//     if (Reflect.has(trage, key)) {
//       if (key === 'price') {
//         if (value > 300) {
//           // 不满足规则就要触发错误
//           // throw new TypeError('price exceed 300')
//           return false
//         } else {
//           trage[key] = value
//         }
//       } else {
//         trage[key] = value
//       }
//     } else {
//       return false
//     }
//   }
// })
// d.price = 301
// d.name = 'hanmeimie'
// d.age = 400
// console.log(d.price, d.name, d.age);


// class Component {
//   // constructor() {
//   //   this.proxy = new Proxy({
//   //     id: Math.random().toString(36).slice(-8)
//   //   }, {})
//   // }
//   // get id() {
//   //   return this.proxy.id
//   // }
//   get id() {
//     return Math.random().toString(36).slice(-8)
//   }
// }
// let com = new Component()
// let com2 = new Component()
// console.log(com,com2);
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id);
// }
// com.id = 'abc',
// console.log(com.id, com2.id);


// 可撤销的代理Proxy操作
let o = {
  name: 'xiaoming',
  price: 190
}
let d = Proxy.revocable(o, {
  get(trage, key) {
    if(key === 'price') {
      return trage[key] + 20
    } else {
      return trage[key]
    }
  },
  set(trage, key, value) {
    return false
  }
})
console.log(d.proxy.price,d);
setTimeout(() => {
  d.revoke()
  setTimeout(() => {
    console.log(d.proxy.price); // Cannot perform 'get' on a proxy that has been revoked
  },100)
},1000)




// let arr = "helloword"
// for (let i = 0 ;i< arr.length; i++) {
//   console.log(arr.charAt(i));
// }
