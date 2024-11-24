/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let memo = new Array(text1.length+1).fill(0).map(x=> new Array(text2.length+1).fill(0))
    for(let i=text1.length-1;i>=0;i--){
        for(let j=text2.length-1;j>=0;j--){
            memo[i][j] = text1[i] == text2[j] ? 1+memo[i+1][j+1] : Math.max(memo[i+1][j],memo[i][j+1])
        }
    }
    return memo[0][0]
};