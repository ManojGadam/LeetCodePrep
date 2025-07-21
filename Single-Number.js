/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ret = 0
    for(let i of nums){
        ret = ret ^ i
    }
    return ret
};