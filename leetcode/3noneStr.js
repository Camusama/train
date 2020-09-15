// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
var lengthOfLongestSubstring = function (s) {
  let obj = {}
  let clus = []
  let dep = function (s) {
    //    console.log(s)
    if (s.length === 1 || s.length === 0) {
      clus.push(s.length)
      return
    }
    let i = 0
    while (i < s.length) {
      if (!obj[s[i]]) {
        //1,防止0，2.记录下一位
        obj[s[i]] = i + 1
        i++
        if (i >= s.length) {
          clus.push(s.length)
          break
        }
      } else {
        //命中重复，则从重复的下一位开始截取，因之前+1过，所以这里直接slice
        let cur = obj[s[i]]
        obj = {}
        clus.push(i)
        dep(s.slice(cur))
        break
      }
    }
  }
  dep(s)
  let max = Math.max.apply(null, clus)
  // console.log(clus)
  return max
}
var mapget = function (s) {
  let obj = new Map()
  let max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (!obj.has(s[j])) {
      obj.set(s[j], j)
    } else {
      //只用保证起点在向后拉即可，不用回头
      i = Math.max(obj.get(s[j]) + 1, i)
      obj.set(s[j], j)
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}
// 输入: "pwpwkew"
// 输出: pw wp pwke kew
let getMax = function (str) {
  let obj = {}
  let max = 0
  for (let i = 0, j = 0; j < str.length; j++) {
    console.log('ij', i, j, obj[str[j]])
    //保证起始位不断向后拉
    if (obj[str[j]] || obj[str[j]] === 0) {
      //起始变为记录的下一位，在之前则不管，在之后则动
      i = Math.max(obj[str[j]] + 1, i)
    }
    max = Math.max(max, j - i + 1)
    //把记录也向后拉
    obj[str[j]] = j
  }
  return max
}
console.log(getMax('pwpwkew'))
