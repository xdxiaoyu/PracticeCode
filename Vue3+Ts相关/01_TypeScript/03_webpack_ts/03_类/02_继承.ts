// 继承：类与类之间的关系
// A继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类---> 派生类
// 父类---> 超类（父类）
// 一旦发生继承关系，就出现了父子类的关系（叫法）
(()=> {
  // 定义一个类，作为基类(超类/父类)
  class Person {
    name: string
    age:number
    sex:string

    constructor(name:string,age:number,sex:string) {
      this.name = name
      this.age = age
      this.sex = sex

    }
    sayHi(str:string) {
      console.log(`我是：${this.name},${str}`);
    }
  }

  // 定义一个类来继承Person
  class Student extends Person{
    constructor(name:string,age:number,sex:string){
      super(name, age, sex)
    }

    sayHi(str: string): void {
      console.log('我是学生类中的sayHi方法');
      super.sayHi('子类传递的哈哈哈哈')
    }
  }

  const person = new Person('小甜甜', 18, '男')
  person.sayHi('hhh')
  const stu = new Student('小明', 16, '男')
  stu.sayHi('嘎嘎')


  // 总结：类和类直接如果要有继承关系，需要使用extends关键字
  // 子类中可以调用父类的构造函数，使用super关键字(包括调用父类中的实例方法，也可以使用super)
  // 子类中可以重写父类的方法
})()