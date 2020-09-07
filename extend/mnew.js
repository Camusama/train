/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 13:54:08
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 13:54:53
 */
let cat = function (name) {
  this.name = name
  this.call = function () {
    console.log(this.name)
  }
}
function myNew(fn, ...args) {
  //create用现有对象（prototype）创建新对象的__proto__
  let obj = Object.create(fn.prototype)
  // let obj = {}
  // obj.__proto__ = fn.prototype
  //只用对obj执行以下构造函数即可，但要判断构造函数返回东西没,如果返回对象则用这个对象
  let result = fn.call(obj, ...args)
  return typeof result === 'object' ? result : obj
}
let mew = myNew(cat, 'cat')
console.log('myNew', mew)
console.log(mew.__proto__ === cat.prototype)