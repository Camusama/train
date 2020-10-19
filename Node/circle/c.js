console.log('c starting')
const a = require('./a.js')
console.log('in c, a.done = %j', a.done)
// a.done.left = false
exports.done = a.done
console.log('c done')
