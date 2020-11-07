// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

//

// 参考以下这颗二叉搜索树：

//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：

// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：

// 输入: [1,3,2,6,5]
// 输出: true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var verifyPostorder = function (postorder) {
  //递归
  //后序，左右中，深度优先
  let dfs = function (arr, s, e) {
    //节点个数小于1
    if (s >= e) {
      return true
    }
    //对于后序遍历，最后一个值为根节点
    let root = arr[e]
    //从左往右，找到第一个比他大的，记为m
    let i = s
    while (arr[i] < root && i < e) {
      i++
    }
    let m = i
    //[s,m-1]为左子树，递归检查
    //[m,e-1]为右子树，每个必须比root大，否则false
    while (i < e) {
      if (arr[i] < root) return false
      i++
    }
    // console.log(s,e,m)
    return dfs(arr, s, m - 1) && dfs(arr, m, e - 1)
  }

  return dfs(postorder, 0, postorder.length - 1)
}
//
console.log(verifyPostorder(arr))
