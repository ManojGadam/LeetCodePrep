/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [[]]
  function rec(i,curr){
    if(i>nums.length-1)return 
    curr.push(nums[i])
    res.push(curr.slice())
    rec(i+1,curr.slice())
    curr.pop()
    rec(i+1,curr.slice())
  }  
  rec(0,[])
  return res
};