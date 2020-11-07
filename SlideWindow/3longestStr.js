// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let m = {}
  //滑动窗口
  let j = 0
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (m[c] === undefined) {
      m[c] = i
    } else {
      j = Math.max(j, m[c] + 1)
      m[c] = i
    }
    max = Math.max(max, i - j + 1)
  }
  return max
}
