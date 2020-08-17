/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-01 21:08:21
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-04-03 15:28:06
 */
/* 
function Presion (name,eat) {
  this.name = name
  this.eat = function() {
    console.log('i am eat food');
  }
}
let per = new Presion("孙悟空")
let aer = new Presion("唐僧")
console.log(per);
console.log(aer);

aer.eat = function() {
  console.log('error');
}
aer.eat()
per.eat()
*/


//ES5
//类的声明
// let Animal = function(type) {
//   this.type = type
//   // this.eat = 
// }
// Animal.prototype.eat = function () {
//   console.log('i am eat foot');
// }
// // 定义实类，生成实例
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog);
// console.log(monkey);
// monkey.eat = function () {
//   console.log('error');
// }
// dog.eat() 
// monkey.eat() // 违背了继承的原则

// ES6 类的声明
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() {
//     console.log('i am eat hello')
//   }
// }
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog);
// console.log(monkey);
// dog.eat() 
// monkey.eat() 

// // 判断Animal类型
// console.log(typeof Animal);


// Class只是ES5用原型链生明类的语法糖
// 语法糖？ 语法不一样，但最后的本质是一样的


// let _age = 4
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   get age () {
//     return _age
//   }
//   set age (val) {
//     if(val%2 === 0) {
//       _age = val
//     }
//   }
//   eat() {
//     console.log('i am eat hello')
//   }
// }
// let dog = new Animal("dog")
// console.log(dog.age);
// dog.age = 8
// console.log(dog.age);


// ES5->实现类的静态方法
// let Animal = function(type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('i am eat foot');
// }

// Animal.walk = function () {
//   console.log("i am walking");
// }

// let dog = new Animal('dog')
// dog.eat()



//ES6->实现类的静态方法 
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() { // 类的实例对象方法
//     Animal.walk()
//     console.log('i am eat hello')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// let dog = new Animal('dog')
// dog.eat()
// 静态方法: ->不属于对象实例的，而属于这个类的。（在实例对象上是没有的）
// 定义上，使用上。


// ES5实现继承
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('i am eat foot');
// }

// Animal.walk = function () {
//   console.log("i am walking");
// }
// let Dog = function (type) {
//   // 初始化父类的构造函数
//   Animal.call(this, type)
//   this.run = function () {
//     console.log('i can run');
//   }
// }
// Dog.prototype = Animal.prototype
// let dog = new Dog('dog')
// dog.eat()
// console.log(dog);


// ES6实现类继承
class Animal {
  constructor(type) {
    this.type = type
  }
  eat() { // 类的实例对象方法
    Animal.walk()
    console.log('i am eat hello')
  }
  static walk() {
    console.log('i am walking')
  }
}
class Dog extends Animal {
  constructor(type,age) {
    super(type)
    this.age = age
  }
}

let dog = new Dog('dog',5)
dog.eat()
console.log(dog.age);
