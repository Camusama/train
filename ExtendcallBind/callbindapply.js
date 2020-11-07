Function.prototype.mcall = function (context, ...args) {
  let ctx = context || window
  let fn = this
  ctx.fn = fn
  let res = ctx.fn(...args)
  delete ctx.fn
  return res
}
Function.prototype.mapply = function (context, args = []) {
  if (!Array.isArray(args)) {
    throw new Error(args + 'is not an Array')
  }
  let ctx = context || window
  let fn = this
  ctx.fn = fn
  let res = ctx.fn(...args)
  delete ctx.fn
  return res
}
Function.prototype.mbind = function (context, ...args) {
  let fn = this
  let ctx = context || window
  let bound = function (...args2) {
    return fn.apply(ctx, args.concat(args2))
  }
  let f = function () {}
  f.prototype = fn.prototype
  bound.prototype = new f()
  bound.prototype.constructor = bound
  return bound
}
let obj = {
  a: 1,
  b: 2,
}
let say = function (msg) {
  console.log(msg + this.a)
}
say.mcall(obj, 'aa')
say.mapply(obj, ['aa'])
say.bind(obj, 22)()
// bind in curry
