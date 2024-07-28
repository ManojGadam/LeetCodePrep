var addBinary = function(a, b) {
    if(a.length>b.length) b =b.padStart(a.length, '0')
    else a= a.padStart(b.length,"0")
    let res=new Array(a.length+1),carry=0
    for(let i=a.length-1;i>=0;i--){
        let bit= a[i]^b[i]^carry
        if(bit==0 && a[i]==1)carry=1
        else carry=0
        res[i] = bit
    }
    res[0] = carry
    console.log(res)
 };

 console.log(addBinary("11","1"))