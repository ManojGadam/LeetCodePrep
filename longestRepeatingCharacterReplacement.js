var characterReplacement = function(s, k) {
    let l=0,r = 0,map= {},max = 0
    const maxF=()=>{
        let max = 0
        for(let i in map){
            if(map[i]>max)max = map[i]
        }
        return max
    }
    while(r<s.length){
        map[s[r]] = (map[s[r]] || 0)+1
        let windowLength = r-l+1,maxFrequency = maxF()
        if(windowLength-maxFrequency>k){
            if(maxFrequency+k-1 > max)max = maxFrequency+k-1
            l++
            r=l
        }
        r++
    }
    return max
};

console.log(characterReplacement("ABBB",1))