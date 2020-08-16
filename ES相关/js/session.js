/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-09 19:06:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-12 18:13:37
 */
// const a = 20
// const b = 10
// const c = 'javascript'

// const retailPrice = 20
// const wholeSalePrcie = 16
// const type = 'retail'
// let showTxt = ''
// if(type === 'retail') {
//   showTxt = '您此次的购买单价是：' + retailPrice
// } else {
//   showTxt = '您此次的购买单价是：' + wholeSalePrcie
// }
// console.log(showTxt);


function Price(strings, type) {
  console.log(strings, type);
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrcie = 16
  let showTxt
  if (type === 'retail') {
    showTxt = '购买单价是：' + retailPrice
  } else {
    showTxt = '购买单价是：' + wholeSalePrcie
  }
  return `${s1}${showTxt}`
}

let showTxt = Price`您此次的${'retail'}`
console.log(showTxt);

