var postorderTraversal = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let dfs = function (node) {
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
    res.push(node.val)
  }
  dfs(root)
  return res
}

//模板
var postorderTraversal = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let arr = [root]
  while (arr.length) {
    let node = arr.pop()
    if (node) {
      //这里维护一个先进后出
      //后序为左右中  则进去为中右左
      //这一遍仅收集
      arr.push(node)
      //关键中的关键 这个null  相当于每轮收集  都在之后加了个null,到null后还会继续添加left 或right
      //left 和right不为null  则还会往后继续添加
      //对于叶子节点 没有下一个right和left的了 下一个必为null  从而开始收集
      //从而达到深度优先的效果
      arr.push(null)
      if (node.right) arr.push(node.right)
      if (node.left) arr.push(node.left)
    } else {
      let next = arr.pop()
      res.push(next.val)
    }
    console.log(arr)
  }

  return res
}
