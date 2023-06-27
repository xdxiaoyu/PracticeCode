// 泛型：在定义函数、接口、累的时候不能预先确定要使用的数据类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  function getArr<T>(value:T, count:number) {
    const arr: T[] = []
    // cosnt arr:Array<T> = []

    for (let index = 0; index < count; index++) {
      arr.push(value)
    }

    return arr
  }

  console.log(getArr<number>(100,5));
  console.log(getArr<string>('sssss',5));
})()