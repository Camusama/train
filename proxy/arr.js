let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let tar = new Proxy(arr, {
  get(tar, k) {
    k = Number(k)

    while (k < 0) {
      k += tar.length
    }

    return Reflect.get(tar, k)
  },
  set(tar, k, v) {
    k = Number(k)

    while (k < 0) {
      k += tar.length
    }

    return Reflect.set(tar, k, v)
  },
})
tar[-1] = 10
tar[-10] = 55
console.log(tar[-1], tar[-10], tar[-20])
console.log(arr, tar)
