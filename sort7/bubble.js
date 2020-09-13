const { type } = require('os')

let arr = require('./testArr')
//向后冒泡
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
