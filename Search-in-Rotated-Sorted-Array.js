/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s=0,e=nums.length-1
    while(s<=e){
    let mid = Math.floor((s+e)/2)
    if(nums[mid]==target){
        return mid
    }
    //in the left portion
    else if(nums[s] <= nums[mid]){
        if((target > nums[mid]) || (target < nums[s])){
            s= mid+1
        }else{
            e = mid-1
        }
    }
    else{
         if((target < nums[mid]) || (target > nums[e])){
            e= mid-1
        }else{
            s = mid+1
        }
    }
}
    return -1
    
};