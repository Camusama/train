// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}
// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()

  // return name.replace(/[A-Z]/g, '_$1').toLowerCase()
}

let transParam = function (json, deep = 1) {
  let transkey = function (str) {
    if (str.indexOf('_') !== -1) {
      let newkey = str
        .split('_')
        .map((v, k) => {
          if (k > 0) {
            return v[0].toUpperCase() + v.slice(1)
          }
          return v
        })
        .join('')
      return newkey
    }
    return str
  }
  let bfs = function (arr) {
    let temp = []
    for (let json of arr) {
      for (let i in json) {
        let newkey = toLine(i)
        // console.log(newkey)
        if (newkey !== i) {
          json[newkey] = json[i]
          delete json[i]
        }

        if (typeof json[newkey] === 'object') {
          temp.push(json[newkey])
        }
      }
    }
    return temp
  }
  let arr = [json]
  while (arr.length && deep > 0) {
    // console.log(arr)
    deep--
    arr = bfs(arr)
  }
  return json
}
let json = {
  a_b_c: 1,
  a_a: {
    a: 1,
    b_b: 2,
  },
}
let josn2 = {
  aBaC: 1,
  a: 1,
  b: {
    AaAa: 2,
    cAdA: {
      b: 1,
      cAa: 2,
    },
  },
}
console.log(JSON.stringify(transParam(json, 1), null, 2))
console.log(JSON.stringify(transParam(josn2, 3), null, 2))
