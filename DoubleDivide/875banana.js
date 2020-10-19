// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

//

// 示例 1：

// 输入: piles = [3,6,7,11],

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/koko-eating-bananas
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//穷举
var minEatingSpeed = function (piles, H) {
  let k = 1
  let sum = piles.reduce((t, v) => t + Math.ceil(v / k), 0)
  while (sum > H) {
    k++
    sum = piles.reduce((t, v) => t + Math.ceil(v / k), 0)
  }
  return k
}
//二分
var minEatingSpeed = function (piles, H) {
  let arr = piles.sort((a, b) => a - b)
  //下限为1，上限为速度等于最多的堆，二分查找
  let max = arr[arr.length - 1]
  let getSum = function (k) {
    return arr.reduce((t, v) => t + Math.ceil(v / k), 0)
  }
  //二分找左
  let i = 1
  let j = max
  //对于本问题 i-j的sum从大到小
  while (i <= j) {
    //  console.log(i,j)
    let mid = ((i + j) / 2) | 0
    let sum = getSum(mid)
    if (sum > H) {
      i = mid + 1
    } else if (sum === H) {
      j = mid - 1
    } else if (sum < H) {
      j = mid - 1
    }
  }
  return i
}
