// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
var reverse = function (x) {
  let flag = x >= 0
  let str = String(Math.abs(x)).split('').reverse().join('')
  let num = Number(str)
  if (num >= Math.pow(2, 31) - 1 || num <= -Math.pow(2, 31)) return 0
  return flag ? +num : -num
}
