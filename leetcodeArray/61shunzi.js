// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

//

// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var isStraight = function (nums) {
  let k = 0
  //本问题简化为 5个数里max-min<5,0跳过，且其余数字不重复
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      k++
      continue
    }

    if (nums[i] === nums[i + 1]) {
      return false
    }
  }
  let div = nums[nums.length - 1] - nums[k]
  return div < 5
}
