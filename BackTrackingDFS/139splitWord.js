// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-break
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var wordBreak = function (s, wordDict) {
  let dicSet = new Set(wordDict)
  let m = {}
  //下标s开始是否能分解
  let canBreak = function (start) {
    if (start >= s.length) {
      return true
    }
    //hash缓存减少复杂度
    if (m[start] !== undefined) return m[start]
    // console.log(start)
    //为什么要迭代，因为可能有同样开头的，多种组合
    for (let i = start + 1; i <= s.length; i++) {
      //注意slice右开，所以i要取到length
      let cur = s.slice(start, i)
      if (dicSet.has(cur)) {
        //此时，计算当前i开始后面的,开始回溯
        if (canBreak(i)) {
          //重要
          m[start] = true
          //这里return相当于不去for走到后面其他组合了
          return true
        }
      }
    }
    //重要
    m[start] = false
    return false
  }
  return canBreak(0)
}
