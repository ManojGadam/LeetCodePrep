/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ins = 1
    for(let i=1;i<nums.length;i++){
        if(nums[i] == nums[i-1])continue
        nums[ins] = nums[i]
        ins++
    }
    return ins
};