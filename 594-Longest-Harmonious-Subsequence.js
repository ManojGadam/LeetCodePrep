/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    
    nums.sort((a, b) => a - b); // Sort the array
    let s = 0, max = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[s] > 1) {
            s++;
        }        
        if (nums[i] - nums[s] === 1) {
            max = Math.max(max, i - s + 1);
        }
    }
    
    return max;
};