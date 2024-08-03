var numIslands = function(grid) {
    if(!grid.length)return 0
    let visit = new Map(),islands = 0
    const bfs=(i,j)=>{
        let queue = [[i,j]]
        visit.set([i,j],1) 
        while(queue.length){
            let [row,col] = queue.pop()
            let neighbours = [[1,0],[-1,0],[0,1],[0,-1]]
            for(let neigh of neighbours){
                let r = row+neigh[0],c = col+neigh[1]
                console.log(r,c,visit.get([r,c]))
                if(r>-1 && r<grid.length && c>-1 && c<grid[0].length && !visit.get([r,c]) && grid[r][c] == "1"){
                    queue.push([r,c])
                    visit.set([r,c],1) 
                }
            }
        }
    }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] == "1" && !visit.get([i,j])){
                bfs(i,j)
                islands++
            }
        }
    } 
    return islands
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))