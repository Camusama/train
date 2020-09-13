let arr = require('./testArr')
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
