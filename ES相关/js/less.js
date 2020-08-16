/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-06 17:49:42
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-07 09:57:03
 */
let x = 1; let y = 2; let z = 3
let obj = {
  x,
  y,
  [z]: 6,
  * hello() { // 异步函数
    console.log('hello');
  }
}
// function* functionName() {}
// obj[z] = 5
// console.log(obj)
obj.hello()



// Set  它所存储的数据必须是唯一的 
// 接受的参数是一个可遍历的对象(不止数组) let s = new Set([1,2,3,4])
let s = new Set
// s.add('hello')
// s.add('goodbye') 写入数据
s.add('hello').add('goodbye').add('hello')
// console.log(s);
// s.delete('hello') 删除数据
// s.clear() 删除所有数据
//console.log(s.has('hello')) true 是否包含某个值
//console.log(s.size) 2  指目前set存入数据的长度
// console.log(s.keys());
// console.log(s.values());
// console.log(s.entries());
// s.forEach(item => { // 读
//   console.log(item)
// })
// for(let item of s) { 
//   console.log(item);
// }

/* 
// Map 它的key可是是任何值
// let map = new Map([[1, 2], [3, 4]])
let map = new Map()
map.set(1, 2)
map.set('x', 'xax')
// map.delete(1)
// map.clear()
// console.log(map.size);
// console.log(map.has('x'))
// console.log(map.get('x'))
// console.log(map.keys(), map.values(), map.entries())
// map.forEach((value, key) => {
//   console.log(value, key);
// })
for (let [key,value] of map) {
  console.log(key,value)
}
// console.log(map);
*/

// 数据拷贝
const target = undefined //{ a: { b: 1, e: 5 } }
//const source = { b: 4, c: 5 }
const source = { a: { c:5, b: 2 } }
Object.assign(target, source) //ES6 可能会出现数据丢失（不能出现深拷贝）
//此API实行的是浅复制（对于不是引用类型的值,做数据的替换。如果是引用类型的值，它不在遍历，只是调换一下地址）
console.log(target) // {b:4,c:5}









