/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let prefix_diff = new Array(s.length+1).fill(0)
    s = [...s]
    for(let shift of shifts){
        prefix_diff[shift[1]+1] += shift[2] ? 1 : -1 
        prefix_diff[shift[0]] += shift[2] ? -1 : 1
    }
    let diff = 0
    for(let i=prefix_diff.length-1;i>=1;i--){
        diff += prefix_diff[i]
        let num = (s[i-1].charCodeAt(0) - 'a'.charCodeAt(0)+ diff)%26
        while(1){
        if(num<0)num = 25+num+1
        else if(num>25) num = (num - 25)
        else  break
        }
        s[i-1] = String.fromCharCode(num+'a'.charCodeAt(0))
    }
    return s.join("")
};