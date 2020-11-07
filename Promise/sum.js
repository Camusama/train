/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b)
  }, 1000)
}
// 1.迭代法
/**
 * 请在此方法中调用asyncAdd方法，完成数值计算
 * @param  {...any} rest 传入的参数
 */
//白银法， 分开
async function sum(...rest) {
  if (rest.length <= 1) {
    return rest[0] || 0
  }
  // 请在此处完善代码
  let arr = []
  for (let i = 0; i < rest.length; i = i + 2) {
    arr.push(
      new Promise(r => {
        if (i + 1 < rest.length) {
          asyncAdd(rest[i], rest[i + 1], (e, res) => {
            r(res)
          })
        } else {
          r(rest[i])
        }
      })
    )
  }
  let res = await Promise.all(arr)
  // console.log(res)
  //关键 这里其实迭代了两次
  return sum(...res)
}
//王者法，和上面类似但不用迭代
async function sum2(...rest) {
  let res = 0
  //难点在于，在asyncAdd执行时才
  //访问到res
  //利用对象隐式转换
  let ref = []
  ref.valueOf = function () {
    return res
  }
  let arr = []
  for (let i of rest) {
    arr.push(
      new Promise(r => {
        asyncAdd(ref, i, (e, res) => {
          r(res)
        })
      }).then(sum => {
        res = sum
      })
    )
  }
  await Promise.all(arr)
  return res
}
let start = new Date()
sum2(1, 2, 3, 4, 5, 6)
  .then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    console.log(`程序执行共耗时: ${new Date() - start}`)
  })
  .catch(e => {
    console.log(e)
  })
