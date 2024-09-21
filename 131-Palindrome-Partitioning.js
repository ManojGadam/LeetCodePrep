/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [], part = []
    const dfs=(i)=>{
        if(i>s.length-1){
            res.push(part.slice())
            return
        }
        for(let j=i;j<s.length;j++){
            if(isPalindrome(i,j,s)){
                part.push(s.slice(i,j+1))
                dfs(j+1)
                part.pop()
            }
        }
    }
    dfs(0)
    return res
};
const isPalindrome=(left,right,s)=>{
    while(left<right){
        if(s[left]!==s[right])return false
        left++
        right--
    }
    return true
}

