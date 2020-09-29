// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
//输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].

// 动态规划，背包问题，能否装一半
var canPartition = function (nums) {
  let sum = nums.reduce((t, v) => t + v, 0)
  if (sum % 2 != 0) {
    return false
  }
  sum /= 2
  let n = nums.length
  let d = []
  for (let i = 0; i < n + 1; i++) {
    d[i] = []
    for (let j = 0; j < sum + 1; j++) {
      //装入为0
      if (i === 0) d[i][j] = false
      //容量为0
      if (j === 0) d[i][j] = true
    }
  }
  //i对应物品，j剩余容量
  for (let i = 1; i < n + 1; i++) {
    let cur = nums[i - 1]
    for (let j = 1; j < sum + 1; j++) {
      // 当前背包容量j不够装下第i个物品的重量nums[i-1]时，只有选择不装
      if (j - cur < 0) {
        d[i][j] = d[i - 1][j]
      } else {
        //装或不装
        d[i][j] = d[i - 1][j - cur] || d[i - 1][j]
        // d[i - 1][j - cur]  如果装，则容量j-当前cur还有余裕，d[i-1][j-cur]不一定为false，也可能在i-1个物件已经装满了
        //d[i-1][j] 不装，容量还有余裕，看前面装满没
      }
    }
  }
  return d[n][sum]
}
