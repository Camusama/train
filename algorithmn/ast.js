let root = [1, null, 2, 3, 4]
var inorderTraversal = function (root) {
  let arr = []
  if (!root) return []
  //递归方法实现
  let dep = function (root) {
    if (root.left) dep(root.left)
    arr.push(root.val)
    if (root.right) dep(root.right)
  }
  dep(root)
  return arr
}
console.log('ast', inorderTraversal(root))
