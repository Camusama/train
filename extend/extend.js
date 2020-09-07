/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 14:21:52
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 14:31:14
 */
let father=function(name) {
  this.name=name
  this.call=function(){
    console.log(this.name)
  }
}
father.prototype.dth=function(){
  console.log('do sth');
}

let child=function(name,age) {
  father.call(this,name)
  this.age=age
  this.call=function() {
    console.log(this.age);
  } 
}
//修改子的prototype不影响父的，且子能找到父的protp
child.prototype=new father()
// child.prototype=Object.create(father.prototype)

// 测试
child.prototype.fu=function () {
  console.log('fu');
}
let fa=new father('fa')
let chi=new child('chi',20)
fa.dth()
// fa.fu()
chi.call()
chi.dth()
chi.fu()
console.log(fa,chi);
console.log(chi.__proto__.__proto__===fa.__proto__);