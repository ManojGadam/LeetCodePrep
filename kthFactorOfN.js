var kthFactor = function(n, k) {
    let r = Math.floor(k/2),ret =1
    for(let l=2;l<=r;l++){
        if(n%l == 0)ret ++ 
        if(ret == k) return l
    }
    ret ++
    return ret == k? n : -1 
};

console.log(kthFactor(12))