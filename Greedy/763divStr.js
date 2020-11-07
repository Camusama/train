// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

//

// 示例 1：

// 输入：S = "ababcbacadefegdehijhklij"
// 输出：[9,7,8]
// 解释：
// 划分结果为 "ababcbaca", "defegde", "hijhklij"。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
//

// 提示：

// S的长度在[1, 500]之间。
// S只包含小写字母 'a' 到 'z' 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/partition-labels
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var partitionLabels = function (S) {
  //hash作为工具，贪心作为思想
  let m = {}
  //每个字符最后出现的位置
  for (let i = S.length - 1; i >= 0; i--) {
    if (m[S[i]] === undefined) {
      m[S[i]] = i
    }
  }
  let start = 0
  let end = 0
  let res = []
  let strs = []
  //每次找出当前字符最后出现的位置end
  //则包含当前字符的分组结束位置至少大于end
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, m[S[i]])
    //end在不断更新，当i碰到了一个end，
    //代表前面出现过的字符都更新过end，一组end到达最大
    if (i === end) {
      res.push(end - start + 1)
      strs.push(S.slice(start, end + 1))
      //更新下start
      start = end + 1
    }
  }
  console.log(strs)
  return res
}
