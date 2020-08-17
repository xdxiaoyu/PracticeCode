/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-12 19:39:40
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-21 20:21:43
 */
/*
let arr = ['hello','word']
let [a,b] = arr
console.log(a,b);
*/
// Array|Object
// let arr = ['a','b','c','d']
// let [firstName,,thirdName] = arr
// console.log(firstName,thirdName);

// let arr = 'abcd'
// let [firstName,,thirdName] = arr
// console.log(firstName,thirdName);

// let [firstName,,thirdName] = new Set([1,2,3,4])
// console.log(firstName,thirdName)
// let [a,b] = new Map([[1,2],[3,4]])
// console.log(a,b);


// let user = { name: 's', surname: 't' };
// [user.name, user.surname] = [1, 2]
// console.log(user);


// const { log } = console
// console.log(console);

// log('hello')

// let arr = ['hello','word','next']
// let {0:first,[2]: last} = arr
// console.log(first,last);
// let {toString: s} = 123;
// console.log(s);


// ES5 回调地狱 
// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => { callback(src) }
//     document.head.append(script)
// }

// loadScript('./1.js', function (script) {
//     console.log(script);
//     loadScript('./2.js', function (script) {
//         console.log(script)
//         loadScript('./3.js',function(script) {
//             console.log(script);
//         })
//     })
// })

// ES6
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script')
//         script.src = src
//         script.onload = () => resolve(src)
//         script.onerror = (err) => reject(err)
//         document.head.append(script)
//     })
// }

// loadScript('./1.js').then(loadScript('./2.js'))

/*  promsie 静态方法
function test(bool) {
    if (bool) {
        return new Promise()
    } else {
        // return 42   只有promise对象才可以.then  TypeError: test(...).then is not a function
        // return Promise.resolve(42)
        return Promise.reject(new Error('xx'))
    }
}
test(0).then((value) => {
    console.log(value) // 42
},(err) => {
    console.log(err)
})
*/

/*  catch
function loadScript(src) {
  return new Promise((resolve, reject) => { // pending,undefined
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src) // fulfilled,result
    script.onerror = (err) => reject(err) // rejected,error
    document.head.append(script)
  })
}

loadScript('./5.js')
  .then(() => {
    return loadScript('./2.js')
  }).then(() => {
    return loadScript('./4.js')
  })
  .catch(err => {
    console.log(err) // Event {isTrusted: true, type: "error", target: script, currentTarget: script, eventPhase: 2, …}isTrusted: truetype: "error"target: scriptcurrentTarget: nulleventPhase: 0bubbles: falsecancelable: falsedefaultPrevented: falsecomposed: falsetimeStamp: 397.33500010333955srcElement: scriptreturnValue: truecancelBubble: falsepath: (5) [script, head, html, document, Window]__proto__: Event
  })
*/


// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(new Error('ss'))
// let p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// })


// 竞争 -> race  静态方法
/*
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 1000)
  })
}

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 0)
  })
}

Promise.race([p1(),p2()]).then((value) => {
  console.log(value)
})
*/ 

// Reflect => 反射,什么是反射机制

//java的反射机制是在编译阶段不知道是哪个类被加载，而是运行的时候才加载、执行








// function loadScript(src) {
//   let script = document.createElement('script')
//   script.src = src
//   document.head.append(script)
// }

// loadScript('./1.js')