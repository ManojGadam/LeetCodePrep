    var applyOperations = function(nums) {
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]!==nums[i+1])continue
            nums[i]*=2
            nums[i+1]=0
        }
        for(i=0;i<nums.length;i++){
            if(nums[i]!==0)continue
            j=i
            while(j<nums.length && nums[j]==0){
                j++
            }
            if(nums[j]){
                nums[i] = nums[j]
                nums[j]=0
            }
            i=j
        }
        return nums
    };

  
  const sortInPlace=(j,nums)=>{
      while(j!=nums.length-1){
                 temp = nums[j]
                 nums[j] = nums[j+1]
                 nums[j+1] = temp
                 j++
      }
  }

  console.log(applyOperations([1,2,2,1,1,0]))