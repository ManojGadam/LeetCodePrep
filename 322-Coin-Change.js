/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo={}
    const rec=(i,rem)=>{
        if(i>coins.length-1 || rem<0)return Infinity
        if(rem == 0)return 0
        const key = `${i}+${rem}`;
        if(key in memo)return memo[key]
        memo[key] = Math.min(1+rec(i,rem-coins[i]), rec(i+1,rem))
        return memo[key]
    }
    const ret = rec(0,amount)
    return ret == Infinity ? -1 : ret
};