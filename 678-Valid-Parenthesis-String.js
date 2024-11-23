/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let s1 = [], s2 = []
    for(let i=0;i<s.length;i++){
        if(s[i]==\(\)s1.push(i)
        else if(s[i]==\*\){
           s2.push(i)
        }
        else{
            if(s1.length)s1.pop()
            else if(s2.length){
                s2.pop()
            }
            else return false
        }
    }
    if(s1.length > s2.length)return false
    let j=s1.length-1
    for(let i=s2.length-1;i>=0;i--){
        if(s1[j] && s2[i]<s1[j])return false
        j--
    }
    return true
};