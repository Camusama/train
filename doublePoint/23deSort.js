// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1:

// 给定数组 nums = [1,1,2],

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

// 你不需要考虑数组中超出新长度后面的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //排序数组，挨个修改
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      //j找到i后第一个不重复的
      j++
    } else {
      //   修改i后1的为找到的不重复的
      nums[i + 1] = nums[j]
      //i往后走
      i++
      //j也
      j++
    }
  }
  //   最后i指向的位置为最后修改的位置
  // 长度为i+1
  return i + 1
}
