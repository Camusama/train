let curry = function (fn) {
  let inner = function (...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    } else {
      return function (...arg2) {
        return inner.apply(null, args.concat(arg2))
      }
    }
  }
  return inner
}
let test = function (a, b, c) {
  console.log(a + b + c)
}
let tb = curry(test)
// console.log(tb(1)(2)(3))
// console.log(tb(1, 2)(3))
// console.log(tb(1, 2))

tb(1)(1)(3)
tb(1, 2, 3)
tb(1, 2)(2)
