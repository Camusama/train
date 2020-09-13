let arr = require('./testArr')
let insertSort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    //i向右 j向左到头，永远保持j左边的有序
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    }
  }
  return arr
}
let insertSort2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    //i向右 j向左到头，永远保持j左边的有序
    let cur = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > cur) {
      if (arr[j] > arr[j - 1]) arr[j - 1] = arr[j]
      j--
    }
    arr[j] = cur
  }
  return arr
}

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('insert1', insertSort1(arr1))
console.log('insert2', insertSort2(arr1))
