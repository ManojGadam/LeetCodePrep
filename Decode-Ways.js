/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dfs=(i,map)=>{
        if(i in map)return map[i]
        if(i == s.length){
            return 1
        }
        if(s[i] == "0")return 0
        let current = 0
        current += dfs(i+1,map)
        if(i+1 < s.length){
        if(parseInt(s[i]+s[i+1]) <10 || parseInt(s[i]+s[i+1]) > 26)return current
        current += dfs(i+2,map)
        }
        map[i] = current
        return current
    }
    return dfs(0,{})
};