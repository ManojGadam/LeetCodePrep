/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m =board.length, n = board[0].length
    function dfs(i,j){
        if(i<0 || j<0 || i>m-1 || j>n-1 ||board[i][j] == "X" || board[i][j] == "V")return
        board[i][j] = "V"
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
    for(let c=0;c<n;c++){
        dfs(0,c)
        dfs(m-1,c)
    }
    for(let r=0;r<m;r++){
        dfs(r,0)
        dfs(r,n-1)
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] == "O")board[i][j] = "X"
            else if(board[i][j] == "V")board[i][j] = "O"
        }
    }
};