/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const map  = {},visit = {},heap = new PriorityQueue((a,b)=>{
        if(a[0]>b[0])return 1
        else return -1
    })
    for(let i=1;i<=n;i++)map[i]=[]
    for(let [s,d,w] of times)map[s].push([w,d])
    heap.enqueue([0,k])
    let ret = 0
    while(heap.size()>0){
        let [t1,n1] = heap.dequeue()
        if(visit[n1])continue
        visit[n1] = 1
        ret = Math.max(ret,t1)
        if(!map[n1])continue
         for(let [t2,n2] of map[n1]){
            if(!visit[n2])heap.enqueue([t1+t2,n2])
        }
    }
    return Object.keys(visit).length == n ? ret : -1
};