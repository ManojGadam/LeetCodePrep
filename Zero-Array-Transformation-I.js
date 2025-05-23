/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const diffArr = new Array(nums.length+1).fill(0)
    diffArr[0] = nums[0]
    for(let i=1;i<nums.length;i++){
        diffArr[i] = nums[i]-nums[i-1]
    }
    for(let query of queries){
        let [i,j] = query
        diffArr[i] -= 1
        diffArr[j+1] += 1 
    }
   // console.log(diffArr)
   if(diffArr[0]>0)return false
    for(let i=1;i<nums.length;i++){
       diffArr[i] = diffArr[i-1]+diffArr[i]
       if(diffArr[i]>0)return false
    }
    return true
};
