let maxChar = function (str) {
  let arr = str.split('')
  let obj = {}
  let max = 0,
    maxchar = arr[0]
  for (let i in arr) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
    if (obj[arr[i]] > max) {
      max = obj[arr[i]]
      maxchar = arr[i]
    }
  }
  return maxchar
}
let a = 'asdfasagasgasddddddddddfgggg'
console.log(maxChar(a))
