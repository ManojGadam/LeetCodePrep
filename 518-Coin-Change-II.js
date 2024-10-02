/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let memo={}
    function rec(i,rem){
        if(i>coins.length-1 || rem<0)return 0
        if(rem==0)return 1
        let key = `${i}+${rem}`
        if(key in memo)return memo[key]
        memo[key]=rec(i,rem-coins[i])+rec(i+1,rem)
        return memo[key]
    }
    return rec(0,amount)
};