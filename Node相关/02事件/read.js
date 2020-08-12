let fs = require('fs')

// 创建读取流。
// 语法：fs.createReadStream(路径,[可选的配置项])
fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    yuEvent.emit('helloSuccess', data)
    // 1数据库查看所有用户详细信息
    // 2统计用户年龄比例
    // 3查看所有用户学校的详细信息
  }
})

let yuEvent = {
  event: {
    // helloSuccess: [fn,fn,fn]
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  emit: function (eventName, EventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(itemFn => {
        itemFn(EventMsg)
      })
    }
  }
}

yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('1数据库查看所有用户详细信息');
})
yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('2统计用户年龄比例');
})
yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('3查看所有用户学校的详细信息');
})

