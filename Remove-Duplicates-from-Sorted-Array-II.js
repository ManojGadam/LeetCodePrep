/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r= 0
    for(r=0;r<nums.length;r++){
        let count = 1
        while(r+1 < nums.length && nums[r] == nums[r+1]){
            r++
            count++
        }
        //console.log(count)
        for(let i=0;i<Math.min(2,count);i++){
            nums[l] = nums[r]
            l++
        }
    }
    console.log(l)
    return l
};