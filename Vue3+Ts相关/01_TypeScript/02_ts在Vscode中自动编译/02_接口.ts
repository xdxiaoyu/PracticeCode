(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string
    lastName: string
  }

  function showName(person:IPerson) {
    return person.firstName + '-' + person.lastName
  }

  // 定义一个对象
  const person = {
    firstName: '诸葛',
    lastName: '孔明'
  }

  console.log(showName(person));
})()

// 接口是一种能力，约束