/*
 * @Author: yangtianbo5
 * @Date: 2020-09-16 16:13:04
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-16 16:45:42
 */
// dp[i,j]：字符串s从索引i到j的子串是否是回文串,首尾向里走，也是回文
// dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s
  }
  var s_f = s.split('').reverse().join('')
  var resultStr = s[0]
  var maxLen = 1
  var tmpLen = 1
  var maxStrIndex = 0
  var len = s.length
  //判断字符串是否回文
  function isPalinerome(i, r) {
    if (len - i - 1 == r - tmpLen + 1) {
      return true
    }
    return false
  }
  //初始化二维数组
  var len = s.length
  var arr = new Array(len)
  for (var i = 0; i < len; i++) {
    arr[i] = []
    for (var r = 0; r < len; r++) {
      arr[i][r] = 0
    }
  }
  for (var i = 0; i < len; i++) {
    for (var r = 0; r < len; r++) {
      if (s[i] == s_f[r]) {
        if (i == 0 || r == 0) {
          arr[i][r] = 1
        } else {
          arr[i][r] = arr[i - 1][r - 1] + 1
          tmpLen = arr[i][r]
        }
        if (tmpLen > maxLen && isPalinerome(i, r)) {
          maxStrIndex = r
          maxLen = tmpLen
          resultStr = s.substring(i - tmpLen + 1, i + 1)
        }
      }
    }
  }
  return resultStr
}

console.log('maxhuiwen', longestPalindrome('babad'))

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 外层循环：指针 i 遍历数组。内层循环：双指针去寻找满足三数和等于0的项
    let n1 = nums[i]
    if (n1 > 0) break
    if (n1 == nums[i - 1] && i > 0) continue // 遍历到重复的数，跳过
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let n2 = nums[left]
      let n3 = nums[right]
      if (n1 + n2 + n3 === 0) {
        res.push([n1, n2, n3])
        while (left < right && nums[left] === n2) left++ //直到指向不一样的数
        while (left < right && nums[right] === n3) right--
      } else if (n1 + n2 + n3 < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
