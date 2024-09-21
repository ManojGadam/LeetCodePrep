/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length)return []
    const res = [],map= {2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z']}
    let part = []
    const dfs=(i)=>{
        if(i>digits.length-1){
            res.push(part.slice().join(\\))
            return
        }
        for(let dig of map[digits[i]]){
            part.push(dig)
            dfs(i+1)
            part.pop()
        }
    }
    dfs(0)
    return res
};