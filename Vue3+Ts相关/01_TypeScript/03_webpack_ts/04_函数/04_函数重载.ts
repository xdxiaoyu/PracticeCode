// 函数重载：函数名字相同，函数的参数及个数不同
(() => {

  // 函数重载声明
  function add(x:string,y:string):string
  function add(x:number,y:number):number

  function add(x: string | number, y: string | number):string |number {
    if(typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if(typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

  console.log(add('诸葛','孔明'));
  console.log(add(9,1));
  // 非法数据
  // console.log(add('真香', 100));

})()