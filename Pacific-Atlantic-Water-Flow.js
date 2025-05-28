/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length, n = heights[0].length,ret = []
    let pac = {}, atl = {}
        function dfs(i,j,visited,prev){
            if(i<0 || j<0 || i>m-1 || j>n-1 || visited[[i,j]] || heights[i][j] < prev)return
            visited[[i,j]] = 1
            prev = heights[i][j]
            dfs(i+1,j,visited,prev)
            dfs(i-1,j,visited,prev)
            dfs(i,j+1,visited,prev)
            dfs(i,j-1,visited,prev)
        }

        for(let j=0;j<n;j++){
            dfs(0,j,pac,heights[0][j]) // first row
            dfs(m-1,j,atl,heights[m-1][j]) //last row
        }
        //visited = {}
        for(let j=0;j<m;j++){
            dfs(j,0,pac,heights[j][0])
            dfs(j,n-1,atl,heights[j][n-1])
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(([i,j] in pac) && ([i,j] in atl))ret.push([i,j])
            }
        }
        return ret
};