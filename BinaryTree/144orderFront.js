//前序遍历 递归法
var preorderTraversal = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let dfs = function (node) {
    if (!node) {
      return
    }
    res.push(node.val)
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return res
}

//先序遍历
//先序的迭代最简单
var preorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let arr = [root]
  while (arr.length) {
    let node = arr.pop()
    if (node) {
      //这里保持一个后进先出
      //中左右，所以左后进
      //这种方法nb在于前中后序都一样
      if (node.right) arr.push(node.right)
      if (node.left) arr.push(node.left)
      arr.push(node)
      arr.push(null)
    } else {
      let next = arr.pop()
      res.push(next.val)
    }
  }
  return res
}
