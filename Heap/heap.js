class maxheap {
  constructor(arr = []) {
    this.contain = []
    if (Array.isArray(arr)) {
      this.contain = [...arr]
    }
    this.extract()
  }
  //全部重排
  extract() {
    //第一个子
    let s = Math.floor(this.contain.length / 2) - 1
    for (let i = s; i >= 0; i--) {
      this.sort(i, this.contain.length)
    }
  }
  sort(s, len) {
    let cur = this.contain[s]
    //s指向父，k指向子
    for (let k = s * 2 + 1; k < len; k = k * 2 + 1) {
      if (k + 1 < len && this.contain[k] < this.contain[k + 1]) {
        k++
      }
      if (this.contain[k] > cur) {
        //大则赋给父
        this.contain[s] = this.contain[k]
        //s指向被交换过的点
        s = k
      } else {
        break
      }
    }
    this.contain[s] = cur
  }
  top() {
    return this.contain.length ? this.contain[0] : null
  }
  pop() {
    let res = this.contain.shift()
    this.extract()
    return res
  }
  push(val) {
    let { contain } = this
    this.contain.push(val)
    this.extract()
    // let index = this.contain.length - 1

    // while (index) {
    //   let parent = ((index - 1) / 2) | 0
    //   if (contain[parent] >= this.contain[index]) {
    //     break
    //   }
    //   ;[contain[index], contain[parent]] = [contain[parent], contain[index]]
    //   index = parent
    // }
  }
}
module.exports = {
  maxheap: maxheap,
}
// let arr = [4, 6, 8, 5, 9]
// let hep = new maxheap(arr)
// console.log(hep.contain)
// hep.pop()
// console.log(hep.contain)
// hep.push(10)
// hep.push(2)
// console.log(hep.contain)
