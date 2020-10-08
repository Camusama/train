let arr = [1, 2, 3, 4, 5, 2, 1, 1, 2, 4, 5]
let replace = [1, 2]
let target = [3, 4, 5]
// arr里连续replace替换为target
// 可用api:arr.length,arr[i],arr.push

let replaceArr = function (arr, replace, target) {
  let al = arr.length
  let rl = replace.length
  let tl = target.length
  let splice = function (arr, i, d, ...arg) {
    let rest = []
    for (let j = 0; j < i; j++) {
      rest.push(arr[j])
    }
    for (let j = 0; j < arg.length; j++) {
      rest.push(arg[j])
    }
    for (let j = i + d; j < arr.length; j++) {
      rest.push(arr[j])
    }
    return rest
  }
  for (let i = 0; i < al - rl; i++) {
    let j = i
    let k = 0
    let flag = true
    while (k < rl && j < al) {
      if (arr[j] === replace[k]) {
        j++
        k++
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      // arr.splice(i, rl, ...target)
      arr = splice(arr, i, rl, ...target)
      i = i + tl
    }
  }
  return arr
}
console.log(replaceArr(arr, replace, target))
