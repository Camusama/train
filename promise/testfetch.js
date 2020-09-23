/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 10:06:37
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-08 15:48:44
 */

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
  let finish = 0
  let count = urls.length
  let res = []
  let fetchUrl = function () {
    let url = urls.shift()
    fetch(url)
      .then((r) => {
        res.push(r)
      })
      .catch((e) => {
        res.push(e)
      })
      .finally(() => {
        finish++
        if (urls.length) {
          fetchUrl()
        } else if (finish >= count) {
          callback(res)
        }
      })
  }
  for (let i = 0; i < max; i++) {
    fetchUrl()
  }
}
sendRequest(urls, 4, callback)
