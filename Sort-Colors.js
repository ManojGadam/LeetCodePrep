/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0,r = nums.length-1,i=0
    while(i<=r){
        if(nums[i] == 0){
            let tmp = nums[l]
            nums[l] = nums[i]
            nums[i] = tmp
            l++
            i++
        }
        else if(nums[i] == 2){
            let tmp = nums[r]
            nums[r] = nums[i]
            nums[i] = tmp
            r--
        }
        else i++
    }
};