/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length<4)return nums[0]+nums[2]+nums[1]
    nums.sort((a,b)=>a-b)
    let min = Infinity, ret = Infinity
    for(let i=0;i<nums.length-2;i++){
        let s=i+1, e= nums.length-1,sum = 0
        while(s<e){
            sum = nums[s]+nums[e]+nums[i]
            if(Math.abs(sum-target) < min){
            min = Math.abs(sum-target)
            ret = sum
            }
            if(sum==target)break
            else if(sum<target)s++
            else e--
        }
        //if(s>nums.length-1 || e<0)continue
       // console.log(sum)
        
    }
    return ret
};