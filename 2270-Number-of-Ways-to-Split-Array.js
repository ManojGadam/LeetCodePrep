/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let totSum = 0
    for(let i of nums)totSum += i
    let lSum = 0, rSum = totSum, ret=0
    for(let i=0;i<nums.length-1;i++){
        rSum -= nums[i]
        lSum += nums[i]
        if(lSum>=rSum)ret++
    }
    return ret
};