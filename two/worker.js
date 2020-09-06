var http = require('http')
// 创建一个http服务器，处理请求逻辑，不监听端口
var server = http.createServer((req, res) => {
  res.end('hahahaha')
}) //不监听
// process.on('message') 用于接收 master 的信息，回调函数的第一个参数就是信息，第二个参数就是所谓的句柄
process.on('message', (msg, tcp) => {
  if (msg === 'server') {
    const handler = tcp
    handler.on('connection', socket => {
      //代表有链接
      server.emit('connection', socket) //emit方法触发 worker服务器的connection
    })
  }
})
// 在worker中会被收到，然后worker调用他的监听方法，就可以触发worker内部http服务器的逻辑
