// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var rotateRight = function (head, k) {
  let c = head
  let count = 0
  while (c) {
    count++
    c = c.next
  }
  //先优化移动次数
  k = k % count
  let move = function (start) {
    if (count === 0) return null
    if (count === 1) return start
    let s = start.next
    let e = start
    while (s.next) {
      s = s.next
      e = e.next
    }
    e.next = null
    s.next = start
    return s
  }
  let init = head
  while (k) {
    k--
    init = move(init)
  }
  return init
}
var rotateRight2 = function (head, k) {
  if (!head || !head.next) return head
  let c = head
  let count = 0
  while (c) {
    count++
    c = c.next
  }
  //先优化移动次数
  k = k % count
  if (!k) return head
  //快慢指针，取到倒数第k+1个节点，则快先走k步
  let fast = head
  let slow = head
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  //新表的头是现在慢的下一个
  let cur = slow.next
  //切开链表重连接
  slow.next = null
  fast.next = head
  return cur
}
