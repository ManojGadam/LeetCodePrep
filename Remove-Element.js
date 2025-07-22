/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l=0,r = nums.length-1
    while(l<=r){
        while(nums[r]==val)r--
        if(l<=r && nums[l] == val){
            nums[l] = nums[r]
            r--
        }
        l++
    }
    return r<0?0:r+1
};