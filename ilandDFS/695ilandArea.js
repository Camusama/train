var maxAreaOfIsland = function (grid) {
  if (!grid.length) {
    return 0
  }
  let col = grid.length
  let row = grid[0].length
  let max = 0
  let count = 0
  //还是消消乐，不同在于如何记载count
  //初次想到方法，改变外部count

  let dfs = function (grid, i, j, row, col) {
    if (i < 0 || j < 0 || i > col - 1 || j > row - 1 || grid[i][j] == 0) {
      return
    }
    grid[i][j] = 0
    count++
    dfs(grid, i + 1, j, row, col, count)
    dfs(grid, i - 1, j, row, col, count)
    dfs(grid, i, j + 1, row, col, count)
    dfs(grid, i, j - 1, row, col, count)
  }
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] == 1) {
        //初次想到方法
        count = 0
        dfs(grid, i, j, row, col, 0)
        max = Math.max(max, count)
      }
    }
  }
  return max
}

var maxAreaOfIsland = function (grid) {
  if (!grid.length) {
    return 0
  }
  let col = grid.length
  let row = grid[0].length
  let max = 0
  let count = 0
  let dfs = function (grid, i, j, row, col) {
    if (i < 0 || j < 0 || i > col - 1 || j > row - 1 || grid[i][j] == 0) {
      return 0
    }
    grid[i][j] = 0
    //查资料记录count方法，
    let cnt = 1
    cnt += dfs(grid, i + 1, j, row, col, count)
    cnt += dfs(grid, i - 1, j, row, col, count)
    cnt += dfs(grid, i, j + 1, row, col, count)
    cnt += dfs(grid, i, j - 1, row, col, count)
    return cnt
  }
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] == 1) {
        let cnt = dfs(grid, i, j, row, col, 0)
        max = Math.max(max, cnt)
      }
    }
  }
  return max
}
