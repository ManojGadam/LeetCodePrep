var canCompleteCircuit = function(gas, cost) {
    let starting = []
    for(let i=0;i<gas.length;i++){
        if(gas[i] >= cost[i])starting.push(i)
    }
    for(let i of starting)
    {
        let currGas = gas[i]
        let reqInd = i+1,currInd = reqInd
        while(reqInd !== i){
            currInd = reqInd
            if(reqInd > gas.length-1) reqInd = gas.length-reqInd
            if(currGas < cost[currInd])break
            currGas = currGas - cost[currInd] + gas[reqInd]  
            reqInd++
        }
        if(currGas >= cost[currInd])return i 
    }
    return -1
};

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))