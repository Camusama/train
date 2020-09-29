/*
 * @Author: yangtianbo5
 * @Date: 2020-09-29 16:10:05
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-29 16:29:07
 */
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 遍历一遍就能
//pre加当前位，如果变小了，直接取当前位nums[i],没变小则加
//f(i)为数组i位前的最大连续和
//f(i)=max(nums[i],f(i-1)+nums[i])
//pre=Math.max(pre+nums[i],nums[i])
let getMaxSum=function(nums){
  let m=nums[0]
  let pre=0
  for(let i=0;i<nums.length;i++){
    pre=Math.max(nums[i],nums[i]+pre)
    m=Math.max(m,pre)
  }
  return m
}
console.log(getMaxSum([-2,1,-3,4,-1,2,1,-5,4]));
let getMaxArr=function(nums){
  let m=nums[0]
  let pre=0
  let res=[]
  for(let i=0,s=0,e=0;i<nums.length;i++){
    if(pre+nums[i]>nums[i]){
      e=i
    }else{
      s=i
    }
    pre=Math.max(nums[i],nums[i]+pre)
    if(pre>m){
      res=nums.slice(s,e+1)
      m=pre
    }
  }
  return res
}
console.log(getMaxArr([-2,1,-3,4,-1,2,1,-5,4]));
