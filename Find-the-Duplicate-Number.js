/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0,fast = 0
    while(1){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow == fast)break
    }
    let slow1 = 0
    while(1){
        slow = nums[slow]
        slow1 = nums[slow1]
        if(slow == slow1)return slow
    }
};