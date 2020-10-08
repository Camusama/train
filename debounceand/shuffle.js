/*
 * @Author: yangtianbo5
 * @Date: 2020-09-22 14:55:36
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 15:05:29
 */
let shuffle = function (arr) {
  let res = []
  while (arr.length) {
    let ran = Math.floor(Math.random() * arr.length)
    res.push(arr.splice(ran, 1)[0])
  }
  return res
}
let shuffle2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let ran = i + ((Math.random() * (arr.length - i)) | 0)
    ;[arr[i], arr[ran]] = [arr[ran], arr[i]]
  }
  return arr
}
let arr = [1, 2, 3, 4, 5, 6]
console.log(shuffle([...arr]))
console.log(shuffle2([...arr]))
