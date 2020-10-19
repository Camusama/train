// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 注意:

// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
// 示例 1:

// 输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/partition-equal-subset-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var canPartition = function (nums) {
  // 0,1背包
  //d[i][j]=true/false  从0到i个中（注意这里不是数组下标，0表示一个都不拿，所以后面cur=nums[i-1]）  是否有组合刚好和为j
  //要刚好填满sum/2
  let len = nums.length
  if (len < 2) {
    return false
  }
  let sum = nums.reduce((t, v) => t + v, 0)
  if (sum % 2 !== 0) {
    return false
  }
  let target = sum / 2
  let d = []
  //i为0表示一个都不拿
  for (let i = 0; i <= len; i++) {
    d[i] = []
    for (let j = 0; j <= target; j++) {
      //j为0表示目标为0，一个不放即可
      if (j === 0) {
        d[i][j] = true
      } else {
        d[i][j] = false
      }
    }
  }
  for (let i = 1; i <= len; i++) {
    //i的序号要减一，重要，
    let cur = nums[i - 1]
    for (let j = 1; j <= target; j++) {
      //两种情况，  j-cur<0否,小于则必为d[i-1][j],即不放进去
      //大于则取d[i-1][j-cur]||d[i-1][j],前值如果能，则能，不能就看不放进去时是不是也能
      //d[i][j]=d[i-1][j]||d[i-1][j-cur]
      if (j - cur < 0) {
        d[i][j] = d[i - 1][j]
      } else {
        d[i][j] = d[i - 1][j - cur] || d[i - 1][j]
      }
    }
  }
  return d[len][target]
}
