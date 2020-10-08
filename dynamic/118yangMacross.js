// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/pascals-triangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var generate = function (numRows) {
  if (!numRows) {
    return []
  }
  let res = []
  for (let i = 0; i < numRows; i++) {
    res.push([])
  }
  res[0] = [1]
  for (let i = 1; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      let left, right
      if (j === 0) {
        left = 0
      } else {
        left = res[i - 1][j - 1]
      }
      if (j === i) {
        right = 0
      } else {
        right = res[i - 1][j]
      }
      res[i][j] = left + right
    }
  }
  return res
}
//优化，先fill 1  两边都是1不管
var generate = function (numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    let temp = Array.from({ length: i + 1 }, () => 1)
    res.push(temp)
    // 两边都是1不管
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}
