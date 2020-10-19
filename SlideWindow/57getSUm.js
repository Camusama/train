// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

//

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
//

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findContinuousSequence = function (target) {
  let div = (target >> 1) + 1
  res = []
  for (let i = div; i >= 1; i--) {
    let cur = i
    if (((i + 1) * i) / 2 < target) {
      continue
    }
    let temp = [cur]
    let tar = target - i
    j = i - 1
    while (j >= 1 && tar > 0) {
      tar = tar - j
      temp.unshift(j)
      j--
    }
    if (tar === 0) {
      res.unshift(temp)
    }
  }
  return res
}

//
var findContinuousSequence = function (target) {
  let div = (target >> 1) + 1
  res = []
  //滑动窗口 左闭右开
  let i = 1,
    j = 1
  sum = 0
  while (i <= div) {
    //右移右边界
    if (sum < target) {
      sum += j
      j++
    }
    //右移左边界
    if (sum > target) {
      sum -= i
      i++
      //sum减去前面的
    }
    if (sum === target) {
      let temp = []
      for (let k = i; k < j; k++) {
        temp.push(k)
      }
      res.push(temp)
      // 等于后，右移左边界
      sum -= i
      i++
    }
  }
  return res
}
