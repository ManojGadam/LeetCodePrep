/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0,tmp =Math.abs(x)
    while(tmp > 0){
        let l = tmp%10
        rev = rev*10 + l
        tmp = Math.floor(tmp/10)
    }
    if(rev > Math.pow(2,31)-1)return 0
    return x<0 ? -rev : rev
};