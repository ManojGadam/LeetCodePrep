function islandsAndTreasure(grid) {
    let visit = {},st = []
    function bfs(st,grid,count){
        let directions = [[1,0],[-1,0],[0,1],[0,-1]],queue = []
        while(st.length){
            let [row,col] = st.shift()
            for(let i of directions){
                let r = row+i[0],c = col+i[1]
                if(r<0 || r>grid.length-1 || c<0 || c>grid[0].length)continue
                if(visit[[r,c]])grid[r][c] = Math.min(visit[[r,c]],count)
                else if(grid[r][c] == 2147483647 && !visit[[r,c]]){
                    grid[r][c] = count
                    queue.push([r,c])
                    visit[[r,c]]=count
                }
            }
        }
        return queue
    }
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                  if(grid[i][j] == 0){
                   st.push([i,j])
                }
            }
        }
        let i = 1
        while(st.length){
            let queue = bfs(st,grid,i)
            st = queue
            i++
        }
        return grid
    }

console.log(islandsAndTreasure([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]))