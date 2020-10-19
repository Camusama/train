console.log('main starting')
const b = require('./b.js')
const a = require('./a.js')
console.log('in main, a.done=%j, b.done=%j', a.done, b.done)
