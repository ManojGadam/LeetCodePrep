/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adjacencyList = {},val = {},ret = []
    let returnProbability = 0,cycle= {}
    let ind = 0
    for(let i of equations){
        if(!adjacencyList[i[0]]){
            adjacencyList[i[0]] = []
            val[i[0]] = []
        }
        if(!adjacencyList[i[1]]){
            adjacencyList[i[1]] = []
            val[i[1]] = []
        }
        adjacencyList[i[0]].push(i[1])
        adjacencyList[i[1]].push(i[0])
        val[i[0]].push(values[ind])
        val[i[1]].push(1/values[ind])
        ind++
    }
    function dfs(i,end,value){
        if(i in cycle)return 
        if(i==end)return value
        cycle[i] = 1
        for(let j=0;j<adjacencyList[i].length;j++){
            let retVal = dfs(adjacencyList[i][j],end,value*val[i][j])
            if(retVal)return retVal
        }
    }
    for(let i of queries){
        if(!adjacencyList[i[0]]||!adjacencyList[i[1]]){
            ret.push(-1)
            continue
        }
        let retVal = dfs(i[0],i[1],1)
        if(isNaN(retVal))retVal = -1
        ret.push(retVal)
        cycle = {}
    }
    return ret
};