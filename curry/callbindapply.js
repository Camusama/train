/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 10:06:37
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-10 14:58:58
 */
Function.prototype.mcall = function (context) {
  //只拿第一个参，为绑定的上下文，无则window
  const ctx = context || window
  //取第一个参后面的所有参,注意转换arguments
  const args = [...arguments].slice(1)
  //把自己这个函数放进要绑定的上下文里，从而改变自己这个函数的this
  ctx.fn = this
  //用绑定的对象执行函数,关键
  let res = ctx.fn(...args)
  //执行完后去掉
  delete ctx.fn
  return res
}
let test = function (str1, str2, str3) {
  console.log(this.a, str1, str2, str3)
}
let obj = { a: 1 }
// test.mcall(obj, 'aaa')
// test.mcall(obj)
Function.prototype.mapply = function (context, arr = []) {
  if (!arr instanceof Array) {
    throw new Error(`not array`)
  }
  const ctx = context || window
  ctx.fn = this
  let res = ctx.fn(...arr)
  delete ctx.fn
  return res
}
// test.mapply(obj, ['aaa', 'bbb'])
// test.mapply(obj)
Function.prototype.myBind = function (context) {
  if (typeof this != 'function') {
    throw new TypeError('this is not a function')
  }
  const ctx = context || window

  //因为最后return的函数要能当构造函数 箭头函数不行
  let self = this
  //取其余参数,主要是拼接默认参数和新参数
  let args = [...arguments].slice(1)
  //来个继承处理，最后return的函数要继承传入的函数
  // let F = function () {}
  // F.prototype = this.prototype
  // bound.prototype=new F()
  //等同于Object.create
  let bound = function () {
    //这里的arguments是新传入的
    let newArgs = [...arguments]
    //拼接默认参数和新参数
    return self.apply(ctx, args.concat(newArgs))
  }
  bound.prototype = Object.create(this.prototype)
  //如果使用bound.prototype=new this.prototype
  //则需要bound.prototype.constructor=bound
  return bound
}
let cur = test.myBind(obj, 'str1', 'str3')
cur('str2')
let chi = new cur('123')
console.log(cur.prototype.__proto__ === test.prototype)

