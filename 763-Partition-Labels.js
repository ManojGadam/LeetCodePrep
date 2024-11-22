/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let le = new Map(),res = []
    for(let i=0;i<s.length;i++){
        //if(!le.get(s[i]))fe.set(s[i],i)
        le.set(s[i],i)
    }
    let currMax = [0,le.get(s[0])]
    for(let i=0;i<s.length;i++){
        if(i<currMax[1]){
            //console.log(le.get(s[i]),s[i])
            currMax[1] = Math.max(currMax[1],le.get(s[i]))
        }
        else if(i==currMax[1]){
            res.push(i-currMax[0]+1)
            if(i+1<s.length)currMax = [i+1,le.get(s[i+1])]
        }
        else{
            currMax = [i,le.get(s[i])]
        }
    }
    return res
};