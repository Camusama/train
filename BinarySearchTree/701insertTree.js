/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据保证，新值和原始二叉搜索树中的任意节点值都不同。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/insert-into-a-binary-search-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//深度优先
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val)
  let cur = root
  while (cur) {
    if (val < cur.val) {
      if (!cur.left) {
        cur.left = new TreeNode(val)
        break
      } else {
        cur = cur.left
      }
    } else {
      if (!cur.right) {
        cur.right = new TreeNode(val)
        break
      } else {
        cur = cur.right
      }
    }
  }
  return root
}
