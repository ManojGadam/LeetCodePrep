/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length,n = grid[0].length
    function dfs(i,j){
        if(i<0 || j<0 || i>m-1 || j>n-1 || grid[i][j] == "2" || grid[i][j] == "0")return
        grid[i][j] = "2"
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
    let ret = 0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] == "1"){
                dfs(i,j)
                //console.log(grid)
                ret++
            }
        }
    }
    return ret
};