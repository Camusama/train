//gcd 最大公约数
let gcd = function (a, b) {
  return a === 0 ? b : gcd(b % a, a)
}
console.log(gcd(55, 66))
