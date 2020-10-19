console.log('a starting')
const b = require('./b.js')
console.log('in a, b.done = %j', b.done)
exports.done = b.done
console.log('a done')
