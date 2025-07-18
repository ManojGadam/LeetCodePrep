/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const m=board.length,n = board[0].length
    let m1 = {},m2 = {},m3 = {}
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
           // console.log(m1,m2)
            if(board[i][j] in m1 || board[j][i] in m2)return false
            if(board[i][j] !== ".")m1[board[i][j]] = 1
            if(board[j][i] !== ".")m2[board[j][i]] = 1
        }
        m1={}
        m2={}
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] == ".")continue
            if(j<3){
                if(board[i][j] in m1)return false
                m1[board[i][j]]=1
            }
            else if(j<6){
                if(board[i][j] in m2)return false
                m2[board[i][j]] = 1
            }
            else{
                if(board[i][j] in m3)return false
                 m3[board[i][j]] = 1
            }
        }
        if(i==2 || i==5 || i==8){
            m1={}
            m2={}
            m3={}
        }
    }
    return true
};