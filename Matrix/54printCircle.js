// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/spiral-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return []
  }
  //四象模拟
  // 始终横竖横竖，每次遍历完后收缩
  // 本方法为矩阵螺旋通解
  //l r b t 为上下左右界限
  let n = matrix
  let x = n[0].length
  let y = n.length
  let total = x * y
  let count = 0
  let l = 0,
    r = x - 1
  let t = 0,
    b = y - 1
  let res = []
  while (count < total) {
    //横 t 进
    for (let i = l; i <= r; i++) {
      res.push(n[t][i])
      count++
    }
    t++
    //竖r 进
    for (let i = t; i <= b; i++) {
      res.push(n[i][r])
      count++
    }
    r--
    //横b 退
    for (let i = r; i >= l; i--) {
      res.push(n[b][i])
      count++
    }
    b--
    //竖l 退
    for (let i = b; i >= t; i--) {
      res.push(n[i][l])
      count++
    }
    l++
  }
  res.length = total
  return res
}
