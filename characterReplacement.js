var characterReplacement = function(s, k) {
    if(s.length<2)return s.length
    s = s.split("")
    let k1 = k,res = 1,ind=0,max = 0,char=''
    for(let i=1;i<s.length;i++){
        if(s[i]!==s[i-1]){
            ind=i
            char = s[i]
            if(k1==0){
                if(res>max)max = res
                res=0
                i=ind
                k1=k
                s[i] = char
                continue
            }
            res++
            k1--
            s[i] = s[i-1]
            continue
        }
        res++
    }
    return max>res?max:res 
};

console.log(characterReplacement("AABABBA",1))