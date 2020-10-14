// 用 Javascript 构造一个双向链表，并且实现它的插入和删除方法，
// 例如 insert(position, element) 表示在 position 位置插入值为 element 的节点，removeAt(position) 表示删除 position 位置的节点。
function Node(val) {
  this.val = val
  this.pre = null
  this.next = null
}
function DoublyLinkedList() {
  this.first = null
  this.last = null
  //防环
  this.size = 0
  //查找，正或反， 双向链表特色
  this.find = function (pos) {
    if (pos >= this.size || pos < 0) {
      return false
    }
    //前半
    if (pos < this.size >> 1) {
      let cur = this.first
      //走pos-1步
      for (let i = 0; i < pos; i++) {
        cur = cur.next
      }
      return cur
    } else {
      //后半
      let cur = this.last
      //走size-pos-1步,反着类似数组
      for (let i = this.size - 1; i > pos; i--) {
        cur = cur.pre
      }
      return cur
    }
  }
  //插入是在指定位置的前面插入
  //pos===this.size,指向最后一个的后一个，则是在末尾插入
  this.insert = function (pos, val) {
    let nod = new Node(val)
    //如果链表为空
    // console.log('pre size', this.size)
    if (this.size === 0) {
      this.first = nod
      this.last = nod
      this.size++
      return
    }
    //为末尾
    //last指向新
    //新pre指向旧尾
    //旧尾指向新
    if (pos === this.size) {
      let temp = this.last
      this.last = nod
      temp.next = nod
      nod.pre = temp
      this.size++
      return
    }
    //为头
    //first指向新
    //新next向旧头
    //旧头pre指向新
    if (pos === 0) {
      let temp = this.first
      this.first = nod
      nod.next = temp
      temp.pre = nod
      this.size++
      return
    }
    //正常
    //新next指向旧
    //新pre指向旧pre
    //旧.pre.next指向新
    //旧.pre指向新
    let cur = this.find(pos)
    if (!cur) {
      console.log('invalid pos')
      return
    }
    let pre = cur.pre
    //开始
    nod.next = cur
    nod.pre = pre
    pre.next = nod
    cur.pre = nod
    this.size++
  }
  this.removeAt = function (pos) {
    if (this.size <= 0) {
      return
    }
    //删除唯一
    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size--
    }
    //删除头
    if (pos === 0) {
      //first指向  next
      //新 头pre指向原头pre
      let temp = this.first
      this.first = this.first.next
      this.first.pre = temp.pre
      this.size--
      return
    }
    //删除尾
    if (pos === this.size - 1) {
      //last 指向pre
      //新last.next指向原来的last.next
      let temp = this.last
      this.last = this.last.pre
      this.last.next = temp.next
      this.size--
      return
    }
    //正常
    let cur = this.find(pos)
    if (!cur) {
      console.log('invalid pos')
      return
    }
    //pre.next指向后
    //next.pre指向前
    let pre = cur.pre
    let next = cur.next
    pre.next = next
    next.pre = pre
    this.size--
  }
  this.toString = function () {
    let res = ''
    let cur = this.first
    while (cur) {
      res += cur.val
      cur = cur.next
    }
    return res
  }
}

let myLink = new DoublyLinkedList()
myLink.insert(2, 'A')
myLink.insert(1, 'B')
myLink.insert(1, 'C')
myLink.insert(0, 'D')
console.log(myLink.toString())
myLink.insert(4, 'F')
myLink.insert(4, 'G')
console.log(myLink.toString())
myLink.removeAt(0)
console.log(myLink.toString())
myLink.removeAt(2)
myLink.removeAt(2)
myLink.removeAt(2)
// myLink.removeAt(2)
console.log(myLink.toString())

// 情况分类	添加	删除
// 最好 头节点	O(1)	O(1)
// 最差 尾节点	O(n)	O(n)
// 平均	O(n)	O(n)
