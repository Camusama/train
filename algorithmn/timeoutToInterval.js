/*
 * @Author: yangtianbo5
 * @Date: 2020-09-10 16:49:44
 * @Description:timeout 实现interval
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-10 17:24:42
 */
//这句模拟
let window = {}
;(() => {
  // 为甚么包再大函数里，因为定时任务能添加多个
  const list = new Set()
  function mInterval(fn, wait) {
    //为甚么用对象的属性去接，
    //因为不断再修改对象的属性，而不能直接修改这个东西
    let ref = {}
    let boot = function () {
      return setTimeout((...args) => {
        fn.apply(null, args)
        ref.cur = boot()
      }, wait)
    }
    ref.cur = boot()
    //总定时任务
    list.add(ref)
    return ref
  }
  function mclearInterval(ref) {
    clearTimeout(ref.cur)
    list.delete(ref)
  }
  function mTimeout(fn, wait) {
    let ref = {}
    let boot = function () {
      let cur = setInterval(() => {
        //apply第一个参空  严格模式下为函数调用者 非严格则为全局
        fn.apply(null)
        clearInterval(cur)
      }, wait)
      return cur
    }
    ref.cur = boot()
    list.add(ref)
    return ref
  }
  function mclearTime(ref) {
    clearInterval(ref.cur)
    list.delete(ref)
  }
  window.mInterval = mInterval
  window.mclearInterval = mclearInterval
  window.mTimeout = mTimeout
  window.mclearTime = mclearTime
})()

let p = window.mInterval(() => {
  console.log(Math.random())
}, 3000)
setTimeout(() => {
  window.mclearInterval(p)
}, 8000)

// let p = window.mTimeout(() => {
//   console.log(Math.random())
// }, 1000)
// setTimeout(() => {
//   window.mclearTime(p)
// }, 500)
// setInterval(() => {
//   console.log(Math.random())
// }, 3000)
