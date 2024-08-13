function countComponents(n, edges) {
    let adjacencyList = {},ret = 0,visit = {},cycle = {}
    function dfs(i){
        if(i in cycle)return
        if(i in visit){
            ret--
            return
            }
        cycle[i] = 1
        for(let node of adjacencyList[i]){
            dfs(node)
        }
        visit[i] = 1
    }

    for(let i=0;i<n;i++){
        adjacencyList[i] = []
    }
    for(let i of edges){
        adjacencyList[i[0]].push(i[1])
    }

    for(let i=0;i<n;i++){
       if(!visit[i]) {
        dfs(i)
        ret++
        cycle = {}
        }
    }
    return ret
}

console.log(countComponents(3,[[0,1],[0,2],[1,2]]))