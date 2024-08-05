var solve = function(board) {
    function onBorder(i,j){
        return i==0 || j==0 || i== board.length-1 || j== board[0].length-1
    }
    let st = [],oSt = [],map ={}

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] == 'O'){
               if(onBorder(i,j))st.push([i,j])
               else oSt.push([i,j])
            }
        }
    }
    while(st.length){
      let queue = multiBFS(st,board,map)
      st = queue
    }
    for(let i of oSt){
        if([i[0],i[1]] in map)continue
        board[i[0]][i[1]] = "X"
    }
};

function multiBFS(st,board,map){
    let directions= [[0,1],[0,-1],[1,0],[-1,0]],queue = []
    while(st.length){
        const [row,col] = st.pop()
        map[[row,col]] = 100
        for(let i of directions){
            let r = row+i[0],c = col+i[1]
            if(r>-1 && r<board.length && c>-1 && c<board[0].length && board[r][c] == 'O' && !map[[r,c]]){
                queue.push([r,c])
            }
        }
    }
    return queue
}


console.log(solve([["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","X","O","X","O","O","O","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]))