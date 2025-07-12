/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length,n= board[0].length
    function dfs(i,j,c){
        if(i<0 || j<0 || i>m-1 || j>n-1 || board[i][j] != word[c])return false
        //console.log(i,j,c)
        if(c == word.length-1)return true
        let tmp = board[i][j]
        board[i][j] = "#"
        if(dfs(i+1,j,c+1) == true)return true
        if(dfs(i-1,j,c+1) == true)return true
        if(dfs(i,j+1,c+1) == true)return true
        if(dfs(i,j-1,c+1) == true)return true
        board[i][j] = tmp
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] == word[0]){
                if(dfs(i,j,0) === true){
                    return true
                }
            }
        }
    }
    return false
};