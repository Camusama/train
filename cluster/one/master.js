var fork = require('child_process').fork
const path = require('path')
var os = require('os')
// console.log('os', os)
var cpu = require('os').cpus()

// let { cpus } = os
for (var i = 0; i < cpu.length; i++) {
  fork(path.resolve(__dirname, './worker.js'))
}
