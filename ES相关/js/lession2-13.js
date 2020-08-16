/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-07 18:42:13
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-13 19:20:25
 */

// -> 可遍历接口

// let authors = {
//   allAuthors: {
//     fiction: ['Agla', 'Skks', 'Lp'],
//     scienceFiction: ['Neal', 'Arthru', 'Ribert'],
//     fantasy: ['J.R.Tole', 'J.M.R', 'Terr P.K']
//   },
//   Addres: []
// }
/*
// let r = []
// for (let [k,v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
//   console.log(k,v)
// }
// console.log(r)

// 遍历器接口
// 输入是固定的,输出是有约束的,中间无所谓
authors[Symbol.iterator] = function () {
  // this 只对象本身
  let allAuthors = this.allAuthors
  // 用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames和Object.getOwnPropertySymbols之和
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  return {
    next() {
      if (!values.length) {
        if(keys.length) {
          values= allAuthors[keys[0]]
          keys.shift()
        }
      }
      return {
        done: !values.length, // 遍历是否结束
        value: values.shift()  // 当前所遍历项的值
      }
    }
  }
}

// let r = []
// for (let v of authors) {
//   r.push(v)
//   console.log(v)
// }
// console.log(r);

let a = {
  name: 'lisi',
  age: '20'
}
a[Symbol.iterator] = function() {
  let allitem = this
  let keys = Reflect.ownKeys(allitem)
  keys.pop()
  
  let values = []
  return {
    next() {
      if(!values.length) {
        if(keys.length) {
          values.push(allitem[keys[0]])
          keys.shift()
        }
      }
      return {
        done: !values.length,
        value: values.shift()
      }
    }
  }
}
let t = a[Symbol.iterator]()
console.log(t.next());


// for (let item of a) {
//   console.log(item)
// }




let arr = [1, 3, 6, 8, 9]

// for (let item of arr) {
//   console.log(item);
// }
function forof(arr, cb) {
  let iterator = arr[Symbol.iterator]()
  // console.log(iterator.next());
  // console.log(iterator.next());
  
  let result = iterator.next()
  while (!result.done) {
    cb(result.value)
    result = iterator.next()
  }
}

// forof(arr, function (item) {
//   console.log(item)
// })
*/
// authors[Symbol.iterator] = function* () {
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   while (1) {
//     if (!values) {
//       if (keys.length) {
//         values = allAuthors[keys[0]]
//         keys.shift()
//         yield values.shift()
//       } else {
//         return false
//       }
//     } else {
//       yield values.shift()
//     }
//   }
// }

// let r = []
// for (let v of authors) {
//   r.push(v)
// }
// console.log(r);

// 可迭代协议->必须要有以Symbol.iterator为key的方法(没有就是不可迭代的)
// 迭代器协议->既然它可迭代了，它是怎样的一个迭代过程，这就是迭代器。要求必须返回一个对象，无参数且命名为next,next的返回值必须是done和value


class RangeIterator {
  constructor(start, stop) {
    this.value = start
    this.stop = stop
  }

  [Symbol.iterator]() { return this }

  next() {
    let value = this.value
    if (value < this.stop) {
      this.value++
      return {
        done: false,
        value: value
      }
    }
    return {
      done: true,
      value: undefined
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop)
}
for (let value of range(0, 3)) {
  console.log(value)
  
}

/*
const obj = {}

obj[Symbol.iterator] = () => 1

// TypeError: Result of the Symbol.iterator method is not an object
console.log([...obj] )

const someString = "hi"
console.log(someString[Symbol.iterator]().next())
*/ 
