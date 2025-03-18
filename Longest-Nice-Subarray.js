/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
        let ret = 1, l = 0, prev = 0  // Initialize prev as 0 to simplify logic
    for(let i = 0; i < nums.length; i++) {
        while ((nums[i] & prev) !== 0) {
            prev ^= nums[l]  // Remove nums[l] from the OR result
            l++  // Shrink the left boundary
        }
        prev |= nums[i]  // Include the current element
        ret = Math.max(ret, i - l + 1)
    }
    return ret
};