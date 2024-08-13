var findOrder = function(numCourses, prerequisites) {
    let courses = {},ret = new Array(numCourses).fill(0)
    const dfs=(pos,arr,start,visited = {})=>{
        visited[pos] = 1
        for(let i of courses[pos]){
            if(!visited[i]){if(dfs(i,arr,start,visited) == false)return false}
            else if(i === start) return false
        }
        arr.push(pos)
    }

    for(let i=0;i<numCourses;i++){
        courses[i] = []
    }
    for(let i of prerequisites){
        courses[i[1]].push(i[0])
    }
    let thisVisited = [],ind = numCourses-1
    for(let at=0;at<numCourses;at++){
        //if(!visited[at]){
            if(dfs(at,thisVisited,at) === false)return []
        //}
    }
    for(let i of thisVisited){
        ret[ind] = i
        ind--
    }
    return ret
};


console.log(findOrder(4,[[2,0],[1,0],[3,1],[3,2],[1,3]]))