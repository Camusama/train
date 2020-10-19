var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let bfs = function (arr = [], i) {
    let temp = []
    let rearr = []
    // console.log(arr,i)
    //收集值时可以反着收
    if (i % 2 !== 0) {
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].val)
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i].val)
      }
    }
    //这里关键点是，收集子节点时只能正着收集，否则很麻烦
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].left) rearr.push(arr[i].left)
      if (arr[i].right) rearr.push(arr[i].right)
    }

    return [temp, rearr]
  }
  let arr = [root]
  let i = 1
  while (arr.length) {
    let [temp, rearr] = bfs(arr, i)
    i++
    res.push(temp)
    arr = rearr
  }
  return res
}
