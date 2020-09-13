// 字符串操作
var multiply = function (num1, num2) {
  let l1 = num1.length
  let l2 = num2.length
  let res = []
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      // 最后一位,当前操作位
      let cur = i + j + 1
      //前一位
      let pre = cur - 1
      //加上当前位进位
      let mul = num1[i] * num2[j] + (res[cur] || 0)

      res[cur] = mul % 10
      //注意,pre要加上原先的位进位
      res[pre] = Math.floor(mul / 10) + (res[pre] || 0)
    }
  }
  let str = res.join('').replace(/^0+/, '')
  return str ? str : '0'
}
console.log('multi', multiply('122', '123'))
let plus = function (num1, num2) {
  let l1 = num1.length
  let l2 = num2.length
  let res = []
  let i = l1 - 1
  let j = l2 - 1
  let cur = l1 + l2 - 1
  while (i >= 0 && j >= 0) {
    let pre = cur - 1
    let total = Number(num1[i]) + Number(num2[j]) + (res[cur] || 0)
    res[cur] = total % 10
    res[pre] = Math.floor(total / 10)
    i--
    j--
    cur--
  }
  let preStr = ''
  if (i >= 0) {
    preStr = num1.slice(0, i + 1)
  }
  if (j >= 0) {
    preStr = num2.slice(0, j + 1)
  }
  console.log('pre', i, j, preStr)
  let str = preStr + res.join('').replace(/^0+/, '')
  return str ? str : '0'
}
console.log('plus', plus('992', '1000000'))
