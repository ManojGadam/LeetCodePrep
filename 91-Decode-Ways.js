/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let ret = [],memo = {}
    const map={}
    for(let i=1;i<27;i++){
        map[i] = String.fromCharCode(64+i)
    }
    function rec(i,str){
        let k = `${i},${str}`
        if(k in memo)return memo[k]
        if(i>s.length-1 || !map[str])return 0
        if(i==s.length-1){
            return 1
        }
        memo[k]=rec(i+1,s[i+1])+rec(i+1,str+s[i+1])
        return memo[k]
    }
   // console.log(ret)
    return rec(0,s[0])
};