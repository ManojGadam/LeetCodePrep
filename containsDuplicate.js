var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in map){
            if(Math.abs(i-map[nums[i]]) == k)return true
            //map[nums[i]] = i
        }
        map[nums[i]] = i
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1],3))