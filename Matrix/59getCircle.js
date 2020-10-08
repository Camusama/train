// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  //四象模拟
  // 始终横竖横竖，每次遍历完后收缩
  //同54
  let total = n * n
  let count = 1
  let l = 0,
    r = n - 1
  let t = 0,
    b = n - 1
  let res = []
  for (let i = 0; i < n; i++) {
    res.push([])
  }
  while (count <= total) {
    //横 t 进
    for (let i = l; i <= r; i++) {
      res[t][i] = count
      count++
    }
    t++
    //竖r 进
    for (let i = t; i <= b; i++) {
      res[i][r] = count
      count++
    }
    r--
    //横b 退
    for (let i = r; i >= l; i--) {
      res[b][i] = count
      count++
    }
    b--
    //竖l 退
    for (let i = b; i >= t; i--) {
      res[i][l] = count
      count++
    }
    l++
  }
  return res
}
