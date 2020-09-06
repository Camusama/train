const deepClone = arr => {
  let res = Array.isArray(arr) ? [] : {}
  Object.keys(arr).some(k => {
    if (typeof arr[k] === 'object' && arr[k] !== null) {
      res[k] = deepClone(arr[k])
    } else {
      res[k] = arr[k]
    }
  })
  return res
}

const flat = tar => {
  let res = []
  Object.keys(tar).some(k => {
    if (Array.isArray(tar[k])) {
      res = res.concat(flat(tar[k]))
    } else {
      res.push(tar[k])
    }
  })
  return res
}
const flatL = (tar, deep = 1) => {
  let res = []
  Object.keys(tar).some(k => {
    if (Array.isArray(tar[k]) && deep >= 1) {
      res = res.concat(flatL(tar[k], deep - 1))
    } else {
      res.push(tar[k])
    }
  })
  return res
}

let arr = [1, 2, 3, [4, [5, [6]]]]
// console.log(flatL(arr))
// console.log(flatL(arr, 2))
// console.log(flatL(arr, Infinity))
