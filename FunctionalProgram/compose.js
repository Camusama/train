function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
// 如上使用reduce方法将函数累计到一起，形成一个新的函数。
const add = x => y => x + y
const addOne = add(1)
const plus = x => y => x * y
const plusFive = plus(5)

const addOneAndPlusFive = compose(plusFive, addOne)

console.log(addOneAndPlusFive(3))
