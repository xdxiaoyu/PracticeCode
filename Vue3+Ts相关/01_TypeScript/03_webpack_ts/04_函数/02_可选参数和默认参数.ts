// 可选参数：函数在声明的时候，内部的参数使用了?进行修饰，那么就表示该参数可以传入也可以不用传入，叫可选参数
// 默认参数：函数在声明的时候，内部参数有自己的默认值，此时的这个参数就可以叫默认参数
(() => {
  const getFullName = function (firstName:string = '东方', lastName?:string) {
    if(lastName) {
      return firstName + '_' + lastName
    } else {
      return firstName
    }
  }

  console.log(getFullName('诸葛'));

})()