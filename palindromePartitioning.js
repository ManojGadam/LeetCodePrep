var partition = function(s) {
    if(s.length==1)return [[s]]
    let res = []
    function isPalindrome(l,r){
    while(l>=0 && r<s.length && s[l] == s[r]){
        l--
        r++
    }
    return s.slice(l+1,r)
    }
    const dfs=(i,curr)=>{
        if(i>s.length-1){
            res.push(curr)
            return
            }
        let odd = isPalindrome(i,i)
        let even = isPalindrome(i,i+1)
        if(odd.length == s.length){
            res.push([odd])
            return
        }
        else if(even.length == s.length){
            res.push([even])
            return
        }
        curr.push(odd)
        if(odd.length)dfs(i+1,curr.slice())
        curr.pop()
        curr.push(even)
        if(even.length)dfs(i+1,curr.slice())
    }
    dfs(0,[])
    return res
    //console.log(isPlainDrome("aa"))
};


console.log(partition("efe"))