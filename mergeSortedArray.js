var merge = function(nums1, m, nums2, n) {
    if((m && !n) || (!m && !n))return
    else if(!m && n){
        for(let i=0;i<nums2.length;i++)nums1[i] = nums2[i]
        return
    }
    // for(let i=m-1;i<m+n;i++){
    //     nums1[i] = 'a'
    // }
    let i = 0,j = 0
    while(1){
        if(j == n || (i==m && j==n)) return
        // if(i == m){
        //     for(let ind = j;ind< n;ind++)nums1[ind] = nums2[ind]
        // } 
        if(nums2[j] < nums1[i]){
            let set = nums2[j]
            let ind = i
            while(ind<nums1.length){
                let temp = nums1[ind]
                nums1[ind] = set
                set = temp
                ind++
            }
            j++
        }
        else if(nums2[j] == nums1[i]){
            i++
            let set = nums2[j]
            let ind = i
            while(ind<nums1.length){
                let temp = nums1[ind]
                nums1[ind] = set
                set = temp
                ind++
            }
            j++
        }
       else i++
    }
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))