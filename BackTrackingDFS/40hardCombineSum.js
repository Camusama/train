// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次。

// 说明：

// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。
// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var combinationSum2 = function (candidates, target) {
  let ans = []
  if (!candidates) {
    return []
  }
  candidates = candidates.sort((a, b) => a - b)
  let dfs = function (start = 0, target, combine = []) {
    if (target < 0) {
      return
    }
    if (target === 0) {
      ans.push(combine)
    }
    //i=start来保证后面的不回头选前面的，去重1
    for (let i = start; i < candidates.length; i++) {
      //即使1+2 数组里的重复也会导致结果重复
      //则需在树相同层级，跳过重复数字,只执行头一次（重要，不是尾一次）,去重3
      //i-1>=start重要，经过1,2去重，当前层不包含前一层的重复，只要处理从start开始的重复
      if (i - 1 >= start && candidates[i] === candidates[i - 1]) {
        continue
      }
      //i+1则下一层不选自己，去重2
      dfs(i + 1, target - candidates[i], [...combine, candidates[i]])
    }
  }
  dfs(0, target, [])
  return ans
}
