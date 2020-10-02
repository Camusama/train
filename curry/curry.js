/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 15:24:00
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 15:40:37
 */
let curry = function (fn) {
  //fn.length为函数参数个数
  if (fn.length <= 1) return fn
  let gen = function (...args) {
    if (fn.length === args.length) {
      return fn(...args)
    } else {
      //返回函数，拼接参数
      return (...args2) => {
        return gen(...args, ...args2)
      }
    }
  }
  return gen
}

function add(a, b, c) {
  return a + b + c
}
let _add = curry(add)
console.log(_add(1)(2)(3))
