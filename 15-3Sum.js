/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   nums.sort((a,b)=>a-b)
   let res= []
   for(let i=0;i<nums.length;i++){
       if(i>0 && nums[i]==nums[i-1])continue
       let j=i+1,z = nums.length-1,sum = 0
       while(j<z){
           sum = nums[i]+nums[j]+nums[z]
           if(sum < 0)j++
           else if(sum > 0)z--
           else{
            let result = [nums[i],nums[j],nums[z]]
            res.push(result)
            while(j<z && nums[j]==nums[j+1]) j++
            while(j<z && nums[z]==nums[z-1]) z--
            j++
            z--
            }
       }
   }
   return res
};

