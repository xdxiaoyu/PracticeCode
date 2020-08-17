let http = require('http')
// 创建server服务器对象
const server = http.createServer()
// 监听对当前服务器对象的请求
server.on('request', (req, res) => {
  // 当服务被请求时，会触发请求事件，并传入请求对象和响应对象
  // console.log(req.url);
  // console.log(req.headers);
  res.setHeader('Content-Type','text/html; charset=UTF-8')
  // 根据路径信息，显示不同的页面内容
  if(req.url === '/') {
    res.end('首页')
  } else {
    res.end('国内新闻')
  }
  res.end('helloworld')
})

// 服务器监听的端口
server.listen(80, () => {
  // 启动监听端口号成功时触发
  console.log("服务器启动成功");
})


