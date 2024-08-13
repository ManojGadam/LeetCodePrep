function validTree(n, edges) {
    let adjacencyList = {},ret = 0,visit = {},cycle = {}
     function dfs(i){
         if(i in cycle)return false
         if(i in visit){
             ret--
             return true
             }
         cycle[i] = 1
         for(let node of adjacencyList[i]){
             if(!dfs(node))return false
         }
         visit[i] = 1
         return true
     }

     for(let i=0;i<n;i++){
         adjacencyList[i] = []
     }
     for(let i of edges){
         adjacencyList[i[0]].push(i[1])
     }

     for(let i=0;i<n;i++){
        if(!visit[i]) {
         if(!dfs(i))return false
         ret++
         cycle = {}
         }
     }
     console.log(ret)
     if(ret!==1)return false
     return true
 }