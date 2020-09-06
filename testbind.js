Function.prototype.mBind = function (context) {
  let args = [...arguments].slice(1)
  let F = function () {}
  F.prototype = this.prototype
  let self = this
  let res = function () {
    let newArgs = [...arguments]
    return self.apply(context, args.concat(newArgs))
  }
  res.prototype = new F()
  return res
}
let test = function (str1, str2, str3) {
  console.log(this.a, str1, str2, str3)
}
let obj = { a: 1 }
let cur = test.mBind(obj, 'str1', 'str3')
cur('str2')
let chi = new cur('123')
console.log(cur.prototype.__proto__ === test.prototype)
