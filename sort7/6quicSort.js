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

// 使用qsort之前，必须自己定义一个比较函数。这个比较函数用于比较两个元素的大小。由于qsort可以排序任意数据类型，包括自定义的结构类型，因此，做一个自定义的比较函数是必要的。
// 上面的多少有点蠢，用多语言通用的模板
//快排由两个部分组成
// 1.一轮交换，使基准点处于正确位置，左都小，右都大
let once = function (arr, s, e) {
  if (s >= e) {
    return s
  }
  let qv = arr[s]
  let i = s
  let j = e
  while (i < j) {
    //找右边第一个小于k的
    while (i < j && arr[j] >= qv) j--
    //换位,修改左边

    arr[i] = arr[j]

    //找左边第一个大于k的
    while (i < j && arr[i] <= qv) i++
    //换位，修改右边

    arr[j] = arr[i]

    //最后，i===j
  }
  arr[i] = qv
  // once(arr, s, j - 1)
  // once(arr, j + 1, e)
  //此时i为正确的位置
  return i
}
// 2.迭代once过程，直到全部有序
let quickSort = function (tar = [], s = 0, e = tar.length - 1) {
  if (s < e) {
    let mid = once(tar, s, e)
    //迭代此过程
    quickSort(tar, s, mid - 1)
    quickSort(tar, mid + 1, e)
  }
}
let arr1 = arr.slice()
console.log('arr1', arr1)
console.log('quick2', quickSort(arr1, 0, arr1.length - 1), arr1)
