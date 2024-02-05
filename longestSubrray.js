var longestSubarray = function(nums) {
    let isFlipped = false,curr=0,max=0,l=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            curr++
        }
        else if(isFlipped){
            if(curr>max)max=curr
            i = l+1
            curr=0
            isFlipped = false
        }
        else{
            l=i
            isFlipped = true
        }
    }
    return max > curr?max:curr
};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))