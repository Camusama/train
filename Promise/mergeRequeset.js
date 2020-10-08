const time = timer => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1)
    return 1
  })
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2)
    return 2
  })
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3)
    return 3
  })
//reduce
// function mergePromise(arr = []) {
//   // 在这里写代码
//   return new Promise(resolve => {
//     let res = []
//     arr.reduce((t, v, i) => {
//       return t.then(() => {
//         return new Promise(r => {
//           v().then(value => {
//             res[i] = value
//             if (res.length === arr.length) {
//               resolve(res)
//             }
//             r(value)
//           })
//         })
//       })
//     }, Promise.resolve())
//   })
// }
//或者简单拼接
function mergePromise(arr = []) {
  // 在这里写代码
  let res = []
  let pro = Promise.resolve()
  for (let i = 0; i < arr.length; i++) {
    pro = pro
      .then(() => {
        return arr[i]()
      })
      .then(value => {
        res[i] = value
        if (res.length === arr.length) {
          return res
        }
        return value
      })
  }
  return pro
}
mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done')
  console.log(data) // data 为 [1, 2, 3]
})

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
