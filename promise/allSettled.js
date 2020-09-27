/*
 * @Author: yangtianbo5
 * @Date: 2020-09-23 16:48:36
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-24 09:52:48
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
Promise.resolve(value)
// 返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，
// 如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
//实际上 then里链式调用return的相当于这个 ，同样会判断promise
// Promise.allSettled(arr).then((res) => {
//   console.log('allend',res);
// })
promiseAllSetteld(arr).then((res) => {
    console.log('allend',res);
})