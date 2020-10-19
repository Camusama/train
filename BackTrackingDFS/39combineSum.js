// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var combinationSum = function (candidates, target) {
  let ans = []
  let dfs = function (start = 0, target, combine = []) {
    if (target < 0) {
      return
    }
    if (target === 0) {
      ans.push(combine)
      return
    }
    //i=start来保证后面的不回头选前面的，去重1
    for (let i = start; i < candidates.length; i++) {
      dfs(i, target - candidates[i], [...combine, candidates[i]])
    }
  }
  dfs(0, target, [])

  return ans
}
