/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const rec=(i,map)=>{
        if( i in map)return map[i]
        if(i>nums.length-1)return 0
        map[i] = nums[i]+Math.max(rec(i+2,map),rec(i+3,map))
        return map[i]
    }
    return Math.max(rec(0,{}),rec(1,{}))
};