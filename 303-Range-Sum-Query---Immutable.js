/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = new Array(nums.length)
    this.arr[0] = nums[0]
    for(let i=1;i<nums.length;i++){
        this.arr[i] = this.arr[i-1]+nums[i]
    }
    //console.log(this.arr)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
   return left>0 ? this.arr[right]-this.arr[left-1] : this.arr[right]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */