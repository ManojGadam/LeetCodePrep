/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let ret = {}
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let tar = target - nums[i] - nums[j], l = j+1, r = nums.length-1
            while(l<nums.length && r>-1 && l<r){
                if(nums[l]+nums[r] == tar){
                    ret[[nums[i],nums[j],nums[l],nums[r]]] = [nums[i],nums[j],nums[l],nums[r]]
                    l++
                }
                else if(nums[l]+nums[r] < tar)l++
                else r--
            }
        }
    }
    return Object.values(ret)
};