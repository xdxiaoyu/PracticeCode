// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
// var two = require('./2.jpg')

// console.log(two);


// new Header()
// new Sidebar()
// new Content()

import two from './2.jpg'

var img = new Image()
img.src = two

var root = document.getElementById('root')
root.append(img)
