function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b)
  }, 1000)
}

function createAdd(a, b) {
  return new Promise(resolve => {
    asyncAdd(a, b, (err, res) => {
      resolve(res)
    })
  })
}

async function sum(...args) {
  if (args.length > 1) {
    let arr = []
    for (let i = 0; i < args.length; i = i + 2) {
      if (i + 1 >= args.length) {
        arr.push(args[i])
        continue
      }
      arr.push(await createAdd(args[i], args[i + 1]))
    }
    // let newArg = await Promise.all(arr)
    return sum(...arr)
  }
  return args[0]
}
sum(1, 2, 3, 4, 5, 6, 7).then(res => {
  console.log(res)
})
