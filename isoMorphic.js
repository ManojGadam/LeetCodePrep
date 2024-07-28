var isIsomorphic = function(s, t) {
    let map=new Map()
    for(let i=0;i<s.length;i++){
        console.log(map.get(s[i]),map.get(t[i]))
        if(map.get(s[i])){
            if(map.get(s[i]) !== t[i])return false
        }
       // else if(map.get(t[i]))if(map.get(t[i]) !== s[i])return false
        else {
            map.set(s[i],t[i])
          // map[s[i]]= t[i]
            }
    }
    return true
};


console.log(isIsomorphic("foo","bar"))