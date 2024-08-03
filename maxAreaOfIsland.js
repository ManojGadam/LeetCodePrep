var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                let ret = dfs(i,j,grid)
              //  console.log(ret)
                maxArea = Math.max(ret,maxArea)
            }
        }
    }
    return maxArea
};

function dfs(x,y,grid){
    let st =[[x,y]],directions = [[1,0],[-1,0],[0,1],[0,-1]],ret = 0
    grid[x][y] = 0
    while(st.length){
     let [row,col] = st.pop()
     ret+=1
     for(let i of directions){
        let r = row+i[0],c = col+i[1]
        if(r<0 || r>grid.length-1 || c<0 || c>grid[0].length-1 || grid[r][c]==0)continue
        st.push([r,c])
        grid[r][c] = 0
     }
    }
     return ret      
    
}

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))