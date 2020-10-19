// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }
  let res = []
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let dfs = function (digits, index = 0, str = '') {
    if (index >= digits.length) {
      res.push(str)
      return
    }

    let c = digits[index]
    let tar = map[Number(c)]
    // console.log(str,c,index)
    for (let i = 0; i < tar.length; i++) {
      dfs(digits, index + 1, str + tar[i])
    }
  }
  dfs(digits, 0, '')
  return res
}
