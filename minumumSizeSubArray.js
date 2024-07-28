var minSubArrayLen = function(target, nums) {
    let l=0,min = nums.length,sum = 0
    for(let r = 0;r<nums.length;r++){
        sum += nums[r]
        while(sum>=target){
            min = Math.min(min,r-l+1)
            sum -= nums[l]
            l++
        }
    }
    if(sum < target)return 0
    console.log(min)
};

console.log(minSubArrayLen(4,[1,4,4]))