/*
 * @Author: yangtianbo5
 * @Date: 2020-09-23 16:38:31
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-24 09:44:11
 */
let promiseAll=function (arr) {
  return new Promise((resolve,reject) => {
    let len =arr.length 
    let count=0
    let result=[]
    for(let i in arr){
      Promise.resolve(arr[i]).then((res) => {
        count++
        result[i]=res
        if(count>=len) resolve(result)
      }).catch(e=>{
        reject(e)
      })
    }
  })
}
//all反过来就是promise.any

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
const arr = Array.from({length: 10}, (v, k) => fetch(k))
promiseAll(arr).then((res) => {
  console.log('allend',res);
})