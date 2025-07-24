/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   function rec(i,map){
       // console.log(i)
        if(i in map)return map[i]
        if(i>n)return 0
        if( i == n){
            return 1
        }
        map[i] = rec(i+1,map)+rec(i+2,map)
        return map[i]
   }
  return rec(0,{})
};