/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l=0,r = s.length-1
    while(l<=r){
        let tmp = s[l]
        s[l] = s[r]
        s[r] = tmp
        l++
        r--
    }
    return s
};