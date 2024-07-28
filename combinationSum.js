var combinationSum3 = function(k, n) {
    if(k>n)return []
    let l =k,res = [],n1 = n
    for(let i=9;i>0;i--){
        l=k
        n1 = n
        let r = []
        if(n-i < 1)continue
        l--
        n1 -= i 
        r.push(i)
        for(let j =1;j<i;j++){
            if(n1-j<0 || l<0)break
            l--
            n1-=j
            r.push(j)
            if(l==0 && n1==0){
                res.push(r)
                break
            } 
        }
    }
    return res
};
console.log(combinationSum3(3,9))