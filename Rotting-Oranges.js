/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const  m = grid.length, n =grid[0].length,st = []
    let ret = 0,count = 0,oc = 0
    function bfs(st){
        const directions = [[0,1],[0,-1],[1,0],[-1,0]]
        while(st.length){
            const [row,col,time] = st.shift()
            ret = Math.max(ret,time)
            for(let i of directions){
                let r = row+i[0],c = col+i[1]
                if(r<0 || c<0 || r>m-1 || c>n-1 || grid[r][c] == 0 || grid[r][c] == 2)continue
                grid[r][c] = 2
                oc++
                st.push([r,c,time+1])
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] == 2)st.push([i,j,0])
            else if (grid[i][j] == 1)count++
        }
    }
    bfs(st)
    console.log(oc,count)
    return oc == count? ret : -1
};