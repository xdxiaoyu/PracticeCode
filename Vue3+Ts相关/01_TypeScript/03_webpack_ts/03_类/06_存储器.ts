// 存取器：让我们可以有效的控制对 对象中的成员的访问，通过getters和setters进行操作
(() => {
  // 外部可以传入姓氏和名字，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {

    firsName:string
    lastName:string

    constructor(firsName:string, lastName:string) {
      this.firsName = firsName
      this.lastName = lastName
    }

    // 读取器
    get fullName() {
      console.log('get中.....');
      return this.firsName + '_' + this.lastName
    }

    // 设置器
    set fullName(val) {
      console.log('set中....');
      let names = val.split('_')
      this.firsName = names[0]
      this.lastName = names[0]
    }
  }

  const person:Person = new Person('东方', '不败')
  console.log(person);
  console.log(person.fullName);

  person.fullName = '诸葛_孔明'
  console.log(person.fullName);
})()