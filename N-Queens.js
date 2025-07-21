/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const col = {} 
    const pos = {} // r+c is constant
    const neg = {} // r-c is constant
    const ret = []
    const board = []
    for(let i=0;i<n;i++){
        let curr = new Array(n).fill(".")
        board.push(curr)
    }
    function backTrack(r){
        if(r == n){
            let cpy = board.slice()
            let curr = []
            for(let i=0;i<cpy.length;i++){
                curr.push(cpy[i].join(""))
            }
            ret.push(curr)
            return
        }
        for(let c=0;c<n;c++){
            if(c in col || (r+c) in pos || (r-c) in neg)continue
            col[c] = 1
            pos[r+c] = 1
            neg[r-c] = 1
            board[r][c] = "Q"
            backTrack(r+1)
            delete col[c]
            delete pos[r+c]
            delete neg[r-c]
            board[r][c] = "."
        }
    }
    backTrack(0)
    return ret
};