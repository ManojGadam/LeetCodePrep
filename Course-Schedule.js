/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {},visited = {}
    for(let pre of prerequisites){
        if(adj[pre[0]])adj[pre[0]].push(pre[1])
        else adj[pre[0]] = [pre[1]]
    }
    function dfs(node){
        if(!adj[node] || !adj[node].length)return true
        if(visited[node])return false
        visited[node] = 1
        for(let neigh of adj[node]){
           if(!dfs(neigh))return false
        }
        delete visited[node]
        adj[node] = {}
        return true
    }
    for(let i=0;i<numCourses;i++){
        if(!dfs(i))return false
    }
    return true
};