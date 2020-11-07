// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

//

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
class maxheap {
  constructor(init = []) {
    this.arr = []
    if (Array.isArray(init)) {
      this.arr = [...init]
    }
    this.extract()
  }
  extract() {
    let s = Math.floor(this.arr.length / 2) - 1
    for (let i = s; i >= 0; i--) {
      this.sort(i, this.arr.length)
    }
  }
  sort(s, len) {
    let { arr } = this
    let cur = arr[s]
    for (let k = s * 2 + 1; k < len; k = k * 2 + 1) {
      if (k + 1 < len && arr[k] < arr[k + 1]) {
        k++
      }
      if (arr[k] > cur) {
        arr[s] = arr[k]
        s = k
      } else {
        break
      }
    }
    arr[s] = cur
  }
  top() {
    return this.arr.length ? this.arr[0] : null
  }
  push(val) {
    this.arr.push(val)
    this.extract()
  }
  pop() {
    let res = this.arr.shift()
    this.extract()
    return res
  }
}

var getLeastNumbers = function (arr, k) {
  if (k >= arr.length) {
    return arr
  }
  //大根堆
  //先取前K个字符组成大根堆
  let hp = new maxheap(arr.slice(0, k))
  //从k开始遍历
  //就是保持一个总量为k的大根堆，且里头尽量小
  for (let i = k; i < arr.length; i++) {
    // console.log(hp.arr, hp.top())
    if (arr[i] < hp.top()) {
      hp.pop()
      hp.push(arr[i])
    }
  }
  return hp.arr
}
let arr = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4]
console.log(getLeastNumbers(arr, 8))
