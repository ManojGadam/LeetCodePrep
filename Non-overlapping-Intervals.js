/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0] == b[0])return a[1]-b[1]
        else return a[0]-b[0]
    })
    let s = intervals[0],ret = 0
    for(let i=1;i<intervals.length;i++){
        if(s[1]>intervals[i][0]){
            if(s[1]>intervals[i][1])s = intervals[i]
            ret++
        }else{
            s = intervals[i]
        }
    }
    return ret
};