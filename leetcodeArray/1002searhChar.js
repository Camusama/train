// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。

//

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-common-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var commonChars = function (A) {
  if (!A.length) {
    return []
  }
  if (A.length === 1) {
    return A[0].split('')
  }
  let res = []
  for (let i = 0; i < A[0].length; i++) {
    let c = A[0][i]
    if (A.every(t => t.includes(c))) {
      res.push(c)
      A = A.map(str => str.replace(c, ' '))
    }
  }
  return res
}
