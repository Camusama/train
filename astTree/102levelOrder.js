// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 方案一：BFS 广度优先遍历实现 - 关键：使用中间数组存储当前层所有节点值
var levelOrder = function (root) {
  if (!root) return []
  //本层值
  let getVal = function (arr) {
    let res = []
    for (let i of arr) {
      res.push(i.val)
    }
    return res
  }
  //下层节点
  let getNode = function (arr) {
    let res = []
    for (let i of arr) {
      if (i.left) res.push(i.left)
      if (i.right) res.push(i.right)
    }
    return res
  }
  let nodes = [root]
  let res = []
  while (nodes.length) {
    res.push(getVal(nodes))
    nodes = getNode(nodes)
  }
  return res
}
// 解法二 DFS 深度优先遍历 - 关键：将当前所在层信息信息带入 以便将值正确插入到结果集位置
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let dfs = function (node, level) {
    if (level >= res.length) res[level] = []
    res[level].push(node.val)
    node.left && dfs(node.left, level + 1)
    node.right && dfs(node.right, level + 1)
  }
  dfs(root, 0)
  return res
}
