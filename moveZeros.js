var moveZeroes = function(nums) {
    let l=0,r=0
    while(r<nums.length && l<nums.length){
        if(nums[l]==0 && nums[r]!==0 && r>l){
            nums[l]=nums[r]
            nums[r]=0
        }
        else if(nums[r]==0){
            r++
        }
        else if(nums[l]!==0){
            l++
        }
        else if(r<l && nums[r]!==0){
            r++
        }
    }
    return nums
};

console.log(moveZeroes([1,1,1]))