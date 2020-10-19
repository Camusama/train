/*
 * @Author: yangtianbo5
 * @Date: 2020-09-19 12:58:43
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-19 14:48:23
 */
// 0到10台阶,每次走一到两步，多少种走法
// a[10]=0
// a[9]=1
// a[8]=2
// a[n]=a[n+1]+a[n+2]
let dyPath = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  num = dyPath(n - 1) + dyPath(n - 2)
  return num
}
let dyPath2 = function (n) {
  let arr = Array.from({length: n + 1})
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
console.log(dyPath(10))
console.log(dyPath2(10))
