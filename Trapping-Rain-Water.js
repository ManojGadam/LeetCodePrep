/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<3)return 0
    let l=0,r=height.length-1,res = 0,maxL=0,maxR=0
    while(l<r){
        if(height[l]<=height[r]){
            maxL = Math.max(maxL,height[l])
            res+=maxL-height[l]
            l++
        }
        else{
            maxR = Math.max(maxR,height[r])
            res+=maxR-height[r]
            r--
        }
    }
    return res
};