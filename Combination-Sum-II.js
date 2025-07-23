/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ret = []
    candidates.sort((a,b)=>a-b)
    function rec(start,st,sum){
        if(sum > target)return
        if(sum == target){
            ret.push(st.slice())
            return
        }
        for(let i=start;i<candidates.length;i++){
            if(i>start && (candidates[i] == candidates[i-1]))continue
            st.push(candidates[i])
            rec(i+1,st,sum+candidates[i])
            st.pop()
        }
    }
    rec(0,[],0)
    return ret
};