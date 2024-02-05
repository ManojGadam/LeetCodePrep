var countBits = function(n) {
    let ret = [0]
    for(let i=1;i<n+1;i++){
        if(i%2 == 0){
           if(Math.log(i)/Math.log(2) % 1 ===0){
               ret[i] = 1
           }
           else{
               ret[i] = ret[i-2] + 1
           }
        }
        else{
            ret[i] = ret[i-1]+1
        }
    }
    return ret
};

console.log(countBits(16))