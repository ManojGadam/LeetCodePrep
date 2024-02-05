var longestOnes = function(nums, k) {
    let max=0,curr=0,c=k,l=0
    for(let r=0;r<nums.length;r++){
        if(nums[r]==1){
            curr+=1
            continue
        }
        if(k==0){
            if(curr > max) max = curr
            curr=0
            continue
            }
        if(c==0){
            if(curr>max)max=curr
            r=l
            c=k
            curr=0
            continue
        }
        if(c==k)l=r
        curr+=1
        c-=1
    }
    return max
};

console.log(longestOnes([0,0,1,1,1,0,0],0))