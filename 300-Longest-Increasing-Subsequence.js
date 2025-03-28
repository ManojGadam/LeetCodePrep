/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let LIS = new Array(nums.length).fill(1),max = -Infinity
    for(let i=nums.length-1;i>=0;i--){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j])LIS[i] = Math.max(LIS[i],1+LIS[j])
        }
        max = Math.max(max,LIS[i])
    }
    //console.log(LIS)
    return max
};