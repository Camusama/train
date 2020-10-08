// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分法 适用于有序  l r mid  只和mid判断 更新l或r的指向
var search = function (nums, target) {
  let len = nums.length
  if (!len) {
    return -1
  }
  let l = 0
  let r = len - 1
  while (l <= r) {
    let mid = ((l + r) / 2) | 0
    //判断那一半是有序的
    if (target === nums[mid]) {
      return mid
    }
    //左半
    if (nums[0] < nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1
      } else {
        //走右半
        l = mid + 1
      }
    } else {
      //右半
      if (target >= nums[mid + 1] && target <= nums[r]) {
        l = mid + 1
      } else {
        //走左半
        r = mid - 1
      }
    }
  }
  return -1
}
