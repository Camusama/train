const compileUtils = {
  //取出里头的a.b.c
  getValue(expr, vm) {
    return expr.split('.').reduce((data, cur) => {
      return data[cur]
    }, vm.$data)
  },
  setValue(expr, vm, inputVal) {
    return expr.split('.').reduce((data, cur, i, arr) => {
      if (i === arr.length - 1) data[cur] = inputVal
      return data[cur]
    }, vm.$data)
  },
  getContentVal(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(args[1], vm)
    })
  },
  text(node, expr, vm) {
    let value
    // 处理{{}}的格式
    if (expr.indexOf('{{') !== -1) {
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        //args参数分别为
        //a 第一个参正则匹配到 的内容
        //第2-n个参：正则分组匹配到的内容，上面args[1]为内部的
        //n+1个参：整个字符串
        // 绑定观察者
        new Watcher(vm, args[1], newValue => {
          // 处理{{person.name}}--{{person.age}}这种格式的数据,不然更新值的时候会全部替换了
          this.upDater.textUpDater(node, this.getContentVal(expr, vm))
        })
        // 获取{{}}中的属性
        return this.getValue(args[1], vm)
      })
    } else {
      new Watcher(vm, expr, newValue => {
        this.upDater.textUpDater(node, newValue)
      })
      // 获取当前要节点要更新展示的值
      value = this.getValue(expr, vm)
    }
    // 更新的工具类
    this.upDater.textUpDater(node, value)
  },
  html(node, expr, vm) {
    const value = this.getValue(expr, vm)
    // 绑定观察者
    new Watcher(vm, expr, newValue => {
      this.upDater.htmlUpDater(node, newValue)
    })
    // 更新的工具类
    this.upDater.htmlUpDater(node, value)
  },
  model(node, expr, vm) {
    const value = this.getValue(expr, vm)
    // 绑定观察者
    new Watcher(vm, expr, newValue => {
      this.upDater.modelUpDater(node, newValue)
    })
    node.addEventListener('input', e => {
      // 设置值
      this.setValue(expr, vm, e.target.value)
    })
    // 更新的工具类
    this.upDater.modelUpDater(node, value)
  },
  on(node, expr, vm, eventName) {
    // 获取当前指令对应的方法
    const fn = vm.$options.methods && vm.$options.methods[expr]
    // console.log(fn);
    node.addEventListener(eventName, fn.bind(vm), false)
  },
  upDater: {
    // v-text指令的更新函数
    textUpDater(node, value) {
      node.textContent = value
    },
    // v-html指令的更新函数
    htmlUpDater(node, value) {
      node.innerHTML = value
    },
    // v-model指令的更新函数
    modelUpDater(node, value) {
      node.value = value
    },
  },
}
class Myvue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.$options = options
    if (this.$el) {
      // 1.实现一个数据观察者
      new Observe(this.$data)

      // 2.实现一个指令解析器
      new Compile(this.$el, this)

      // 3.实现this代理, 访问数据可以直接通过this访问
      this.proxyData(this.$data)
    }
  }
  //把this访问代理到this.$data
  proxyData(data) {
    for (const key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(newValue) {
          data[key] = newValue
        },
      })
    }
  }
}
// 观察者
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 存储旧值
    this.oldValue = this.getOldValue()
  }
  // 获取旧值
  getOldValue() {
    // 在获取旧值的时候将观察者挂在到Dep订阅器上
    Dep.target = this
    const oldValue = compileUtils.getValue(this.expr, this.vm)
    // 销毁Dep上的观察者
    Dep.target = null
    return oldValue
  }

  // 更新视图
  upDate() {
    // 获取新值
    const newValue = compileUtils.getValue(this.expr, this.vm)
    if (newValue !== this.oldValue) {
      this.cb(newValue)
    }
  }
}

// 订阅器
class Dep {
  constructor() {
    this.subs = []
  }
  // 收集观察者
  addSub(watcher) {
    this.subs.push(watcher)
  }
  // 通知观察者去更新视图
  notify() {
    this.subs.forEach(watcher => {
      watcher.upDate()
    })
  }
}
