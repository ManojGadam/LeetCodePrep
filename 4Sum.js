/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4)return []
    nums.sort((a,b)=>a-b)
    const ret = []
    for(let i=0;i<nums.length-3;i++){
        if(i>0 && nums[i] == nums[i-1])continue
        for(let j=i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j] == nums[j-1])continue
            let newTar = target-nums[i]-nums[j],l=j+1,r = nums.length-1
            while(l<r){
                let sum = newTar-nums[l]-nums[r]
                if(sum == 0){
                    ret.push([nums[i],nums[j],nums[l],nums[r]])
                    l++
                    r--
                    while(l<r && nums[l] == nums[l-1])l++
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }
                else if(sum > 0)l++
                else r--
            }
        }
    }
    return ret
};