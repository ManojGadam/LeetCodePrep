/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let ret = 0,total = 0,curr =0
    for(let i=0;i<gas.length;i++){
        let sum = gas[i]-cost[i]
        curr += sum
        total += sum
        if(curr < 0){
            ret = i+1
            curr = 0
        }
    }
    return total<0 ? -1 :ret
};