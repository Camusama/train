let arr = require('./testArr')
// 希尔排序是在插入排序的基础上进行了改善，它定义了一个间隔序列，让算法先比较大间隔的数据，
// 使离正确位置远的元素可以更快的归位，从而减少比较的次数，
// 然后缩小间隔序列进行比较，直到间隔序列为 1 时，数组有序。
function shellSort1(arr) {
  var len = arr.length
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
    for (var i = gap; i < len; i++) {
      var j = i
      var current = arr[i]
      //cur 一直分段gap往前挪 直到挪到最前
      //过程中相距gap的元素都挪了
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
  }
  return arr
}

let arr1 = arr.slice()
let arr2 = arr.slice()
console.log('shell1', shellSort1(arr1))
// console.log('shell2', shellSort2(arr1))
