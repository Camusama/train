// 插入排序同样使用两层循环，以升序排序为例：外层循环维护了一个指针 i，它从第二条数据开始向右移动。
// 内层循环则维护一个指针 j 从 i 的位置开始向左移动，若 j 左边的数据比 j 大，则将左边的数据右移一格，直到遇到 j 左边的数据比 j 小，
// 就停止移动，并把最开始用于比较的 i 上的数据插入到这一位置。如此反复，可以保证每次内循环结束，i 左边的数据都是有序的，则执行完外循环即可完成排序。
//i向右，j向左，保持i左边有序
//j一位一位的需要挪动数据

let arr = require('./testArr')
let insertSort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('insert1', insertSort1(arr1))
