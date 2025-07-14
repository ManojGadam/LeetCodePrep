/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let jumps = 0, currentEnd = 0, farthest = 0
   for(let i=0;i<nums.length-1;i++){
    farthest = Math.max(farthest,nums[i]+i)
    if(i == currentEnd){
        jumps++
        currentEnd = farthest
    }
   }
   return jumps
};