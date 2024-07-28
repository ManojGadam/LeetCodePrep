import {
    MaxPriorityQueue,
  } from '@datastructures-js/priority-queue';
  
var leastInterval = function(tasks, n) {
    let heap = new MaxPriorityQueue((interval)=>interval.frequency)
    let ar = {},ret=0
    for(let i of tasks){
        if(i in ar)ar[i]+=1
        else ar[i]=1
    }
    for(let i in ar){
        heap.enqueue({i:i,frequency:ar[i]})
    }
    let arr = [],i = 0
    while(heap.size()){
        let ele = heap.dequeue()
        ele.frequency = ele.frequency-1
        if(ele.frequency)arr.push(ele)
        i++
    if((!heap.size() && arr.length) || (i==n+1 && arr.length)){
            if(i<n+1)ret+=i+1
            else ret+=i
            i = 0
            while(i<arr.length){
                heap.enqueue({frequency:arr[i].frequency,character:arr[i].character})
                i++
            }
            i=0
            arr = []
        }
    }
    return ret+i
};

console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"],1))