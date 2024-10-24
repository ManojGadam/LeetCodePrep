/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = new Array(nums.length+1).fill(1)
    let min = new Array(nums.length+1).fill(1)
    for(let i=nums.length-1;i>=0;i--){
        max[i] = Math.max(nums[i],max[i+1]*nums[i],min[i+1]*nums[i])
        min[i] = Math.min(nums[i],min[i+1]*nums[i],max[i+1]*nums[i])
    }
    let ret = -Infinity
    for(let i=0;i<max.length-1;i++){
        ret = Math.max(ret,max[i])
    }
    return ret
};