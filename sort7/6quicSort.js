let arr = require('./testArr')
// 快速排序同样是基于分治的设计思想，它需要一个切分点 pivot，以升序排序为例，
// 将数组剩余的元素中大于 pivot 的放到它的右边，小于 pivot 的放到它的左边，
// 然后对根据 pivot 切分的左数组和右数组再分别进行同样的排序，然后递归进行切分操作，直到整个数组有序。

let quickSort1 = function (tar) {
  // 快排，取基准点pivot 左边比他小，右边比他大，迭代此过程
  let qSort = function (arr) {
    if (arr.length <= 1) {
      return arr
    }
    let q = arr[0]
    let big = [],
      small = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > q) {
        big.push(arr[i])
      } else {
        small.push(arr[i])
      }
    }
    return qSort(small).concat(q, qSort(big))
  }

  return qSort(tar)
}
// 快速排序的内循环比大多数排序算法都要短小，这意味着它无论是在理论上还是在实际中都要更快。
// 它的主要缺点是非常脆弱，在实现时要非常小心才能避免低劣的性能。”因此快速排序需要各种算法优化的手段，避免这些情况的发生。
let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('quick1', quickSort1(arr1))
console.log('quick2', quickSort2(arr1))
