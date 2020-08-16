/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-07 10:04:39
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-08 22:12:35
 */
/*
const s = 'aaa_aa_a'
const r1 = /a+/g 
const r2 = /a+/y // 连续的，从上一次结束后的起始位置开始匹配
// sticky 粘连模式

console.log(r1.exec(s))
console.log(r2.exec(s))

console.log(r1.exec(s))
console.log(r2.exec(s))
*/

// ES5如何在正则中处理中文问题，如果是多字节，ES6呢
// unicode u修饰符 \uffff 
let s = '𠮷'
// let s2 = '\uD842\uDFB7'

// console.log(/^\uD842/.test(s2))
// console.log(/^\uD842/u.test(s2))

// console.log(/^.$/.test(s)) // false
// console.log(/^.$/u.test(s)) // true 需要加u才能匹配到大于两个字节的字符

//console.log(/\u{20BB7}/u.test(s)) // 20BB7 𠮷的码点值

//console.log(/\u{61}/.test('a')); // false
//console.log(/\u{61}/u.test('a')) // true  想在正则表达式中使用unicode的码点识别字符，用/\u{码点值}/u


//4.关于-量词

 console.log(/𠮷{2}/u.test('𠮷𠮷'))
// 到ES6，正则里有中文。加上u
console.log(/[a-z]/i.test('\u212A'))
console.log(/[a-z]/iu.test('\u212A'))



