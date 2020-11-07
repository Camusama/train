// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

//

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//快排思路
var getLeastNumbers = function (arr, k) {
  if (k >= arr.length) {
    return arr
  }
  let l = 0,
    r = arr.length - 1
  let mid = once(arr, l, r)
  //找到小于第k小的所有元素
  while (mid !== k) {
    if (mid > k) {
      // 基准点的位置大于k，则取前半
      r = mid - 1
    } else if (mid < k) {
      // 基准点的位置小于k，则取后半
      l = mid + 1
    }
    mid = once(arr, l, r)
  }
  return arr.slice(0, mid)
}

//快排
let once = function (arr, s, e) {
  if (s >= e) {
    //这个很关键
    return s
  }
  let i = s,
    j = e,
    p = arr[s]
  while (i < j) {
    while (i < j && arr[j] >= p) j--
    arr[i] = arr[j]
    while (i < j && arr[i] <= p) i++
    arr[j] = arr[i]
  }
  arr[i] = p
  return i
}
