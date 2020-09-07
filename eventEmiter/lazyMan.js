/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 13:27:55
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 14:43:02
 */
class LazyMan{
  constructor(name){
    this.name=name
    this.queue=[]
    this.queue.push(() => {
      //每个任务都形如 do sth  this.next()
      console.log(`my name is${name}`);
      this.next()
    })
    //这里用来插队，后面sleepFirst用来插到这里前面
    //总链式调用起点，注意之后push时this.next都在队列函数里，不要放外面执行了
    setTimeout(() => {
      this.next()
    })
  }
  next(){
    let fn=this.queue.shift()
    fn&&fn()
  }
  sleep(n){
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`wake up ${n}s`);
        this.next()
      },n*1000)
    })
    return this

  }
  eat(name){
    this.queue.push(() => {
      console.log(`eat ${name}`)
      this.next()
    })
    return this
  }
  sleepFirst(n){
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log(`wake up ${n}s`);
        this.next()
      },n*1000)
    })
    return this
  }
}
//命令就是初始化队列，然后在构造函数中起点触发执行
// new LazyMan("Hank")
// new LazyMan("Hank").sleep(2).eat("dinner")
// new LazyMan("Hank").eat("dinner").eat("supper")
new LazyMan("Hank").sleepFirst(2).eat("supper")
//class里方法都在prototype上
let man =new LazyMan('aaa')
console.log(man.sleep===man.__proto__.sleep);