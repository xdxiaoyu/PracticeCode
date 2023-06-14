// 接口是对象的状态（属性）和行为（方法）的抽象（描述）
// 接口是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
(() => {
  // console.log('沉海底也要望月，跌谷底也要开花');

  // 需求: 创建人的对象, 需要对人的属性进行一定的约束
  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  interface IPerson {
    readonly id: number // readonly 代表只读
    name: string
    age: number
    sex?: string // ? 代表可有可无
  }
  const person: IPerson = {
    id: 1,
    name: '小甜甜',
    age: 18,
    // sex: '女'
  }
  person.age = 10
  console.log(person);


})()