/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let courseMap= {}
    for(let i = 0;i<numCourses;i++){
        courseMap[i] = []
    }
    for(let i of prerequisites){
        courseMap[i[0]].push(i[1])
    }
    let visited = {}
    const dfs=(i)=>{
        if(i in visited)return false
        else if(courseMap[i].length == 0)return true
        visited[i] = 1
        for(let course of courseMap[i]){ 
            if(!dfs(course))return false
        }
        delete visited[i]
        courseMap[i] = []
        return true
    }
    let res = true
    for(let i in courseMap){
      res = res &&  dfs(i)
    }
    return res
};