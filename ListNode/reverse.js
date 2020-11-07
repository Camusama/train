//三点pre cur next  每次只动一个next
let reverse = function (head) {
  let pre = null
  let cur = head
  //0>1>2
  //pre>cur>next
  while (cur) {
    let next = cur.next

    cur.next = pre
    pre = cur
    cur = next
  }

  //最后cur为Null 用pre
  return pre
}
//快慢指针，找中点
let getHalf = function (head) {
  let slow = head,
    fast = head
  //块慢指针 判断。next.next很重要
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
module.exports = {
  getHalf,
  reverse,
}
