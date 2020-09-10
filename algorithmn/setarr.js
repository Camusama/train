/*
 * @Author: yangtianbo5
 * @Date: 2020-09-10 10:19:59
 * @Description: 数组去重
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-10 15:05:23
 */
let arr=[1,1,2,2,4,5,3,3,5,2,6,3]

let a1=[...new Set(arr)]
let a2=[]
let filter=function (args) {
  Object.values(args).some(i=>{
    !a2.includes(i)&&a2.push(i)
  })
}
filter(arr)
let distinct=function (args) {
  return args.reduce((res,cur) => {
    if(!res.includes(cur)) res.push(cur)
    return res
  },[])
}
distinct(arr)
console.log('a1',a1);
console.log('a2',distinct(arr));
//数组最大值
console.log('max',Math.max.apply(null,arr));
// 字符串最大前缀
let maxcommon=function (arr) {
  let r =""
  //遍历第一个字符串
  for(let i=0;i<arr[0].length;i++){
    let cur=arr[0][i]
    //每个字符相同位置是否相同
    if(arr.every(str=>str.charAt(i)===cur)){
      r+=cur
    }else{
      break
    }
  }
  return r
}
let strs=["flower","flow","flight"]
// let t=maxcommon(strs)

let urls=['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff']
// 最大路径前缀
let maxUrl=function(arr) {
  let tar=arr.map(i=>i.split('/'))
  let r=[]
  for(let i=0;i<tar[0].length;i++){
    let cur =tar[0][i]
    if(tar.every(arr=>arr[i]===cur)){
      r.push(cur)
    }else{
      break
    }
  }
  return r.join('/')
}
let t=maxUrl(urls)
console.log(t)

