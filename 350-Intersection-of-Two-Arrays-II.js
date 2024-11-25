/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {},res = []
    for(let i of nums1){
        map[i] = (map[i] || 0)+1
    }
    for(let i of nums2){
        if(map[i]){
            map[i]-=1
            res.push(i)
        }
    }
    return res
};