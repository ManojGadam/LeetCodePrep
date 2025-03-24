/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ret = [], i = 0, j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) ret.push(word1[i++]);
        if (j < word2.length) ret.push(word2[j++]);
    }

    return ret.join('');
};