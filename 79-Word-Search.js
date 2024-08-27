/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    function dfs(r,c,j){
        if(j == word.length)return true
        if(r<0 || c<0 || r>=m || c>=n || board[r][c]!==word[j])return false
        let tmp = board[r][c]
        board[r][c] = \\\0\
        let res = (dfs(r+1,c,j+1)||dfs(r-1,c,j+1)||dfs(r,c+1,j+1)||dfs(r,c-1,j+1))
        board[r][c] = tmp
        return res
}
   for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(dfs(i,j,0))return true
    }
   }
   return false
};

