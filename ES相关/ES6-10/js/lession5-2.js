/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-06-03 20:32:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-03 20:38:28
 */
const Gen = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 500) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}

Gen(Math.random() * 1000)
  .then(val => console.log('resolve',val))
  .catch(err => console.log('reject',err))
  .finally(() => { console.log('finish') })