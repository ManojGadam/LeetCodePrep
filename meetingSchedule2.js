function minMeetingRooms(intervals) {
    let start = [],end = []
    for(let i of intervals){
        start.push(i.start)
        end.push(e.end)
    }
    start.sort((a,b)=>a-b)
    end.sort((a,b)=>a-b)
    let i = 0,j = 0,max=0,curr = 0
    while(i<start.length){
        if(start[i]<end[j]){
            curr++
            i++
        }
        else{
            curr--
            j++
        }
        max = Math.max(max,curr)
    }
    return max
}

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const intervals = [[0,30],[5,25],[10,20],[15,18],[18,22],[23,30],[30,40],[35,45],[40,50],[45,55],[50,60],[55,65],[60,70],[65,75],[70,80],[75,85],[80,90],[85,95],[90,100]]
for(let i=0;i<intervals.length;i++){
    intervals[i] = new Interval(intervals[i][0],intervals[i][1])
}

console.log(minMeetingRooms(intervals))