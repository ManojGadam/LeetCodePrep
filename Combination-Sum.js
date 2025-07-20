/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ret = []
    function dfs(sum,curr,ind){
        if(sum < 0)return false
        if(sum == 0){
            ret.push(curr.slice())
            return true
        }
        for(let i=ind;i<candidates.length;i++){
            curr.push(candidates[i])
            dfs(sum-candidates[i],curr,i)
            curr.pop()
        }
    }
    dfs(target,[],0)
    return ret
};  