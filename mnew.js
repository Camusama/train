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
Function.prototype.mbind = function (context) {
  let ctx = context || window
  let arg = [...arguments].slice(1)
  let _this = this
  let bound = function () {
    let newArg = [...arguments]
    return _this.apply(ctx, arg.concat(newArg))
  }
  bound.prototype = Object.create(this.prototype)
  return bound
}

let srtSOrt = function (arr = []) {
  if (!arr.length) return
  let s = arr[0]
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (arr.every(str => str[i] === c)) {
      res += c
    } else {
      break
    }
  }
  return res
}
console.log(srtSOrt(['aaafsd', 'aawwewer', 'aaddfff']))
