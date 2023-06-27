// 多个泛型参数的函数：函数中有多个泛型的参数
(() => {
  function getMsg<K,V>(value:K, value2: V):[K,V] {
    return [value,value2]
  }
  console.log(getMsg<number,string>(1,'100'));
})()