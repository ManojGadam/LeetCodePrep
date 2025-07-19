/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0)return 1
    const rec=(n)=>{
        if(n == 0)return 1
        if(n == 1)return x
        let ret = rec(Math.floor(n/2))
        return n%2==0 ? ret*ret : ret*ret*x
    }
    let ret = rec(Math.abs(n))
    //console.log(ret)
    return n<0? 1/ret : ret
};