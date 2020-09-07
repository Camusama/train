/*
 * @Author: yangtianbo5
 * @Date: 2020-09-07 11:14:32
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-07 11:16:52
 */
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var event = new events.EventEmitter();

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