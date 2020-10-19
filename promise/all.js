/*
 * @Author: yangtianbo5
 * @Date: 2020-09-23 16:38:31
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-24 09:44:11
 */
let promiseAll = function (arr) {
  return new Promise((resolve, reject) => {
    let len = arr.length
    let count = 0
    let result = []
    for (let i in arr) {
      Promise.resolve(arr[i])
        .then(res => {
          count++
          result[i] = res
          if (count >= len) resolve(result)
        })
        .catch(e => {
          reject(e)
        })
    }
  })
}
//all反过来就是promise.any

const fetch = function (idx) {
  return new Promise((resolve, reject) => {
    console.log(`start request ${idx}`)
    // 模拟请求时间
    const timeout = parseInt(Math.random() * 1e4)
    setTimeout(() => {
      console.log(`end request ${idx}`)
      Math.random() > 0.5 ? resolve(idx) : reject(idx)
    }, timeout)
  })
}
// const arr = Array.from({ length: 10 }, (v, k) => fetch(k))
let a = new Promise((resolve, reject) => {
  console.log(`start request ${1}`)
  // 模拟请求时间
  const timeout = parseInt(Math.random() * 1e4)
  setTimeout(() => {
    console.log(`end request ${1}`)
    reject(1)
  }, timeout)
})
let b = new Promise((resolve, reject) => {
  console.log(`start request $`)
  // 模拟请求时间
  const timeout = parseInt(Math.random() * 1e4)
  setTimeout(() => {
    console.log(`end request ${2}`)
    Math.random() > 0.5 ? resolve(2) : reject(2)
  }, timeout)
})
let arr = [a, b]
Promise.all(arr)
  .then(res => {
    console.log('allend', res)
  })
  .catch(e => {
    console.log('err', e)
    setTimeout(() => {
      for (let i of arr) {
        console.log(i)
      }
    }, 8000)
  })

// promiseAll(arr).then((res) => {
//   console.log('allend',res);
// })
