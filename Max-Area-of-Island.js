/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
     const m=grid.length,n = grid[0].length,directions = [[1,0],[-1,0],[0,1],[0,-1]]
    function dfs(i,j){
       if(i<0 || j<0 || i>m-1 || j>n-1 || grid[i][j] == 2 || grid[i][j] == 0)return 0
       grid[i][j] = "2"
       return 1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1)
        
    }
    let ret = 0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==1){
               let area = dfs(i,j)
               //console.log(area)
               ret = Math.max(area,ret)
            }
        }
    }
    return ret
};