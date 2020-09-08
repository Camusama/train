/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 22:25:06
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-08 14:46:01
 */

// function fetch(url = '') {
//   const xhr = new XMLHttpRequest()
//   xhr.onload = () => {
//     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//       console.log(xhr.responseText)
//     } else {
//       console.log('Something wrong!')
//     }
//   }
//   xhr.open('get', url, true)
//   xhr.send(null)
// }
// 生成[0-9]
const urls = Array.from({length: 10}, (v, k) => k)

const fetch = function (idx) {
  return new Promise((resolve) => {
    console.log(`start request ${idx}`)
    // 模拟请求时间
    const timeout = parseInt(Math.random() * 1e4)
    setTimeout(() => {
      console.log(`end request ${idx}`)
      resolve(idx)
    }, timeout)
  })
}

const max = 4

const callback = (res) => {
  console.log('run callback' + res)
}

function sendRequest(urls = [], max = 1, callback = () => {}) {
  let count = urls.length
  let finish = 0
  let result = []
  //本方法要自动修改urls队列
  let i = 0
  let fetchUrl = function () {
    let url = urls.shift()
    // let url = urls[i]
    // i++
    fetch(url)
      .then((r) => {
        result.push(r)
      })
      .catch((e) => {
        result.push(e)
      })
      .finally(() => {
        //关键，自动走下一步逻辑
        finish++
        if (urls.length) {
          fetchUrl()
        } else {
          if (finish === count) {
            callback(result)
          }
        }
      })
  }
  //关键
  for (let i = 0; i < max; i++) {
    fetchUrl()
  }
}

sendRequest(urls, 3, callback)
