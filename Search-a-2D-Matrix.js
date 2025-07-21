/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //If the target is less than the starting number or greater than the ending number we can skip the row and use binary search to solve the problem

    for(let row of matrix){
        if(target < row[0] || target > row[row.length-1])continue
        let s = 0, e = row.length-1
        while(s<=e){
            let mid = Math.floor((s+e)/2)
            if(row[mid] == target)return true
            else if(row[mid] < target)s = mid+1
            else e = mid-1
        }
    }
    return false
};