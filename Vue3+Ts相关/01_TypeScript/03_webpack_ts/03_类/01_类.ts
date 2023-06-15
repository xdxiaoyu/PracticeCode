// 类可以理解为模板，通过模板实例化对象
// 面向对象的编程思想
(() => {
  // ts中类的定义及使用
  class Person {
    name: string
    age: number
    sex: string

    constructor(name:string = '小甜甜', age:number = 16,sex='女') {
      this.name = name
      this.age = age
      this.sex= sex
    }
    seyHi(str:string) {
      console.log(`大家好，我是${this.name}，今年以及${this.age}岁了，是个${this.sex}孩子。`, str);
    }
  }

  const person = new Person('佐助', 18, '男')
  person.seyHi('很高兴认识你')
})()
