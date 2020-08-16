/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-28 19:46:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-01 19:55:00
 */ 
/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-28 19:46:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-28 20:00:09
 */
// for(let i = 1;i<32;i++) {
//   if(i< 10) {
//     console.log(`0${i}`);
//   } else {
//     console.log(i);
//   }
// }
for (let i = 1; i < 30200; i += 1000) {
  console.log(i.toString().padEnd(5, '*#'));
}