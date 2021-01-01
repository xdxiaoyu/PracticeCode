import * as _ from 'lodash'

// 对于第三方库，在ts文件中引用。如果想要库在调用方法是给予错误调用的错误警告，需要安装这个库的类型文件
// 例如上述： npm install @types/lodash --save-dev

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return _.join(['Hello,', '', this.greeting], '')
  }
}


let greeter = new Greeter('world')

// let button = document.createElement('button')
// button.textContent = "Say Hello"
// button.onclick = function() {
  alert(greeter.greet())
// }

// document.body.appendChild(button)