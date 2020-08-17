/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-05-07 21:08:42
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-08 09:27:59
 */

// 使用Proxy实现观察者模式
/*
// 下面，使用Proxy写一个观察者模式的最简单实现，即实现observable和observe两个函数，
// 思路是observable函数返回一个原始对象的Proxy代理，拦截赋值操作，触发充当观察者的各个函数

const queuedObservers = new Set()

const observe = fn => queuedObservers.add(fn)
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target,key,value,receiver)
  queuedObservers.forEach(observe => observe())
  return result
}
// 上面代码先定义一个set集合，所有观察者函数都放进这个集合。然后observable函数返回原始对象的代理，
// 拦截赋值操作，拦截函数set之中，会自动执行所有观察者

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age + 2}`)
}

observe(print)
person.name = '李四'
// 上面代码中，数据对象person是观察目标，函数print是观察者。一旦数据数据对象变化，print就会自动执行
*/ 

// 观察者模式
// Subject类定义
class Subject {
  constructor() {
    this.observerCollection = []
  }
  
  registerObserver(observer) {
    this.observerCollection.push(observer)
  }

  unregisterObserver(observer) {
    let index = this.observerCollection.indexOf(observer)
    if(index > 0) this.observerCollection.splice(index,1)
  }

  notifyObservers() {
    this.observerCollection.forEach((observer) => observer.notify())
  }
}

// Observer类定义
class Observer {
    
    constructor(name) {
        this.name = name;
    }
    
    notify() {
        console.log(`${this.name} has been notified.`);
    }
}
//ex
let subject = new Subject(); // 创建主题对象

let observer1 = new Observer('semlinker'); // 创建观察者A - 'semlinker'
let observer2 = new Observer('lolo'); // 创建观察者B - 'lolo'

subject.registerObserver(observer1); // 注册观察者A
subject.registerObserver(observer2); // 注册观察者B
 
subject.notifyObservers(); // 通知观察者

subject.unregisterObserver(observer1); // 移除观察者A
