/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let memo = {};

    function rec(remStr) {
        if (remStr in memo) return memo[remStr];
        if (remStr === \\) return true;

        for (let word of wordDict) {
            if (remStr.startsWith(word)) {
                let newRemStr = remStr.slice(word.length);
                if (rec(newRemStr)) {
                    memo[remStr] = true;
                    return true;
                }
            }
        }

        memo[remStr] = false;
        return false;
    }

    return rec(s);
};