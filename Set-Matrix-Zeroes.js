/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(arr) {
    const m = arr.length, n = arr[0].length
    let rZ = false, cZ = false
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j] == 0){
                if(i==0)rZ = true
                if(j==0)cZ = true
                    arr[0][j] = 0
                    arr[i][0] = 0
                
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][0] === 0 || arr[0][j] === 0) {
                arr[i][j] = 0;
            }
        }
    }

    if(rZ){
        for(let i=1;i<n;i++){
            arr[0][i] = 0
        }
    }
    if(cZ){
        for(let i=1;i<m;i++){
            arr[i][0] = 0
        }
    }
};