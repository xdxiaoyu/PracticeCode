const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
// 在node中直接使用webpack
const complier = webpack(config)


const app = express()
// webpackDevMiddleware 中间件，可以监听webpack打包代码发生的变化
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))
// 只要文件发生改变了，complier就会重新运行，生成的文件对应的打包输出的
// publicPath就是config.output.publicPath对应publicPath

app.listen(3000,() => {
  console.log('server is running');
})