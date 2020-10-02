// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// v说明：

// 给定的 n 保证是有效的。
//快慢指针
var removeNthFromEnd = function (head, n) {
  //倒数第n步 相当于距离结尾n-1步，快慢指针，快指针先走n-1步，然后走到末尾，慢指针则走到倒数n-1步的位置
  //这里相当于慢指针走到离结尾n步，即倒数第n个节点的前一个
  // 则快指针先走n步
  let fast = head
  while (n) {
    n--
    fast = fast.next
  }
  //如果此时fast为null，代表已经走到最后一个节点之后，n===length，去掉的是第一个节点,则返回第二个节点
  if (!fast) {
    return head.next
  }
  let slow = head
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}
