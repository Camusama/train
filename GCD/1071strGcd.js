// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

// 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

//

// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var gcdOfStrings = function (str1, str2) {
  //这句话是精髓
  if (str1 + str2 !== str2 + str1) {
    return ''
  }
  let gcd = function (a, b) {
    return a === 0 ? b : gcd(b % a, a)
  }
  return str1.slice(0, gcd(str1.length, str2.length))
}
