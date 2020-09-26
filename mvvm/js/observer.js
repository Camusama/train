function Observer(data) {
  this.data = data
  this.walk(data)
}

Observer.prototype = {
  constructor: Observer,
  walk: function (data) {
    var me = this
    Object.keys(data).forEach(function (key) {
      me.convert(key, data[key])
    })
  },
  convert: function (key, val) {
    this.defineReactive(this.data, key, val)
  },

  defineReactive: function (data, key, val) {
    var dep = new Dep()
    var childObj = observe(val)
    // 注意这里，其实dep相对于get set函数是闭包
    //用来持久化
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不能再define
      get: function () {
        //TODO:mvue:2.关键 调用,这里如果compile访问了就有Dep.target
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set: function (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        // 新的值是object的话，进行监听
        childObj = observe(newVal)
        // 通知订阅者
        dep.notify()
      },
    })
  },
}

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }

  return new Observer(value)
}

var uid = 0

function Dep() {
  this.id = uid++
  this.subs = []
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  //只会被watcher调用depend，则在wathcer中的dep里加入自己
  depend: function () {
    // Dep.target指向一个Watcher实例
    Dep.target.addDep(this)
  },

  removeSub: function (sub) {
    var index = this.subs.indexOf(sub)
    if (index != -1) {
      this.subs.splice(index, 1)
    }
  },

  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  },
}

Dep.target = null
