/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let l1 = num1.length
  let l2 = num2.length
  let res = []
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      // 最后一位,当前操作位
      let cur = i + j + 1
      //前一位
      let pre = i + j
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
