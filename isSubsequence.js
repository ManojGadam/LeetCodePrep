var isSubsequence = function(s, t) {
    let ind = []
    for(let i=0;i<s.length;s++){
        let found =false
        for(let j=0;j<t.length;j++){
            if(s[i]==t[j]){
                found = true
                ind.push(j)
                break
            }
        }
        if(!found)return false
    }
    return ind.sort() == ind
};

console.log(isSubsequence("axc","ahbgdc"))