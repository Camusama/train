/*
 * @Author: yangtianbo5
 * @Date: 2020-09-22 14:41:13
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 14:41:32
 */
let throlet = function (
  fn,
  await,
  op = {
    leading: true,
    ctx: null,
    trailing: true,
  }
) {
  let pre = new Date(0).getTime()
  let timer
  return function (...args) {
    let cur = new Date().getTime()
    if (!op.leading) {
      if (timer) return
      timer = setTimeout(() => {
        timer = null
        fn.apply(op.ctx, args)
      }, await)
    } else if (cur - pre >= await) {
      fn.apply(op.ctx, args)
      pre = cur
    } else if (op.trailing) {
      clearTimeout(timer)
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
let throfn = throlet(fn, 2000, {
  leading: true,
})
// let intval = setInterval(() => {
//   defn(123)
// }, 100)
let intval = setInterval(() => {
  throfn(123)
}, 100)
setTimeout(() => {
  clearInterval(intval)
}, 6000)
