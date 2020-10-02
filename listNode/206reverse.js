// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var reverseList = function (head) {
  if (!head) return null
  let cur = head
  let arr = []
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }
  arr = arr.reverse()
  let i = 0
  while (i < arr.length) {
    if (i === arr.length - 1) {
      arr[i].next = null
      break
    }
    arr[i].next = arr[i + 1]
    i++
  }
  return arr[0]
}
//正常反转
var reverseList2 = function (head) {
  if (!head) return null
  let cur = head
  let pre = null
  while (cur) {
    let next = cur.next
    //反转
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
//递归，可能溢站
var reverseList = function (head) {
  // 递归结束条件
  if (head === null || head.next === null) {
    return head
  }

  // 递归反转 子链表
  let newReverseList = reverseList(head.next)
  // 获取原来链表的第2个节点newReverseListTail
  let newReverseListTail = head.next
  // 调整原来头结点和第2个节点的指向
  newReverseListTail.next = head
  head.next = null

  // 将调整后的链表返回
  return newReverseList
}
