// 给出一个区间的集合，请合并所有重叠的区间。

//

// 示例 1:

// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-intervals
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var merge = function (intervals) {
  let arr = intervals
  let i = 0
  while (i < arr.length - 1) {
    let j = i + 1
    let flag = false
    while (j < arr.length) {
      let min = arr[i][0]
      let max = arr[i][1]
      if (max < arr[j][0] || min > arr[j][1]) {
        j++
      } else {
        let l = Math.min(min, arr[j][0])
        let m = Math.max(max, arr[j][1])
        arr.splice(i, 1, [l, m])
        arr.splice(j, 1)
        flag = true
      }
    }
    if (!flag) {
      i++
    }
  }
  return arr
}
var merge = function (intervals) {
  if (!intervals.length) {
    return []
  }
  //先排序
  let arr = intervals.sort((a, b) => a[0] - b[0])
  let res = []

  //这种方法要先排序
  //不断处理res数组的最后一个区间，更新或新增
  //先放进来一个
  res.push(arr[0])
  //   从第二项开始
  for (let i = 1; i < arr.length; i++) {
    let min = arr[i][0]
    let max = arr[i][1]

    //如果左边大于现在res最后一个的右边 直接进（因为排过序）
    if (min > res[res.length - 1][1]) {
      res.push(arr[i])
    } else if (max > res[res.length - 1][1]) {
      //可以合并，取大的右边
      res[res.length - 1][1] = max
    }
  }
  return res
}
