let maxChar = function (str) {
  // let str = str.split('')
  let obj = {}
  let max = 0,
    maxchar = str[0]
  for (let i in str) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
    if (obj[str[i]] > max) {
      max = obj[str[i]]
      maxchar = str[i]
    }
  }
  return maxchar
}
let a = 'asdfasagasgasddddddddddfgggg'
console.log(maxChar(a))
