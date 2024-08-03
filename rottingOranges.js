//994. Rotting Oranges

var orangesRotting = function(grid) {
    let st = [],ret = 0,noOfOne = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] == 2){
              st.push([i,j])
            }
            else if(grid[i][j] == 1) noOfOne++
        }
    }
    let len = st.length
    while(st.length){
        let [count,queue] = bfs(grid,st)
        noOfOne -= count
        st = queue
        if(count>0)ret++
    }

    if(noOfOne>0)return -1
    return ret
};

function bfs(grid,st){
    let count = 0,directions = [[0,1],[0,-1],[1,0],[-1,0]],queue = []
    while(st.length){
        let [row,col] = st.shift()
        for(let i of directions){
            let r = row+i[0],c = col+i[1]
            if(r>-1 && r<grid.length && c>-1 && c<grid[0].length && grid[r][c] == 1){
                grid[r][c] = 3
                queue.push([r,c])
                count++
            }
        }
    }
    return [count,queue]
}
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))