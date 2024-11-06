/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length<2)return 0
     let jumps = 0, currentEnd = 0, farthest = 0
     for(let i=0;i<nums.length;i++){
        farthest = Math.max(farthest,i+nums[i])
        if(i == currentEnd){
            jumps++
            currentEnd = farthest
            if(currentEnd >= nums.length-1)break
        }
     }
     return jumps
};