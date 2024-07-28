var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])
    let start = intervals[0],ret = []
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]<=start[1]){
            start = [start[0],Math.max(start[1],intervals[i][1])]
        }
        else {
            ret.push(start)
            start = intervals[i]
            }
    }
    ret.push(start)
    return ret
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))