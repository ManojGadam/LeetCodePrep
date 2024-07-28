var countSubstrings = function(s) {
    const res = []
    const dfs = (i,curr) =>{
        if(i>=s.length)return
        curr.push(s[i])
        let palin = isPalindrome(curr)
         //if(!palin)return
         if(palin)res.push(curr.slice())
        dfs(i+1,curr)
        curr.pop()
        dfs(i+1,curr)
    }
    dfs(0,[])
    return res
};

const isPalindrome = (curr) =>{
    if(!curr.length)return false
    for(let i=0;i<curr.length;i++){
        if(curr[i]!==curr[curr.length-1-i])return false
    }
    return true
}

console.log(countSubstrings("aaa"))