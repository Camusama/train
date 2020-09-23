/*
 * @Author: yangtianbo5
 * @Date: 2020-09-22 10:45:58
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 14:41:49
 */
let debounce = function (
  fn,
  await = 1000,
  op = {
    leading: true,
    ctx: null,
  }
) {
  var timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (op.leading) {
      let canrun = !timer
      timer = setTimeout(() => {
        timer = null
      }, await)
      if (canrun) fn.apply(op.ctx, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(op.ctx, args)
        timer = null
      }, await)
    }
  }
}

let fn = function (str) {
  console.log(str)
}
let defn = debounce(fn, 3000)
let intval = setInterval(() => {
  defn(123)
}, 100)
setTimeout(() => {
  clearInterval(intval)
}, 6000)
