/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    function isPrefixAndSuffix(s1,s2){
        return s1.slice(0,s2.length)==s2 && s1.slice(s1.length-s2.length,s1.length)==s2
    }
    let ret = 0
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            if((words[i].length<=words[j].length) && (isPrefixAndSuffix(words[j],words[i])))ret++
        }
    }
    return ret
};