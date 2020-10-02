// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let add = function (l1, l2, v) {
    let v1 = l1 !== null ? l1.val : 0
    let v2 = l2 !== null ? l2.val : 0
    let sum = v1 + v2 + v
    let cur
    let val
    if (sum >= 10) {
      cur = sum % 10
      val = (sum / 10) | 0
    } else {
      cur = sum
      val = 0
    }
    return { cur, val }
  }
  let res = []
  let rest = 0
  while (l1 || l2 || rest) {
    let { cur, val } = add(l1, l2, rest)
    res.unshift(cur)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    rest = val
  }
  // res=res.reverse()
  return res.reduce((t, v) => {
    return { val: v, next: t }
  }, null)
}
var addTwoNumbers2 = function (l1, l2) {
  let add = function (l1, l2, v) {
    let v1 = l1 !== null ? l1.val : 0
    let v2 = l2 !== null ? l2.val : 0
    let sum = v1 + v2 + v
    let cur
    let val
    if (sum >= 10) {
      cur = sum % 10
      val = (sum / 10) | 0
    } else {
      cur = sum
      val = 0
    }
    return { cur, val }
  }
  let cur = new ListNode('head')
  let temp = cur
  let rest = 0
  while (l1 || l2 || rest) {
    let { cur, val } = add(l1, l2, rest)
    rest = val
    let node = new ListNode(cur)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    //接节点
    temp.next = node
    temp = temp.next
  }
  return cur.next
}
