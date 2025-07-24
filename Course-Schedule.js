/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {}
    let inDegree = new Array(numCourses).fill(0)
    for(let [course,pre] of prerequisites){
        if(pre in adj)adj[pre].push(course)
        else adj[pre] = [course]
        inDegree[course]++
    }
    let queue = []
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i]==0)queue.push(i)
    }
    let count = 0
    while(queue.length){
        let ele = queue.shift()
        count++
        for(let neigh of (adj[ele] || [])){
            inDegree[neigh]--
            if(inDegree[neigh] == 0)queue.push(neigh)
        }
    }
    
    return count == numCourses
};