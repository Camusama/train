// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

// [["a","b","c","e"],
// ["s","f","c","s"],
// ["a","d","e","e"]]

// 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

//

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var exist = function (board, word) {
  if (!board.length) {
    return false
  }
  let xlen = board.length
  let ylen = board[0].length
  let dfs = function (x, y, idx = 0) {
    if (x < 0 || x >= xlen || y < 0 || y >= ylen) {
      return false
    }
    let cur = board[x][y]
    if (cur == -1 || cur !== word[idx]) {
      return false
    }
    board[x][y] = -1
    if (idx >= word.length - 1) {
      return true
    }
    let res =
      dfs(x + 1, y, idx + 1) ||
      dfs(x - 1, y, idx + 1) ||
      dfs(x, y + 1, idx + 1) ||
      dfs(x, y - 1, idx + 1)
    //这波搞完 要还原,本题精髓
    board[x][y] = cur
    return res
  }
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
