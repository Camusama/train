/*
 * @Author: yangtianbo5
 * @Date: 2020-09-29 14:52:55
 * @Description: 
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-29 15:05:42
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length===0||s.length===1){
      return s.length
  }
let map =new Map()
let max=0
let i=0
let j=0
while(j<s.length){
    let c=s[j]
    let index=map.get(c)
    if(!index&&index!==0){
        map.set(c,j)
        j++
    }else{
        i=Math.max(i,index+1)
        map.set(c,j)
        j++
    }
  max=Math.max(max,j-i)
}
return max
};
console.log(lengthOfLongestSubstring("abcabcbb"));
// lengthOfLongestSubstring("abcabcbb")
