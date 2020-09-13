function mNew(fn, ...args) {
  //等同于 let f=function(){}  f.prototype=fn.prototype let obj=new f()
  let obj = Object.create(fn.prototype)
  //执行构造函数
  let res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}
let cat = function (name) {
  this.name = name
}
let c = mNew(cat, 123)
console.log(c, c.__proto__ === cat.prototype)
