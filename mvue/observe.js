// 数据劫持
class Observe {
  constructor(data) {
    this.observe(data)
  }
  // 使用object.defineProperty监听对象, 数组暂时不考虑,太复杂
  observe(data) {
    if (data && typeof data === 'object') {
      // console.log(data);
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }

  // 劫持属性
  defineReactive(obj, key, value) {
    // 递归遍历
    this.observe(value)
    // 创建依赖收集器
    const dep = new Dep()
    // console.log(dep);
    Object.defineProperty(obj, key, {
      // obj为已有对象, key为属性, 第三个参数为属性描述符
      enumerable: true, // enumerable：是否可以被枚举(for in)，默认false
      configurable: false, // 是否可以被删除，默认false
      // 获取
      get() {
        // console.log(dep.target);
        // 订阅数据变化时, 往Dep中添加观察者
        // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      // 设置
      set: newValue => {
        // 这里要注意新设置的值也需要劫持他的属性
        this.observe(newValue)
        if (newValue !== value) {
          value = newValue
        }
        // 通知订阅器找到对应的观察者,通知观察者更新视图
        dep.notify()
      },
    })
  }
}
// 加载渲染过程

// 　　父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted

// 子组件更新过程
// 　　父beforeUpdate->子beforeUpdate->子updated->父updated

// 父组件更新过程
// 　　父beforeUpdate->父updated

// 销毁过程
// 　　父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
