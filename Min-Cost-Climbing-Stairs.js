/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    function rec(i,map){
        if(i in map)return map[i]
        if(i > cost.length-1){
            return 0
        }
        map[i] = cost[i]+Math.min(rec(i+1,map),rec(i+2,map))
        return map[i]
    }
    return Math.min(rec(0,{}),rec(1,{}))
};