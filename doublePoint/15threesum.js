// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//根本上来说 双指针用来优化必须双重或多重循环时的情况
var threeSum = function (nums) {
  let arr = nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < arr.length - 2; i++) {
    //双指针标准流程
    //先排序， j=i+1  k为末尾  j和k向中间靠拢
    let j = i + 1
    let k = arr.length - 1
    //排序后
    //去重
    if (arr[i] > 0) continue
    if (i > 0 && arr[i] === arr[i - 1]) continue
    while (j < k) {
      let t = arr[i] + arr[j] + arr[k]
      if (t === 0) {
        let cur = [arr[i], arr[j], arr[k]]
        res.push(cur)
        //本题目的难点遭遇去重
        while (j < k && arr[j] === arr[j + 1]) j++
        while (j < k && arr[k] === arr[k - 1]) k--
        j++
        k--
      } else if (t < 0) {
        j++
      } else if (t > 0) {
        k--
      }
    }
  }
  return res
}
