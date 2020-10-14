// 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。

//

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var connect = function (root) {
  if (!root) {
    return root
  }
  let getnext = function (node, parent) {
    if (!node) return null
    if (parent.left === node) return parent.right
    if (parent.right === node) return parent.next ? parent.next.left : null
    return null
  }
  let add = function (node) {
    let left = node.left
    let right = node.right
    if (left) left.next = getnext(left, node)
    if (right) right.next = getnext(right, node)
  }
  let getNode = function (arr) {
    let res = []
    for (let i of arr) {
      if (i.left) res.push(i.left)
      if (i.right) res.push(i.right)
    }
    return res
  }
  let bfs = function (arr) {
    for (let i of arr) {
      add(i)
    }
    if (arr.length && arr[0].left) {
      bfs(getNode(arr))
    }
  }
  bfs([root])
  return root
}

//经典BFS
var connect = function (root) {
  if (!root) {
    return root
  }
  let arr = [root]
  //bfs
  while (arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i + 1]
    }
    let temp = []
    for (let i of arr) {
      if (i.left) temp.push(i.left)
      if (i.right) temp.push(i.right)
    }
    arr = temp
  }
  return root
}
