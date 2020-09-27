function Compile(el, vm) {
  this.$vm = vm
  this.$el = this.isElementNode(el) ? el : document.querySelector(el)

  if (this.$el) {
    this.$fragment = this.node2Fragment(this.$el)
    this.init()
    this.$el.appendChild(this.$fragment)
  }
}

Compile.prototype = {
  constructor: Compile,
  node2Fragment: function (el) {
    var fragment = document.createDocumentFragment(),
      child

    // 将原生节点拷贝到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }

    return fragment
  },

  init: function () {
    this.compileElement(this.$fragment)
  },

  compileElement: function (el) {
    var childNodes = el.childNodes,
      me = this

    ;[].slice.call(childNodes).forEach(function (node) {
      var text = node.textContent
      var reg = /\{\{(.*)\}\}/

      if (me.isElementNode(node)) {
        //正常节点
        me.compile(node)
      } else if (me.isTextNode(node) && reg.test(text)) {
        //文本节点 取出{{}}内的
        me.compileText(node, RegExp.$1.trim())
      }
      //有子节点则迭代
      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node)
      }
    })
  },
  // 正常节点
  compile: function (node) {
    var nodeAttrs = node.attributes,
      me = this

    ;[].slice.call(nodeAttrs).forEach(function (attr) {
      var attrName = attr.name
      //v-
      if (me.isDirective(attrName)) {
        var exp = attr.value
        var dir = attrName.substring(2)
        // 事件指令
        //on
        if (me.isEventDirective(dir)) {
          compileUtil.eventHandler(node, me.$vm, exp, dir)
          // 普通指令
        } else {
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp)
        }
        //去掉dom上的指令
        node.removeAttribute(attrName)
      }
    })
  },

  compileText: function (node, exp) {
    compileUtil.text(node, this.$vm, exp)
  },

  isDirective: function (attr) {
    return attr.indexOf('v-') == 0
  },

  isEventDirective: function (dir) {
    return dir.indexOf('on') === 0
  },

  isElementNode: function (node) {
    return node.nodeType == 1
  },

  isTextNode: function (node) {
    return node.nodeType == 3
  },
}

// 指令处理集合
var compileUtil = {
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },

  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },

  model: function (node, vm, exp) {
    this.bind(node, vm, exp, 'model')

    var me = this,
      val = this._getVMVal(vm, exp)
    node.addEventListener('input', function (e) {
      var newValue = e.target.value
      if (val === newValue) {
        return
      }
      //视图更新，赋值
      me._setVMVal(vm, exp, newValue)
      val = newValue
    })
  },

  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },
  //TODO:mvue:3.关键 调用,视图绑定都需要调用bind
  //bind里才调用new Watcher, 触发watcher.prototype.get,
  bind: function (node, vm, exp, dir) {
    var updaterFn = updater[dir + 'Updater']

    updaterFn && updaterFn(node, this._getVMVal(vm, exp))

    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue)
    })
  },

  // 事件处理
  eventHandler: function (node, vm, exp, dir) {
    var eventType = dir.split(':')[1],
      fn = vm.$options.methods && vm.$options.methods[exp]

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },
  // 监听子属性的同时监听父属性的变更，这样，父属性改变时，子属性的watcher也能收到通知进行update
  // 这一步是在 this.get() --> this.getVMVal() 里面完成，forEach时会从父级开始取值，间接调用了它的getter
  _getVMVal: function (vm, exp) {
    var val = vm
    exp = exp.split('.')
    exp.forEach(function (k) {
      // forEach时会从父级开始取值，间接调用了它的getter
    // 触发了addDep(), 在整个forEach过程，当前wacher都会加入到每个父级过程属性的dep
    // 例如：当前watcher的是'child.child.name', 那么child, child.child, child.child.name这三个属性的dep都会加入当前watcher
      val = val[k]
    })
    return val
  },

  _setVMVal: function (vm, exp, value) {
    var val = vm
    exp = exp.split('.')
    exp.forEach(function (k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  },
}

// v bind 调用相应更新回调，watch update时触发
var updater = {
  textUpdater: function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value
  },

  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value
  },

  classUpdater: function (node, value, oldValue) {
    var className = node.className
    className = className.replace(oldValue, '').replace(/\s$/, '')

    var space = className && String(value) ? ' ' : ''

    node.className = className + space + value
  },

  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value
  },
}
