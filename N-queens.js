function is_ValidState(state,n){
    return state.length === n
}
function get_candidates(state,n){
    if(!state.length){
        let ret = []
        for(let i=0;i<n;i++){
            ret.push(i)
        }
        return ret
    }
    let candidates = new Set()
    let len = state.length
    for(let i=0;i<n;i++){
        candidates.add(i)
    }
    for(let i=0;i<state.length;i++){
        candidates.delete(state[i])
        let dist = len-i
        candidates.delete(state[i]-dist)
        candidates.delete(state[i]+dist)
    }
    return candidates
}
function search(state,solutions,n){
    if(is_ValidState(state,n)){
        solutions.push(makeString(state.slice(),n))
        return
    }
    for(let i of get_candidates(state,n)){
        state.push(i)
        search(state,solutions,n)
        state.pop(i)
    }
}
function makeString(state,n){
    let ret = []
    for(let i of state){
       let curr = new Array(n).fill(".")
       curr[i] = 'Q'
       ret.push(curr.join(""))
    }
    return ret
}
var solveNQueens = function(n) {
    let solutions = []
    let state = []
    search(state,solutions,n)
    return solutions
};

console.log(solveNQueens(4))