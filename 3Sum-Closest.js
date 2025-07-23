/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let res = Infinity,dis = Infinity
    for(let i=0;i<nums.length-2;i++){
        let s = i+1,e = nums.length-1,sum = 0
        while(s<e){
            sum = nums[s]+nums[e]+nums[i]
            if(sum == target)return target
            else if(sum < target)s++
            else e--
            if(Math.abs(target-sum) < dis){
                dis = Math.abs(target-sum)
                res = sum
            }
        }

    }
    return res
};