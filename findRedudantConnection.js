var findRedundantConnection = function(edges) {
    let adjacencyList = {},cycle = {}
    function bfs(i){
       let st = [[0,i]]
       while(st.length){
        let [prev,curr] = st.shift()
        if(curr in cycle)return [prev,curr]
        cycle[curr] = 1
        for(let node of adjacencyList[curr]){
            st.push([curr,node])
        }
       }
    }
    for(let i=1;i<edges.length+1;i++){
        adjacencyList[i] = []
    }
    for(let i of edges){
        adjacencyList[i[0]].push(i[1])
    }
    console.log(bfs(1))
};

console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]))