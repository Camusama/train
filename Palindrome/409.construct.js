// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// 注意:
// 假设字符串的长度不会超过 1010。

// 示例 1:

// 输入:
// "abccccdd"

// 输出:
// 7

// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindrome
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var longestPalindrome = function (s) {
  //构造，不是找出
  let m = {}
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    m[c] = m[c] ? m[c] + 1 : 1
  }
  let len = 0
  for (let i in m) {
    //某个字符出现2+次，都放进来 /2|0 *2
    if (m[i] >= 2) {
      len += Math.floor(m[i] / 2) * 2
    }
    //某个字符出现奇数次，则加入进来，只能加一次
    //没加时len为偶数，加了后变奇数了，所以len%2===0保证只一次
    if (m[i] % 2 === 1 && len % 2 === 0) {
      len++
    }
  }
  return len
}
