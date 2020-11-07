// 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

// 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

// 你允许：

// 装满任意一个水壶
// 清空任意一个水壶
// 从一个水壶向另外一个水壶倒水，直到装满或者倒空
// 示例 1: (From the famous "Die Hard" example)

// 输入: x = 3, y = 5, z = 4
// 输出: True

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/water-and-jug-problem
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var canMeasureWater = function (x, y, z) {
  //     对任意两个整数 a、b，设 d是它们的最大公约数。那么关于未知数  x和  y的线性丢番图方程（称为裴蜀等式）：

  // ax+by=m有整数解  (x,y) 当且仅当  m是  d的整数倍。裴蜀等式有解时必然有无穷多个解。
  //知，求x,y的最大公约数，看z是不是最大公约数的倍数即可
  if (x + y < z) return false
  if (z === 0) return true
  if (x === 0) return y === z
  if (y === 0) return x === z
  let gcd = function (a, b) {
    return a === 0 ? b : gcd(b % a, a)
  }
  return z % gcd(x, y) === 0
}
