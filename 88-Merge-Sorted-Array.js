/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i= nums2.length-1, j = nums1.length-nums2.length-1, k = nums1.length-1
    while(j>-1 && i>-1){
        if(nums1[j] > nums2[i]){
            let tmp = nums1[k]
            nums1[k] = nums1[j]
            nums1[j] = tmp
            j--
        }
        else{
            nums1[k] = nums2[i]
            i--
        }
        k--
    }
    if(i>-1 && j<0){
        while(k>-1){
            nums1[k] = nums2[i]
            k--
            i--
        }
    }
};