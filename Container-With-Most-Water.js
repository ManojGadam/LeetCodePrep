/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let s=0,e = height.length-1,ret = 0
    while(s<e){
        let area = Math.min(height[s],height[e])*(e-s)
        ret = Math.max(ret,area)
        if(height[s] < height[e])s++
        else e--
    }
    return ret
};