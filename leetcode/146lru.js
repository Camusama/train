/*
 * @Author: yangtianbo5
 * @Date: 2020-09-29 18:32:09
 * @Description: lru  
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-29 18:41:20
 */

var LRUCache = function(capacity) {
  this.arr=[]
  this.capacity=capacity
};

// 每次set或put都挪到最后
LRUCache.prototype.get = function(key) {
  let index=this.arr.findIndex(i=>i.key===key)
  if(index!=-1){
      let value=this.arr[index].value
      this.arr.splice(index,1)
      this.arr.push({
          key,
          value
      })
      return value
  }else{
      return -1
  }
};

LRUCache.prototype.put = function(key, value) {
  let index=this.arr.findIndex(i=>i.key===key)
  if(index!=-1){
      this.arr.splice(index,1)
       this.arr.push({
          key,
          value
      })
  }else{
    //超过容量，把最前去掉
      if(this.arr.length>=this.capacity) this.arr.shift()
      this.arr.push({
          key,
          value
      })
  }
};

class LRUCache2 {
  constructor(capacity) {
      this.capacity = capacity
      this.map = new Map();
  }

  get(key) {
      let val = this.map.get(key);
      if (val === undefined) return -1;

      this.map.delete(key); // 因为被用过一次，原有位置删除
      this.map.set(key, val); // 放入最下面表示最新使用
      return val;
  }

  put(key, val) {
      if (this.map.has(key)) this.map.delete(key); // 如果有，删除
      if (this.map.size > this.capacity) {
        // 这里有个知识点
        // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
        // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
        this.map.delete(this.map.entries().next().value[0])
      }
      this.map.set(key, val); // 放到最下面表示最新使用
  }
}
