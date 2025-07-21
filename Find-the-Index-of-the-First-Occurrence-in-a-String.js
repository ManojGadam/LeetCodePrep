/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length)return -1
    for(let i=0;i<haystack.length;i++){
        let j = 0
        while(i+j < haystack.length && haystack[i+j] == needle[j]){
            j++
        }
        if (j === needle.length) return i;
    }
    return -1
};