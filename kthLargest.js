var findKthLargest = function(nums, k) {
    k = nums.length-k
    const quickSelect = (l,r) =>{
       let pivot = nums[r], p =l
       for(let i=l;i<r;i++){
           if(nums[i]<=pivot){
               [nums[i],nums[p]] = [nums[p],nums[i]]
               p++
           }
       }
       [nums[p],nums[r]] = [nums[r],nums[p]]
       if(k<p)return quickSelect(l,p-1)
       else if(k>p) return quickSelect(p+1,r)
       else return nums[p]
    }
    return quickSelect(0,nums.length-1)
} 
console.log(findKthLargest([3,2,1,5,6,4],2))