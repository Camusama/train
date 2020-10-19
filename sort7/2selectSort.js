let arr = require('./testArr')
// 选择排序的原理，以升序排序为例，就是从数组的开头开始，
// 用第一条数据和其他数据进行比较，取其中最小的数据，与第一个位置的数据交换，
// 再用第二条数据对后面的数据进行比较......如此反复，当在数组的倒数第二位上执行完这个比较，整个排序就完成了。
// 与冒泡排序一样，选择排序也采用了两层循环，但选择排序在每次遍历中只进行了一次数据位置的交换，因此它的速度比冒泡排序要快的多。

let selectSort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let cur = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[cur] > arr[j]) {
        cur = j
      }
    }
    ;[arr[i], arr[cur]] = [arr[cur], arr[i]]
  }
  return arr
}

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('select1', selectSort1(arr1))
