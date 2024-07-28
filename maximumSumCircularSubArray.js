var maxSubarraySumCircular = function(nums) {
    let currentSum = 0, maxSum = 0
    for(let i=0;i<nums.length;i++){
        let j = i
        while(j!== i-1)
        {
        currentSum += nums[i]
        currentSum = Math.max(currentSum,nums[i])
        maxSum = Math.max(currentSum,maxSum)
        if(maxSum == currentSum)break
        i++
        if(i>nums.length-1)i=0
        }
    }
    return maxSum
};

console.log(maxSubarraySumCircular([1,-2,3,-2]))