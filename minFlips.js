var minFlips = function(a, b, c) {
    let flips =  0
    a = a.toString(2)
    b = b.toString(2)
    c = c.toString(2)
    let max = Math.max(a.length,b.length,c.length)
    a = a.padStart(max,"0")
    b = b.padStart(max,"0")
    c = c.padStart(max,"0")
    console.log(a,b,c)
    for(let i=0;i<a.length;i++){
        a[i] = parseInt(a[i])
        b[i] = parseInt(b[i])
        c[i] = parseInt(c[i])
        if((a[i]||b[i])!==c[i]){
            if(c[i]){
                a[i] = 1
                flips++
            }
            else{
                a[i]=0
                b[i]=0
                if((a[i] &&!b[i]) ||(b[i]&&!a[i]))flips++
                else flips+=2
            }
        }
    }
    return flips
};

console.log(minFlips(4,2,7))