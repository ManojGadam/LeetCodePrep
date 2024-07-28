var rotate = function(nums, k) {
    if(nums.length<2)return
    for(let i=0;i<nums.length-1;i++){
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
rotate([1,2,3,4,5,6,7],3)