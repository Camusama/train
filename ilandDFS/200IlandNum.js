// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-islands
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var numIslands = function (grid) {
  if (!grid.length) {
    return 0
  }
  //dfs
  //就是点击某个点，消除掉连接的点
  let clearI = function (grid, i, j, col, row) {
    // console.log(i,j)
    if (i < 0 || j < 0 || i > row - 1 || j > col - 1 || grid[j][i] == '0') {
      return
    }
    grid[j][i] = '0'
    clearI(grid, i + 1, j, col, row)
    clearI(grid, i - 1, j, col, row)
    clearI(grid, i, j + 1, col, row)
    clearI(grid, i, j - 1, col, row)
  }
  let col = grid.length
  let row = grid[0].length
  let count = 0
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      if (grid[j][i] == '1') {
        count++
        clearI(grid, i, j, col, row)
      }
    }
  }
  return count
}
