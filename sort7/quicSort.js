let arr = require('./testArr')
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

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('quick1', quickSort1(arr1))
console.log('quick2', quickSort2(arr1))
