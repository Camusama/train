// 比较两个版本号 version1 和 version2。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

// 你可以假设版本字符串非空，并且只包含数字和 . 字符。

//  . 字符不代表小数点，而是用于分隔数字序列。

// 例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

// 你可以假设版本号的每一级的默认修订版号为 0。例如，版本号 3.4 的第一级（大版本）和第二级（小版本）修订号分别为 3 和 4。其第三级和第四级修订号均为 0。
//

// 示例 1:

// 输入: version1 = "0.1", version2 = "1.1"
// 输出: -1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/compare-version-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//如果里头带alpha beta之类的
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.').map(i => {
    //isNaN判断字符串是不是纯数字 false表示是
    return isNaN(i) ? i : Number(i)
  })
  let arr2 = version2.split('.').map(i => {
    //isNaN判断字符串是不是纯数字 false表示是
    return isNaN(i) ? i : Number(i)
  })
  // console.log(arr1,arr2)
  let i = 0
  let j = 0
  let map = {
    alpha: 0,
    beta: 1,
    rc: 2,
  }
  while (i < arr1.length && j < arr2.length) {
    let c1 = arr1[i]
    let c2 = arr2[j]
    if (c1 === c2) {
      i++
      j++
      continue
    } else {
      if (typeof c1 === 'number') {
        return c1 > c2 ? 1 : -1
      } else {
        return map[c1] > map[c2] ? 1 : -1
      }
    }
  }
  if (i < arr1.length) {
    while (i < arr1.length) {
      if (Number(arr1[i]) !== 0) {
        return 1
      }
      i++
    }
  }
  if (j < arr2.length) {
    while (j < arr2.length) {
      if (Number(arr2[j]) !== 0) {
        return -1
      }
      j++
    }
  }
  return 0
}
//tm不对
var compareVersion2 = function (version1, version2) {
  //纯数字，转小数
  let num1 = version1.split('.').reduce((t, v, i) => {
    return t + Number(Number(v) * 0.1 ** (i + 1))
  }, 0)

  let num2 = version2.split('.').reduce((t, v, i) => {
    return t + Number(Number(v) * 0.1 ** (i + 1))
  }, 0)
  console.log(num1, num2)
  return num1 === num2 ? 0 : num1 > num2 ? 1 : -1
}
console.log(compareVersion2('0.10', '1'))
