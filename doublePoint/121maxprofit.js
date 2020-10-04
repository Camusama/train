// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var maxProfit = function (prices) {
  let arr = []
  arr[prices.length - 1] = prices[prices.length - 1]
  let res = 0
  //从右向左，找每个点 右边最大的值
  for (let i = prices.length - 2; i >= 0; i--) {
    arr[i] = Math.max(prices[i], arr[i + 1])
    if (arr[i] >= prices[i]) {
      res = Math.max(res, arr[i] - prices[i])
    }
  }
  return res
}

var maxProfit = function (prices) {
  //从左向右，每个点找左边最小值
  //左边最小值可以缓存
  let mini = Infinity
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    mini = Math.min(mini, prices[i])
    res = Math.max(prices[i] - mini, res)
  }
  return res
}
