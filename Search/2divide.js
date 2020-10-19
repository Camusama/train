//快速排序类似二分
// 二分查找
//有序数组
let divSearch = function (arr, tar) {
  let i = 0
  let j = arr.length - 1
  arr = arr.sort((a, b) => a - b)
  while (i <= j) {
    // console.log(i, j)
    let mid = ((i + j) / 2) | 0
    if (arr[mid] === tar) {
      return mid
    } else if (arr[mid] > tar) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return -1
}
let arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8]
console.log(divSearch(arr, 3))
//找左边第一个,找到tar缩右边界 最后arr[i]
let divLeft = function (arr, tar) {
  let i = 0
  let j = arr.length - 1
  arr = arr.sort((a, b) => a - b)
  while (i <= j) {
    let mid = ((i + j) / 2) | 0
    if (arr[mid] < tar) {
      i = mid + 1
    } else if (arr[mid] > tar) {
      j = mid - 1
    } else {
      j = mid - 1
    }
  }
  return arr[i] === tar ? i : -1
}
console.log(divLeft(arr, 3))
//找右边边第一个,找到tar缩左边界 最后arr[j]
let divRight = function (arr, tar) {
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    let mid = ((i + j) / 2) | 0
    if (arr[mid] > tar) {
      j = mid - 1
    } else if (arr[mid] < tar) {
      i = mid + 1
    } else {
      i = mid + 1
    }
  }
  return arr[j] === tar ? i : -1
}
console.log(divRight(arr, 3))
