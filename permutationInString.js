var checkInclusion = function(s1, s2) {
    let m1 = convertToHash(s1,0,s1.length-1) 
    
    
    for(let i=0;i<s2.length-s1.length+1;i++){
        //let sub = s2.slice(i, i + s1.length)
        if(convertToHash(s2,i, i+s1.length) == m1)return true
    }
    return false
};

const convertToHash = (s,start,end) =>{
    let m1 = new Array(26).fill(0)
    console.log("s",start,end)
    for(let i=start;i<end;i++){
    console.log(i)
        m1[s[i].charCodeAt(0)-97] += 1
    }
    return m1.join("")
}

console.log(checkInclusion("ab","eidbaooo"))