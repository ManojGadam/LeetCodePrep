/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    const ret = []
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1])continue
        let s=i+1,e=nums.length-1
        while(s<e){
            let sum = nums[i]+nums[s]+nums[e]
           // console.log(sum)
            if(sum === 0){
                ret.push([nums[i],nums[s],nums[e]])
                s++
                e--
                while(s<e && nums[s] == nums[s-1])s++
                while(s<e && nums[e] == nums[e+1])e--
            }
            else if(sum<0)s++
            else e--
        }
    }
    return ret
};