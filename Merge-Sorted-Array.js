/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a = m-1,b = n-1, i = nums1.length-1
    while(a>-1 && b>-1){
        if(nums1[a]>=nums2[b]){
            nums1[i] = nums1[a]
            a--
        }else{
            nums1[i] = nums2[b]
            b--
        }
        i--
    }
    while(a>-1){
        nums1[i] = nums1[a]
        a--
        i--
    }
    while(b>-1){
         nums1[i] = nums2[b]
         b--
         i--
    }
};