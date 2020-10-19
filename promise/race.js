/*
 * @Author: yangtianbo5
 * @Date: 2020-09-23 16:38:31
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-23 16:47:30
 */
let promiseRace = function (arr) {
  return new Promise((resolve, reject) => {
    for (let i in arr) {
      Promise.resolve(arr[i])
        .then(res => {
          resolve(res)
          //return的作用是中断 别的不管了
          return
        })
        .catch(e => {
          reject(e)
          return
        })
    }
  })
}

const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`)
    // 模拟请求时间
    const timeout = parseInt(Math.random() * 1e4)
    setTimeout(() => {
      console.log(`end request ${idx}`)
      resolve(idx)
    }, timeout)
  })
}
// const arr = Array.from({length: 10}, (v, k) => fetch(k))
// let arr = [fetch(1), fetch(2), fetch(3)]
// promiseRace(arr).then(res => {
//   console.log('allend', res)
// })
// Promise.race(arr).then(res => {
//   console.log('allend', res)
// })
function timerPromisefy(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(delay)
    }, delay)
  })
}
var startDate = Date.now()
let array = [timerPromisefy(10), timerPromisefy(20), timerPromisefy(30)]
Promise.race(array).then(function (values) {
  console.log(values) // 10
  setTimeout(() => {
    for (let i of array) {
      console.log(i)
    }
  }, 200)
})
