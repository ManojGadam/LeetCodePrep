/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a,b)=>a[0]-b[0])
    let prevMax = 0,ret = []
    for(let i of items){
        prevMax = Math.max(prevMax,i[1])
        i.push(prevMax)
    }
    for(let i of queries){
        let s=0,e = items.length-1,mid = 0,f = false
        while(s<=e){
            mid = Math.floor((s+e)/2)
            if(items[mid][0] == i){
                 while(mid<items.length-1 && items[mid][0] == items[mid+1][0]){
                    mid++
                 }   
                 ret.push(items[mid][2])
                 f = true
                 break
                 
            }
            else if(i < items[mid][0])e = mid-1
            else s= mid+1
        }
        if(!f){
            if(i< items[mid][0]){
                if(mid==0)ret.push(0)
                else ret.push(items[mid-1][2])
            }
            else ret.push(items[mid][2])
        }
    }
    return ret
};