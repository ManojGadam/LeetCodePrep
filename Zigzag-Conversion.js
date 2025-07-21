/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1)return s
    let ret = ""
    for(let r=0;r<numRows;r++){
        let inc = 2*(numRows-1)
        for(let j=r;j<s.length;j+=inc){
            ret += s[j]
            if(r>0 && r<numRows-1 && j+inc-2*r<s.length){
                ret+= s[j+inc-2*r]
            }
        }
    }
    return ret
};