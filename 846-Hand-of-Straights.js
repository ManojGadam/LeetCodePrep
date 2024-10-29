/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
   let map = {}
   for(let i of hand){
    map[i] = (map[i] || 0)+1
   }
   for(let i in map){
        let num = parseInt(i)
        while(map[num]){
            map[num] -=1
            if(!map[num])delete map[num]
            for(let i=1;i<groupSize;i++){
                if(!map[num+i])return false
                map[num+i] -= 1
                if(!map[num+i])delete map[num+i]
            }
        }
   }
   //console.log(map)
   return Object.keys(map).length===0
};