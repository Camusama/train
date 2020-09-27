/*
 * @Author: yangtianbo5
 * @Date: 2020-09-25 10:30:15
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-25 15:06:26
 */
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
fetch(1).then((res) => {
    console.log(res);
    return fetch(2)
}).then((res) => {
    console.log(res);
    return fetch(3)
}).then((res) => {
  console.log(res)
  return fetch(4)
})
// const arr = Array.from({length: 10}, (v, k) => fetch(k))
