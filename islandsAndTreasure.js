function islandsAndTreasure(grid) {
    let visit = {}
    function dfs(x,y,grid){
    let st =[[x,y,0]],directions = [[1,0],[-1,0],[0,1],[0,-1]],min = 2147483647
    visit[[x,y]]=1
    while(st.length){
        let [row,col,count] = st.pop()
        count++
        for(let i of directions){
            let r = row+i[0],c = col+i[1]
            if(r<0 || r>grid.length-1 || c<0 || c>grid[0].length)continue
            if(grid[r][c] == 0)min = Math.min(min,count)
            else if(grid[r][c] == 2147483647){
                st.push([r,c,count])
                visit[[r,c]]=count
            }
        }
    }
    return min
}
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] == 2147483647 && !visit[[i,j]]){
                let ret = dfs(i,j,grid)
                if(ret)grid[i][j] = ret
            }
        }
    }
    return grid
}


console.log(islandsAndTreasure([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]))