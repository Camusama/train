// 我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：

// B.length >= 3
// 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// （注意：B 可以是 A 的任意子数组，包括整个数组 A。）

// 给出一个整数数组 A，返回最长 “山脉” 的长度。

// 如果不含有 “山脉” 则返回 0。

//

// 示例 1：

// 输入：[2,1,4,7,3,2,5]
// 输出：5
// 解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-mountain-in-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var longestMountain = function (A) {
  //枚举山顶
  //列举每个点的left right
  let left = []
  let right = []
  let len = A.length
  left[0] = 0
  right[len - 1] = 0
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      left[i] = left[i - 1] + 1
    } else {
      left[i] = 0
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (A[i] > A[i + 1]) {
      right[i] = right[i + 1] + 1
    } else {
      right[i] = 0
    }
  }
  let max = 0

  //    console.log(left,right)
  for (let i = 0; i < len; i++) {
    if (left[i] && right[i]) {
      max = Math.max(max, left[i] + right[i] + 1)
    }
  }
  return max
}
