// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zigzag-conversion
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s
  }
  //z字形，其实是N字形排列
  //对于a[0][0]到a[0][1]  走了row+row-2步
  //第一行i(2row-2) 二到n行i(2row-2)+i
  //对于每列中间的，就是N字形斜着的
  //比如第二行E T 的T，为C回走一步(i) 即(i+1)(2row-2)-i
  //我们横着访问z字形排列则
  //使用双指针，i显然只走一个row的步数，j跳过(2row-2)
  //对于竖着的行 s[j+i]收集
  //当i不为row值首尾即收集的不是第一行或最后一行时、
  //收集完竖行还要紧接着收集横着的
  //横着的为j+path即下一个第一行的位置回走i步
  let res = ''
  let len = s.length
  let path = 2 * numRows - 2
  for (let i = 0; i < numRows; i++) {
    //j负责收集一行的
    for (let j = 0; j + i < len; j = j + path) {
      res += s[j + i]
      //对于非第一行或最后一行，收集斜着的
      if (i > 0 && i < numRows - 1 && j + path - i < len) {
        res += s[j + path - i]
      }
    }
  }
  return res
}
