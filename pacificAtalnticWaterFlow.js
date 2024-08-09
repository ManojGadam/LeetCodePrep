var pacificAtlantic = function(heights) {
    let res =[]
    for(let i=0;i<heights.length;i++){
        for(let j=0;j<heights[0].length;j++){
             if(dfs(i,j,heights))res.push([i,j])
        }
    }
    return res
};

function dfs(i,j,heights){
    let directions = [[1,0],[-1,0],[0,1],[0,-1]],st=[[i,j]],p=false,at = false,visited = {}
    while(st.length){
        let [row,col] = st.pop()
        if(row==0 || col==0)p=true
        if(row==heights.length-1 || col==heights[0].length-1)at = true
        if(p && at)return true
        visited[[row,col]] = 1
        for(let dir of directions){
            let r = row+dir[0],c = col+dir[1]
            if(r>-1 && r<heights.length && c>-1 && c<heights[0].length && heights[row][col]>=heights[r][c] && !visited[[r,c]]){
                    st.push([r,c])
            }
        }
    }
    return false
}