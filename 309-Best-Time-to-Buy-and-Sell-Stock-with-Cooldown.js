/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2)return 0
    let map = {}
    function dp(i,state){
        let key = i+\\+state
        if(key in map)return map[key]
        if(i>prices.length-1)return 0
        if(state == 0){
            let sell = -prices[i]+dp(i+1,1)
            let cooldown = dp(i+1,0)
            map[key] = Math.max(sell,cooldown)
        }
        else{
            let buy = prices[i]+dp(i+2,0)
            let cooldown = dp(i+1,1)
            map[key] = Math.max(buy,cooldown)
        }
        return map[key]
    }
    return dp(0,0)
};