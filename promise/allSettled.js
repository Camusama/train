/*
 * @Author: yangtianbo5
 * @Date: 2020-09-23 16:48:36
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-23 17:01:02
 */
const fetch = function (idx) {
  return new Promise((resolve,reject) => {
    console.log(`start request ${idx}`)
    // 模拟请求时间
    const timeout = parseInt(Math.random() * 1e4)
    setTimeout(() => {
      console.log(`end request ${idx}`)
    
      Math.random()>=0.5?resolve(idx):reject(idx)
    }, timeout)
  })
}
const arr = Array.from({length: 10}, (v, k) => fetch(k))
promiseAllSetteld=function (arr) {
  let len=arr.length
  let count =0
  
  return new Promise((resolve,reject) => {
    let result=[]
    let handle=function(data,i,flag) {
      count++
      let tar={
        status:flag?'fullfilled':'reject',
      }
      if(flag){
        tar.value=data
      }else{
        tar.reason=data
      }
      result[i]=tar
      if(count>=len){
        resolve(result)
      }
    }
    for(let i in arr){
      Promise.resolve(arr[i]).then((res) => {
        handle(res,i,true)
      }).catch(e=>{
        handle(e,i,false)
      })
    }
  })
  
}
// Promise.allSettled(arr).then((res) => {
//   console.log('allend',res);
// })
promiseAllSetteld(arr).then((res) => {
    console.log('allend',res);
})