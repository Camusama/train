// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

// 示例:

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/trapping-rain-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//土鳖法，先明确思路
var trap = function (height) {
  let ans = 0
  for (let i = 1; i < height.length - 1; i++) {
    let lm = 0,
      rm = 0
    let j = 0,
      k = height.length - 1
    while (j < i) {
      lm = Math.max(lm, height[j])
      j++
    }
    while (k > i) {
      rm = Math.max(rm, height[k])
      k--
    }
    //Math.min(rm,lm)-height[i]  为每列上方能容的水， 这个值可能小于0（本列为峰顶），所以判断大于0
    //首尾不存水
    ans += Math.max(Math.min(rm, lm) - height[i], 0)
  }
  return ans
}
//动态规划，先正反遍历两遍，预存每个位置左边和右边最高的
var trap = function (height) {
  let ans = 0
  //从左往右，存每格左边最大的
  let larr = []
  larr[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    larr[i] = Math.max(height[i], larr[i - 1])
  }
  //从右往左，存每格右边最大的
  let rarr = []
  rarr[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--) {
    rarr[i] = Math.max(height[i], rarr[i + 1])
  }
  //遍历，求每格上方有的
  for (let i = 1; i < height.length - 1; i++) {
    ans += Math.max(0, Math.min(larr[i], rarr[i]) - height[i])
  }
  return ans
}
//双指针法
var trap = function (height) {
  if (height.length < 3) {
    return 0
  }
  let ans = 0
  //双指针法，从动态规划可知
  //lm代表j左边最高，rm代表k右边最高
  //对于j,lm可信，rm不可信
  //对于k,rm可信，lm不可信
  //以j为例，如果lm<rm 可直接取，动j
  //以k为例,如rm<lm 可直接取，动k
  let j = 1,
    k = height.length - 2
  let lm = height[0],
    rm = height[height.length - 1]
  //这里有个小关键  j<=k  不能只j<k,背，接雨水
  while (j <= k) {
    if (lm < rm) {
      ans += Math.max(0, lm - height[j])
      lm = Math.max(lm, height[j])
      j++
    } else {
      ans += Math.max(0, rm - height[k])
      rm = Math.max(rm, height[k])
      k--
    }
  }
  return ans
}
