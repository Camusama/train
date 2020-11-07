let arr = require('./testArr')
// 归并排序是应用高效算法设计中分治思想的典型栗子，
// 它的基本原理就是将数组不断的对半拆分，直到拆分为一对单个元素，
// 然后将一对单个元素排列至有序，再与相邻的一对有序元素合并为一个大的有序数组，直到整个数组有序。
function merge(arr1, arr2) {
  //两个有序数组合并成一个有序数组
  let l1 = arr1.length
  let l2 = arr2.length
  let i = 0,
    j = 0,
    res = []
  while (i < l1 && j < l2) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  //边界简单
  if (i < l1) res = res.concat(arr1.slice(i))
  if (j < l2) res = res.concat(arr2.slice(j))
  return res
}
//本方法只负责分开数组，直到分成只包含一个元素的数组
function mergeSort1(arr) {
  var len = arr.length
  //递归出口
  if (len < 2) {
    return arr
  }
  let gap = Math.floor(len / 2)
  let arr1 = arr.slice(0, gap)
  let arr2 = arr.slice(gap)
  return merge(mergeSort1(arr1), mergeSort1(arr2))
}

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('merge1', mergeSort1(arr1))
// console.log('merge2', mergeSort2(arr1))
//原地合并
const merge = (nums1, m, nums2, n) => {
  let i = m - 1
  let j = n - 1
  let tail = m + n - 1
  //要以短的数组为界
  while (j >= 0) {
    //这里i=-1  回走else的
    if (nums1[i] > nums2[j]) {
      nums1[tail] = nums1[i]
      i--
      tail--
    } else {
      nums1[tail] = nums2[j]
      j--
      tail--
    }
  }
}
