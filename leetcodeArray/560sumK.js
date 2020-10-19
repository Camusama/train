// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// 说明 :

// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
// 通过次数74,128提交次数164,175

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var subarraySum = function (nums, k) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    let count = cur
    if (count === k) {
      sum++
    }
    for (j = i + 1; j < nums.length; j++) {
      count += nums[j]
      if (count === k) {
        sum++
      }
    }
  }
  return sum
}
var subarraySum = function (nums, k) {
  let count = 0
  //前缀和,map[pre]为到i位置的前缀和出现次数
  //对于结果 [i-j]
  //比如 map[3]=1  map[6]=1 k=3
  //当前和为6 -(k=3)  减去前缀和为3的就能满足k
  //即map[acc-k]如果存在 count++
  let acc = 0
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    if (acc === k) count++
    if (map[acc - k] !== undefined) {
      count += map[acc - k]
    }
    if (map[acc] === undefined) {
      map[acc] = 1
    } else {
      map[acc]++
    }
  }
  return count
}
