/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    if(isConnected.length<2)return 1
    let adjacencyList = {},visit = {},province = {}
    for(let i=0;i<isConnected.length;i++){
        adjacencyList[i] = []
    }
    for(let i=0;i<isConnected.length;i++){
        for(let j=i+1;j<isConnected[0].length;j++){
           if(isConnected[i][j] == 1) adjacencyList[i].push(j)
        }
    }
    function dfs(i,ind){
        if(i in visit){
            for(let key in province){
            if(ind == key)continue
                if(i in province[key]){
                    province[ind] = {...province[ind],...province[key]}
                    delete province[key]
                    return
                }
            }
            return
        }
        province[ind][i] = 1
        for(let j of adjacencyList[i]){
            dfs(j,ind)
        }
        visit[i] = 1
    }
    //console.log(adjacencyList)
    for(let i=0;i<isConnected.length;i++){
        if(!visit[i]){
            province[i] = {}
            dfs(i,i)
            //if(ret<0)return 1
        }
    }
    return Object.keys(province).length
};