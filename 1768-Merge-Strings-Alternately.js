/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ret = "",i=0
    for(i=0;i<word1.length;i++){
        ret += word1[i]
        if(word2[i])ret+=word2[i]
    }
    if(word2[i])ret+=word2.substring(i)
    return ret
};