/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 15:24:00
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 15:29:47
 */
let curry=function(fn) {
  let args=[].slice.call(arguments,1)
  return function(){
    let newArgs=[].slice.call(arguments,0)
    return fn.apply(this,args.concat(newArgs))
  }
}

function add(a, b, c) {
  return a + b + c;
}
let _add=curry(add)
console.log(_add(1)(2));