/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited={}
    visited[0] = 1
    function dfs(node){
        if(node in visited)return
        visited[node] = 1
        //noOfKeys++
        for(let i of rooms[node]){
            dfs(i)
        }
    }
    for(let i of rooms[0]){
        dfs(i)
    }
        //console.log(noOfKeys)

    return Object.keys(visited).length === rooms.length
};