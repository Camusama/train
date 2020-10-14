// [4,1,2,1,2]
//位运算
// &   且

// |   或  小数|0取整
// a=3 b=2  a/b|0 = 1

// ^  异或 和且相反
// a^a=0  a^0=a  a^b^a=b

// ~ 位非  二进制取反
//  a+~a=-1
//  a=23 ~a=-24

// >> << 位移动,小数位移0取整
// a=3 b=2  a/b>>0 = 1
// a>>1 =1  >>1相当于Math.floor(a/2)
var singleNumber = function (nums) {
  let arr = nums.sort()
  for (i = 0; i < nums.length - 1; i = i + 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i]
    }
  }
  return arr[nums.length - 1]
}

var singleNumber2 = function (nums) {
  let res = 0
  for (let i of nums) {
    res ^= i
  }
  return res
}
console.log(singleNumber([4, 1, 2, 1, 2]))
