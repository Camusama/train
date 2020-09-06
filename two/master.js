var fork = require('child_process').fork
const path = require('path')
var server = require('net').createServer()
// master创建一个tcp服务器,监听端口
server.listen(8888, () => {
  //master监听8888
  console.log('master on :', 8888)
})
// master fork worker
var workers = {}
for (var i = 0; i < 2; i++) {
  var worker = fork(path.resolve(__dirname, './worker.js'))
  // master 把句柄发送给子进程 worker.send('server', server)//发送句柄给worker
  worker.send('server', server) //发送句柄给worker
  workers[worker.pid] = worker
  console.log('worker create pid:', worker.pid)
}
// 句柄是一种可以用来标示资源的引用，它的内部包含了指向对象的文件描述符。

// 比如句柄可以用来标示一个服务器socket对象等
// 这行代码中我们看到，我们的worker.send()函数发送了一个服务器server对象，在worker中会被收到，然后worker调用他的监听方法，就可以触发worker内部http服务器的逻辑
