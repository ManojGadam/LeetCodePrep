/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr = -Infinity,max = -Infinity
    for(let i of nums){
        curr = Math.max(curr+i,i)
        max = Math.max(max,curr)
    }
    return max
};