// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
// 示例 2:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reorder-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var reorderList = function (head) {
  let end = head
  let res = []
  while (end) {
    res.push(end)
    end = end.next
  }

  let n = res.length - 1
  let mid = (res.length / 2) | 0
  for (let i = 0; i < mid; i++) {
    res[i].next = res[n - i]
  }
  for (let i = n; i >= mid; i--) {
    if (i === mid) {
      res[i].next = null
      break
    }
    res[i].next = res[n - i + 1]
  }
  return head
}
//更应该想到的是栈来解决
//虽然js比上面慢一些
var reorderList = function (head) {
  let end = head
  let res = []
  while (end) {
    res.push(end)
    end = end.next
  }
  let pre = new ListNode()
  while (res.length) {
    let one = res.shift()
    //连前面的
    pre.next = one
    //总长为单数
    if (!res.length) {
      one.next = null
      break
    }
    let two = res.pop()
    one.next = two
    pre = two
    //总长为双数
    if (!res.length) {
      two.next = null
    }
  }

  return head
}
