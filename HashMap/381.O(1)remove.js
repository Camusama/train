// 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。

// 注意: 允许出现重复元素。

// insert(val)：向集合中插入元素 val。
// remove(val)：当 val 存在时，从集合中移除一个 val。
// getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。
// 示例:

// // 初始化一个空的集合。
// RandomizedCollection collection = new RandomizedCollection();

// // 向集合中插入 1 。返回 true 表示集合不包含 1 。
// collection.insert(1);

// // 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
// collection.insert(1);

// // 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
// collection.insert(2);

// // getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
// collection.getRandom();

// // 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
// collection.remove(1);

// // getRandom 应有相同概率返回 1 和 2 。
// collection.getRandom();
// 通过次数4,231提交次数10,907

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 列表中元素的顺序是无关紧要的，只要它们正确地存在于列表中即可。因此，在删除元素时，我们可以将被删的元素与列表中最后一个元素交换位置，随后便可以在 O(1)O(1) 时间内，从列表中去除该元素。

// 这需要我们额外维护数值在列表中每一次出现的下标集合。对于数值 \textit{val}val 而言，记其下标集合为 S_{idx}S
// idx
// ​
//  。

// 在删除时，我们找出 valval 出现的其中一个下标 ii，并将 \textit{nums}[i]nums[i] 与 \textit{nums}[\textit{nums}.\textit{length}-1]nums[nums.length−1] 交换。随后，将 ii 从 S_{val}S
// val
// ​
//   中去除，并将 S_{\textit{nums}[\textit{nums}.\textit{length}-1]}S
// nums[nums.length−1]
// ​
//   中原有的 \textit{nums}[\textit{nums}.\textit{length}-1]nums[nums.length−1] 替换成 ii。由于集合的每个操作都是 O(1)O(1) 的，因此总的平均时间复杂度也是 O(1)O(1) 的。
// 。
var RandomizedCollection = function () {
  this.idx = new Map()
  this.nums = []
}

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.nums.push(val)
  const set = this.idx.has(val) ? this.idx.get(val) : new Set()
  set.add(this.nums.length - 1)
  this.idx.set(val, set)
  return set.size === 1
}

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.idx.has(val)) {
    return false
  }
  let i = undefined
  for (const it of this.idx.get(val)) {
    if (!i) {
      i = it
      break
    }
  }
  const lastNum = this.nums[this.nums.length - 1]
  this.nums[i] = lastNum
  this.idx.get(val).delete(i)
  this.idx.get(lastNum).delete(this.nums.length - 1)
  if (i < this.nums.length - 1) {
    this.idx.get(lastNum).add(i)
  }
  if (this.idx.get(val).size === 0) {
    this.idx.delete(val)
  }
  this.nums.pop()
  return true
}

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)]
}
