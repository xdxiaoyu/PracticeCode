(() => {
  // 布尔类型 ------> boolean
  let isDone: boolean = false
  console.log(isDone);

  // 数字类型 ------> number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4);

  // 字符串 ------> string
  let name: string = 'tom'
  name = 'jack'
  console.log(name);


  // undefined和null
  let und: undefined = undefined
  let nll: null = null
  console.log(und, nll);
  // undefined和null都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量的
  name = undefined
  console.log(name);

  // 数组类型
  let arr1: number[] = [10, 20, 50]
  let arr2: Array<number> = [34, 35, 45, 69, 30]   //泛型写法

  // 元组类型
  let arr3: [string, number, boolean] = ['小困难', 100, true]
  // 元组在使用的时候，数据的类型和位置和数据的个数应该和定义元组时候的数控类型及位置应该是一致的
  console.log('==========================');

  // 枚举类型，是对js标准数据类型的补充。
  // 枚举里面的每个数据都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次的递增加1
  enum Color {
    red,
    green,
    blue
  }
  let color: Color = Color.red
  console.log(color);
  console.log(Color[1]);

  // any类型
  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false // 也可以是个 boolean
  let list: any[] = [1, true, 'free']
  console.log(notSure, list);

  // void类型，在函数声明的时候小括号后面使用:void,代表的是该函数没有任何的返回值
  function Msg(): void {
    console.log(1);
  }
  console.log(Msg());


  // Object 类型
  function getObj(obj: object): object {
    console.log(obj);
    return {
      name: '卡卡西',
      age: '25'
    }
  }
  console.log(getObj({ name: '佐助' }));


  // 联合类型(Union Types) 表示取值可以为多种类型中的一种
  function toString(x: string | number): string {
    return x.toString()
  }
  // console.log(toString('100'));


  // 类型断言
  function getLength(x: string | number): number {
    // return x.toString().length  如果是string类型不需要转义
    // 直接x.length 报错：类型“number”上不存在属性“length”。
    // 类型断言  方式1：(<string>x) 方式2：(x as string)

    if ((<string>x).length) {
      // return (<string>x).length
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength('123'));


  // 类型推断：没有明确的指定类型的时候推测出一个类型
  let txt = 100
  // txt = '1'  直接推断-不能将类型“string”分配给类型“number”。
  console.log(txt);

  let txt2
  console.log(txt2);  // 直接推断为any类型

})()