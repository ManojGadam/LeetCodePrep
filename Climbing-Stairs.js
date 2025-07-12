/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,map={}) {
    if(n in map)return map[n]
    if(n < 4)return n
    map[n] = climbStairs(n-2,map)+climbStairs(n-1,map)
    return map[n]
};