/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo={}
    function rec(n){
        if(n<0)return 0
        if(n in memo)return memo[n]
        memo[n]=Math.max(nums[n]+rec(n-2),rec(n-1))
        return memo[n]
    }
    return rec(nums.length-1)
};