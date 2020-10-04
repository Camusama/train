// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/4sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//本题为三数和套循环
var fourSum = function (nums, target) {
  let arr = nums.sort((a, b) => a - b)
  let length = nums.length
  let res = []
  let has = []
  for (let i = 0; i < arr.length - 2; i++) {
    //去重关键
    //确保a[i]改变了
    if (i > 0 && arr[i] === arr[i - 1]) continue
    for (j = i + 1; j < arr.length - 1; j++) {
      //去重关键
      //确保a[j]改变了
      if (j > i + 1 && arr[j] === arr[j - 1]) continue
      let l = j + 1
      let r = length - 1
      while (l < r) {
        let sum = arr[i] + arr[j] + arr[l] + arr[r]
        if (sum === target) {
          //去重关键
          //确保l r改变了
          while (l < r && arr[l] === arr[l + 1]) l++
          while (l < r && arr[r] === arr[r - 1]) r--
          // let resa=[arr[i],arr[j],arr[l],arr[r]]
          // let str=JSON.stringify(resa)
          // if(!has.includes(str)){
          res.push([arr[i], arr[j], arr[l], arr[r]])
          //  has.push(str)
          // }

          l++
          r--
        } else if (sum > target) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return res
}
