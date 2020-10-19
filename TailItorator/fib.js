//尾递归优化，函数内使得最后一步只执行一个函数，只保持一个调用帧
//改写递归函数 使之只调用自身
// function restricted() {
//   'use strict';
//   restricted.caller;    // 报错
//   restricted.arguments; // 报错
// }
// restricted();
let fib = function (n, a1 = 1, a2 = 1) {
  if (n <= 2) return a2
  return fib(n - 1, a2, a1 + a2)
}
console.log(fib(1), fib(2), fib(3), fib(4))

let getSum = function (n, to = 1) {
  if (n <= 1) {
    return to
  }
  return getSum(n - 1, to * n)
}
console.log(getSum(1), getSum(2), getSum(3), getSum(4))
