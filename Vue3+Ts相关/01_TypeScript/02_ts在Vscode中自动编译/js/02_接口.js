(() => {
    function showName(person) {
        return person.firstName + '-' + person.lastName;
    }
    // 定义一个对象
    const person = {
        firstName: '诸葛',
        lastName: '孔明'
    };
    console.log(showName(person));
})();
// 接口是一种能力，约束
