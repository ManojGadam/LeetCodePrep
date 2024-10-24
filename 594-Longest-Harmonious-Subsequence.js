/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    if (nums.length < 2) return 0;
    
    nums.sort((a, b) => a - b); // Sort the array
    let s = 0, max = 0;
    
    for (let i = 1; i < nums.length; i++) {
        // Move start pointer if the difference is greater than 1
        while (nums[i] - nums[s] > 1) {
            s++;
        }
        
        // If we have found a valid subsequence, calculate its length
        if (nums[i] - nums[s] === 1) {
            max = Math.max(max, i - s + 1);
        }
    }
    
    return max;
};