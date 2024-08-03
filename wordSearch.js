var exist = function(board, word) {
    let st = []
   for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
        if(board[i][j] == word[0])st.push([i,j])
    }
   }
   i=1
   while(st.length){
    let queue = dfs(board,st,word[i])
    st = queue
    if(i == word.length-1 && st.length) return true
    i++
   }
   return false
};

function dfs(board,st,curr){
    let directions = [[1,0],[-1,0],[0,1],[0,-1]],queue = []
    while(st.length){
        const [row,col] = st.pop()
        for(let i of directions){
            let r = row+i[0],c = col+i[1]
            if(r>-1 && r<board.length && c>-1 && c<board[0].length)console.log(board[r][c],curr)
            if(r>-1 && r<board.length && c>-1 && c<board[0].length && board[r][c] == curr){
                board[r][c] = 1
                queue.push([r,c])
            }
        }
    }
    return queue
}

console.log(exist([["a","b"]],"aba"))