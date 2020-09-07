/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 11:17:45
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 13:15:42
 */
class eventEmiter{
  constructor(){
    this.queue={}
  }
  //加入任务队列
  on(name,cb){
    if(!this.queue[name]){
      this.queue[name]=[cb]
    }else{
      this.queue[name].push(cb)
    }
  }
  //取消队列中的相应cb
  off(name,cb){
    this.queue[name]=this.queue[name].filter((item) => {
      return item!==cb
    })
  }
  //触发任务队列
  emit(name,...args){
    if(!this.queue[name]){
      return 
    }
    this.queue[name].forEach(cb=>{
      cb.call(this,...args)
    })
  }
  //包装一下，相应cb执行后off掉包装的
  once(name,cb){
    let one=function(){
      cb.apply(this, arguments)
      this.off(name,one)
    }
    this.on(name,one)
  }
}

var event = new eventEmiter();

event.on('some_event', function(a,b) { 
    console.log('some_event1 事件触发',a,b); 
}); 
event.once('some_event', function(a,b) { 
  console.log('some_event2 once',a,b); 
}); 
setTimeout(function() { 
    event.emit('some_event','1',2); 
}, 1000); 
setTimeout(function() { 
  event.emit('some_event','1',2); 
}, 2000); 