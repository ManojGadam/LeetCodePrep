/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function recur(i,j,map = {}){
        if([i,j] in map)return map[[i,j]]
        if(i>m-1 || j>n-1)return 0
        if(i == m-1 && j==n-1)return 1
        map[[i,j]] = recur(i+1,j,map)+recur(i,j+1,map)
        return map[[i,j]]
    }
    return recur(0,0)
};