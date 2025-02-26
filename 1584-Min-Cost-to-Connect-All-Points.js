/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const heap = new PriorityQueue((a,b)=>{
        if(a[0]>b[0])return 1
        else return -1
    }),map = {}
    let ret = 0
    heap.enqueue([0,0])
    //console.log(Object.keys(map).length)
    while(heap.size() && Object.keys(map).length<points.length){
        let ele = heap.dequeue()
        if(!map[ele[1]])ret += ele[0]
        else continue
        map[ele[1]] = 1
        for(let i=0;i<points.length;i++){
                if(i in map)continue
                let dist = Math.abs(points[i][0] - points[ele[1]][0]) + Math.abs(points[i][1] - points[ele[1]][1])
                heap.enqueue([dist,i])
        }
    }
    return ret
};