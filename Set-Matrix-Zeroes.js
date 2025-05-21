/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length,n = matrix[0].length
    const r = new Set(),c= new Set()
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] == 0){
               r.add(i)
               c.add(j)
            }
        }
    }
     for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(r.has(i) || c.has(j))matrix[i][j] = 0
        }
    }
};