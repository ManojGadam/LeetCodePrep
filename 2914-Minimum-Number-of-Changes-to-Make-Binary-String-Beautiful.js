/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let ret = 0
    for(let i=0;i<s.length;i=i+2){
        if(s[i]!==s[i+1])ret++
    }
    return ret
};