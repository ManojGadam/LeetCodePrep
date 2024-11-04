/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 =  new Set(nums1),ret = new Set()
    for(let i of nums2){
        if(s1.has(i))ret.add(i)
    }
    return Array.from(ret)
};