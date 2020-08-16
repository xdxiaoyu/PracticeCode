/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-06-05 18:32:13
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-06 10:35:29
 */
/*
// dotAll 模式
// .不能匹配换行符 
// console.log(/foo.bar/us.test('foo\nbar'));
const re = /foo.bar/s
console.log(re.dotAll) // true  判断是否开启dotAll模式
console.log(re.flags)
*/

/*
//console.log('2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/))
// ["2019-06-07", "2019", "06", "07", index: 0, input: "2019-06-07", groups: undefined]
// index -我们的正则是从第几个字符开始匹配到的
// input -完整的输入字符串

// const t = '2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/)
// console.log(t[1]) // 2019
// console.log(t[2]) // 06
// console.log(t[3]) // 07
// 命名分组捕获
const t = '2019-06-07'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
console.log(t.groups.year) // 2019
console.log(t.groups.month) // 06
console.log(t.groups.day) // 07
*/

/**/
// 先行断言
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/));
// 匹配到hello的时候，紧接着匹配hello后面的东西是否满足条件
// 先遇到一个条件，判断后面的是不是满足-先行断言

// 后行断言
console.log(test.match(/(?<=hello\s)world/));
console.log(test.match(/(?<!helle\s)world/));

let reg = '$foo %foo foo'
console.log(reg.replace(/(?<=\$)foo/g,'bar'))


let mon = '$122 is worth about ￥123'
console.log(mon.match(/(?<=\$)\d[0-9]*/))


