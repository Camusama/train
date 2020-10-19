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
// fetch(1)
//   .then(res => {
//     console.log(res)
//     return fetch(2)
//   })
//   .then(res => {
//     console.log(res)
//     return fetch(3)
//   })
//   .then(res => {
//     console.log(res)
//     return fetch(4)
//   })
// const arr = Array.from({ length: 10 }, (v, k) => fetch(k))
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
async function async1() {
  console.log('async1 start')
  // Promise.resolve(async2()).then(() => {
  //   console.log('async1 end')
  // })
  //陷阱在于 promise.resolve会执行后面跟的函数，且为同步
  //即执行完 async2  再跳出async1
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})

console.log('script end')
//node
// script start
// async1 start
// async2
// promise1
// script end

// async1 end
// promise2

// setTimeout

//浏览器
// script start
// init.js:1 async1 start
// init.js:1 async2
// init.js:1 promise1
// init.js:1 script end
//老版本的chrome这里不对， 360和node一致
// init.js:1 promise2
// init.js:1 async1 end

// undefined
// init.js:1 setTimeout
