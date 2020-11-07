// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

// 说明：

// 分隔时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// 输出:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// 示例 2：

// 输入:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// 输出:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// 解释: 注意你可以重复使用字典中的单词。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-break-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function wordBreak(s, wordDict) {
  const len = s.length
  const dict = new Set(wordDict)
  //关键点 对于memo剪枝的缓存
  //为s从start开始的 二维数组，记录可能的各种组合
  const memo = new Array(len)

  function dfs(start) {
    //这里剪枝的思想和139的dp类似
    if (memo[start]) {
      return memo[start]
    }
    if (start > s.length - 1) {
      return [[]]
    }
    const res = []
    for (let i = start + 1; i <= len; i++) {
      const cur = s.slice(start, i)
      if (dict.has(cur)) {
        const restRes = dfs(i)
        //关键点，存各种不同组合
        for (const rest of restRes) {
          res.push([cur, ...rest])
        }
      }
    }
    //关键点，存各种不同组合
    memo[start] = res
    return res
  }
  return dfs(0).map(words => {
    return words.join(' ')
  })
}
