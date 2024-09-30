/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let ret = 0
    let rows = grid.length, cols = grid[0].length
    for(let i=0;i<rows;i++){
        let s = 0,e = cols-1,mid = 0,arr = grid[i]
        while(s<=e){
            mid = Math.floor((s+e)/2)
            if(arr[mid]<0 && (mid==0 || arr[mid-1]>-1))break
            else if(arr[mid]>=0)s = mid+1
            else e= mid-1
        }
        if(mid == cols-1 && arr[mid]>-1)continue
        ret += cols-1-mid+1
    }
    return ret
};