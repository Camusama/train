/*
 * @Author: yangtianbo5
 * @Date: 2020-09-10 15:31:33
 * @Description: js对象扁平化
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-10 16:58:49
 */
// {
//   "a": {
//     "b": {
//       "c": {
//         "d": 1
//       }
//     }
//   },
//   "aa": 2,
//   "c": [
//     1,
//     2
//   ]
// } =>
// { 'a.b.c.d': 1, aa: 2, 'c[0]': 1, 'c[1]': 2 }
let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  aa: 2,
  c: [1, 2],
}

// let flagObj = function (obj = {}) {
//   let res = {}

//   let flat = function (cur, prop) {
//     //不是引用类型
//     if (typeof cur !== 'object') {
//       res[prop] = cur
//     } else {
//       //判断数组
//       if (Array.isArray(cur)) {
//         // 出口 如为空数组
//         if (cur.length === 0) {
//           res[prop] = []
//         }
//         Object.keys(cur).forEach((i) => {
//           flat(cur[i], `${prop}[${i}]`)
//         })
//       }
//       if (Object.prototype.toString.call(cur) === '[object Object]') {
//         let empty = true
//         for (let i in cur) {
//           empty = false
//           flat(cur[i], prop ? `${prop}.${i}` : i)
//         }
//         if (empty && prop) {
//           res[prop] = {}
//         }
//       }
//     }
//   }
//   flat(obj, '')
//   return res
// }
let flatObj = function (obj = {}) {
  let res = {}
  let flat = function (cur, prop) {
    //先出口
    if (typeof cur !== 'object') {
      res[prop] = cur
    } else {
      if (Array.isArray(cur)) {
        if (!cur.length) {
          res[prop] = []
        } else {
          for (let i in cur) {
            flat(cur[i], `${prop}[${i}]`)
          }
        }
      } else {
        let emp = true
        for (let i in cur) {
          emp = false
          flat(cur[i], prop ? `${prop}.${i}` : i)
        }
        //因为第一次prop为空，第一次不加
        if (emp && prop) {
          cur[prop] = {}
        }
      }
    }
  }
  flat(obj, '')
  return res
}
console.log('111', flatObj(obj))
