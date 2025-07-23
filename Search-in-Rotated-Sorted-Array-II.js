/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let s=0,e=nums.length-1
    while(s<=e){
        console.log(s,e)
        let mid = Math.floor((s+e)/2)
        if(nums[mid] == target)return true
        if(nums[mid] == nums[s] && nums[mid] == nums[e]){
            s++
            e--
        }
        else if(nums[s]<=nums[mid]){
            if(target<nums[s] || target>nums[mid]){
                s = mid+1
            }else{
                e = mid-1
            }
        }
        else{
            if(target>nums[e] || target<nums[mid]){
                e = mid-1
            }
            else s=mid+1
        }
    }
    return false
};