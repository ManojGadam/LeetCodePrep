/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0,j=0,arr = new Array(nums1.length+nums2.length),z = 0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            arr[z] = nums1[i]
            i++
        }   
        else 
        {
            arr[z] = nums2[j]
            j++
        }
        z++
    }
    while(i<nums1.length && j==nums2.length){
        arr[z] = nums1[i]
        i++
        z++
    }
    while(j<nums2.length && i==nums1.length){
        arr[z] = nums2[j]
        j++
        z++
    }
    if(arr.length%2 == 0)return (arr[Math.floor(arr.length/2)]+arr[Math.floor((arr.length-1)/2)])/2
    return arr[Math.floor(arr.length/2)]
};