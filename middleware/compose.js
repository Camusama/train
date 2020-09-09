/*
 * @Author: yangtianbo5
 * @Date: 2020-09-09 19:58:47
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-09 20:32:08
 */
let sleep=function (args) {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve()
    },args*100)
  })
}
let middleWare=Array.from({length:10},(v,i)=>async()=>{ await sleep(2) 
  console.log(i)})
function createNext(middleWare,next){
  return async function(){
      await middleWare(next)
  }
}
function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
let mcompose=(middleware) {
  // 记录执行到哪一个
  let index=-1
  return dispatch(0)
  function dispatch(i) {
    if(i<=index) return Promise.reject(new Error('next() twice'))

    index=i
    let fn=middleware[i]
    if (i===middleware.length) fn=next
    if(!fn) return Promise.resolve()
    try {
      return Promise.resolve(fn(contex,dispatch.bind(null,i+1)))
    } catch (error) {
      return Promise.reject(error)
    }
  }
}