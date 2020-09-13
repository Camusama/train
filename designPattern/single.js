// 单例模式
//每次返回同一个对象
//立即执行的返回闭包函数
let singleTon = (function () {
  var ins
  let cat = function (name) {
    this.name = name
  }
  return function () {
    if (!ins) {
      ins = new cat(...arguments)
    }
    return ins
  }
})()
let a = singleTon(11)
let b = singleTon(22)
//name仍未11
console.log('singleton', a === b, a, b)
