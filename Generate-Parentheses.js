/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [],st = []
    function dfs(oc,cc){
        if(oc == n && cc==n){
            let word = st.join("")
            res.push(word)
        }
        if(oc < n){
            st.push("(")
            dfs(oc+1,cc)
            st.pop()
        }
        if(cc < oc){
            st.push(")")
            dfs(oc,cc+1)
            st.pop()
        }
    }
    dfs(0,0)
    return res
};