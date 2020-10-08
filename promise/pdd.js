const { resolve } = require('path')

/*
 * @Author: yangtianbo5
 * @Date: 2020-09-25 10:30:15
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-25 15:06:26
 */
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
fetch(1)
  .then(res => {
    console.log(res)
    return fetch(2)
  })
  .then(res => {
    console.log(res)
    return fetch(3)
  })
  .then(res => {
    console.log(res)
    return fetch(4)
  })
const arr = Array.from({ length: 10 }, (v, k) => fetch(k))
let getArr = function (arr) {
  let count = 0
  let len = arr.length
  let res = []
  return new Promise((resolve, reject) => {
    let handleResolve = () => {
      if (count === len) {
        resolve(res)
      }
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then(r => {
          count++
          res[i] = r
          handleResolve()
        })
        .catch(e => {
          count++
          res[i] = e
          handleResolve()
        })
    }
  })
}
// console.log(
//   getArr(arr).then(res => {
//     console.log(res)
//   })
// )
