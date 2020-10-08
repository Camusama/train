var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let num = 0
  let y = x
  //num求出倒转数字
  while (y) {
    num = num * 10 + (y % 10)
    y = (y / 10) | 0
  }
  return x === num
}
