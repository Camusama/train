// ‘GJHGJK’

let mfilt = (str = '') => {
  let arr = Object.values(str)
  let rs = {}
  arr.some(i => {
    let num = rs[i]
    if (!num) {
      rs[i] = 1
    } else {
      num++
      rs[i] = num
    }
  })
  console.log('rs', rs, Object.values(rs))
  let so = Object.values(rs).sort((a, b) => {
    return a - b
  })
  console.log('so', so)
  let mini = so[0]
  let res = arr.filter(i => {
    return rs[i] > mini
  })
  return res.join('')
}
let mythro = (fn, wait) => {
  let timer
  return (...args) => {
    if (timer) return

    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, wait)
  }
}
let test = (...args) => {
  return () => {
    console.log(...args)
  }
}
setInterval(mythro(test(1123), 1000), 10)
