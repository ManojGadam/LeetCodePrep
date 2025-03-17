/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const lMax = new Array(height.length).fill(0)
        const rMax = new Array(height.length).fill(0)
        let ret = 0
        rMax[height.length-1] = height[height.length-1]
        lMax[0] = height[0]
        for(let i=1;i<height.length;i++){
            lMax[i] = Math.max(height[i],lMax[i-1])
            rMax[height.length-i-1] = Math.max(height[height.length-i-1],rMax[height.length-i])
        }
        for(let i=0;i<height.length;i++){ 
            let val = Math.min(lMax[i],rMax[i])-height[i]
            ret = val>-1 ? ret+val : ret
        }
        return ret
};