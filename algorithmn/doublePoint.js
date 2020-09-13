// 双指针法
let arr = [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1]
let sort = function (arr) {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    console.log(i, j)
    if (arr[i] === 2 && arr[j] === 1) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
    if (arr[j] === 2) {
      j--
    }
    if (arr[i] === 1) {
      i++
    }
  }
  return arr
}
console.log(sort(arr))
let arr2 = [2, 4, 3, 2, 1, 6, 2, 7, 8, 97, 9, 3]
let sort2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        flag = false
      }
    }
    if (flag) break
  }
  return arr
}
console.log(sort2(arr2))
