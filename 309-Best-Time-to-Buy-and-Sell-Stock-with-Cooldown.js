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
        if(i>prices.length-1 || (i==prices.length-1 && state==0))return 0
        if(state == 0){
            map[key] = Math.max(-prices[i]+dp(i+1,1),dp(i+1,0))
        }
        else{
            map[key] = Math.max(prices[i]+dp(i+2,0),dp(i+1,1))
        }
        return map[key]
    }
    return dp(0,0)
};