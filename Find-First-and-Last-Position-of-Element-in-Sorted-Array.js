/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const ret = [-1,-1]
    function binSearch(direction){
        let s=0,e = nums.length-1,ret = -1
    while(s<=e){
        let mid = Math.floor((s+e)/2)
        if(nums[mid] == target){
            if(direction == "left"){
                if(mid == 0 || nums[mid-1] < nums[mid]){
                    return mid
                }
                else e = mid-1
            }
            else{
            if(mid == nums.length-1 || nums[mid+1] > nums[mid]){
                return mid
            }
            else s = mid+1
            }
        }
        else if(nums[mid] < target)s = mid+1
        else e = mid - 1
    }
    return ret
    }
    ret[0] = binSearch("left")
    ret[1] = binSearch("right")
    return ret
};