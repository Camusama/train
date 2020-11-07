// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 需要用一个O(n) O(1)的解法

// 如下几步走
// 找到前半部分链表的尾节点。
// 反转后半部分链表。
// 判断是否回文。
// 恢复链表。
// 返回结果。
function ListNode(val) {
  this.val = val
  this.next = null
}
let { reverse, getHalf } = require('./reverse')
var isPalindrome = function (head) {
  if (!head) {
    return true
  }
  let half = getHalf(head)
  let rhalf = reverse(half)
  let cur = head
  while (cur && rhalf) {
    if (cur.val !== rhalf.val) return false
    cur = cur.next
    rhalf = rhalf.next
  }
  //恢复链表
  let originhalf = reverse(rhalf)
  half.next = originhalf
  return true
}
let testnode = new ListNode(2)
console.log(isPalindrome(testnode))
