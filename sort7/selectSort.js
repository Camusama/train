let arr = require('./testArr')

let selectSort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let cur = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[cur] > arr[j]) cur = j
    }
    ;[arr[i], arr[cur]] = [arr[cur], arr[i]]
  }
  return arr
}
let selectSort2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    //Math.min.apply(null,arr)
    let min = Math.min.apply(null, arr.slice(i + 1))
    if (arr[i] > min) {
      //find返回元素，findIndex返回下标
      let j = arr.findIndex(item => item === min)
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  return arr
}
let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('select1', selectSort1(arr1))
console.log('select2', selectSort2(arr2))
