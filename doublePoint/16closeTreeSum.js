// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

//

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum-closest
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var threeSumClosest = function (nums, target) {
  let arr = nums.sort((a, b) => a - b)
  // a,b,c 得枚举a[i]  pb=i+1  pc=n-1
  // 先排序
  // a+b+c>target pc--
  // a+b+c<target pb++
  let res = arr[0] + arr[1] + arr[2]
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1
    let k = arr.length - 1
    let cur
    while (j < k) {
      cur = arr[i] + arr[j] + arr[k]
      let rest = cur - target
      if (rest === 0) {
        return target
      } else if (rest > 0) {
        k--
      } else if (rest < 0) {
        j++
      }
      if (Math.abs(cur - target) < Math.abs(res - target)) {
        res = cur
      }
    }
  }
  return res
}
