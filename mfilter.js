Array.prototype.mfilter = function (fn, ctx) {
  if (typeof fn !== 'function') {
    throw new Error(`${fn} is not a function`)
  }
  let res = []
  for (let i in this) {
    fn.call(ctx, this[i], i, this) && res.push(this[i])
  }
  return res
}
let a = [1, 2, 3, 4, 5]
let r = a.mfilter(v => {
  return v > 2
})
console.log(r)
