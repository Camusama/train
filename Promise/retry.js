function retry(originFunc, times) {
  console.log('try', times)
  return new Promise(r => {
    originFunc
      .then(res => {
        r(res)
      })
      .catch(e => {
        if (times > 1) {
          r(retry(originFunc, times - 1))
        } else {
          r(e)
        }
      })
  })
}
let test = function () {
  return new Promise((r, j) => {
    Math.random() < 0.3 ? r('suc') : j('err')
  })
}

retry(test(), 2).then(res => {
  console.log(res)
})
