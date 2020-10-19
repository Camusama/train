console.log('b starting')
const c = require('./c.js')
console.log('in b, c.done = %j', c.done)
exports.done = c.done
console.log('b done')
