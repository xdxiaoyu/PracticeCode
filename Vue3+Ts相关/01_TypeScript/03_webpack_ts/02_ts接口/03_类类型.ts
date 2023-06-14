// 类 类型：类的类型，类的类型可以通过接口来实现
(() => {
  // 定义了一个接口，其中有一个fly函数类型成员
  interface IFly {
    fly()
  }

  // 定义一个类，这个类的类型就是上面定义的接口（实际上也可以理解为，IFly接口约束了当前的这个Persn类）
  class Person implements IFly {
    fly() {
      console.log('我飞了，我是超人！');
    }
  }

  const person = new Person()
  person.fly()

  // 定义一个接口
  interface ISwim {
    swim()
  }

  class Person2 implements IFly, ISwim {
    fly() {
      console.log('我飞了2');
    }
    swim() {
      console.log('我会游泳啦2');
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 总结：类可以通过接口的方式，来定义当前这个类的类型
  // 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现

  // 定义一个接口，继承其他的多个接口
  interface IMyFlyAndSwim extends IFly, ISwim {
    add()
  }

  // 定义一个类，直接实现IMyFlyAndSwim这个接口
  class Person3 implements IMyFlyAndSwim {
    fly() {
      console.log('我飞了3');
    }
    swim() {
      console.log('我会游泳啦3');
    }
    add() {
      console.log('你是最棒的！');
    }
  }

  const person3 = new Person3()
  person3.fly()
  person3.swim()
  person3.add()

  // 总结：接口和接口之间叫继承(使用的是extends关键字)，类和接口之间叫实现(使用的是implements关键字)

})()