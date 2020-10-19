const { type } = require('os')

let arr = require('./testArr')
//向后冒泡
// 冒泡排序是最慢的排序算法之一，因为它交换元素的次数实在是太多了，但它也是最容易实现的排序算法。
// 在运行过程中，数据值会像气泡一样从一端漂浮到另一端，
// 比如升序排序，数据会与其右侧相邻的数据进行比较，若它比右侧数据大，则会向右边“冒泡”，直到遇到比它大的数据为止。
let bubble1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}
//向前冒泡，只取决于内层循环,内循环向右向左就
let bubble2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}
let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('bubble', bubble1(arr1))
console.log('bubble', bubble2(arr2))
