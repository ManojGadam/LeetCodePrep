/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>a[0]-b[0])
    let start = meetings[0],dayScheduled = 0,nl = []
    for(let i=1;i<meetings.length;i++){
        if(meetings[i][0]<=start[1]){
            meetings[i] = [start[0],Math.max(start[1],meetings[i][1])]
        }
        else{
            //nl.push(start)
            dayScheduled += start[1]-start[0]+1
        }
        start = meetings[i]
    }
    if(start)dayScheduled += start[1]-start[0]+1
   
    return days-dayScheduled
};