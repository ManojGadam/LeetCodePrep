/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
   //n = Math.abs(n)
   if(n<1)return false
   if(n<7)return true
    while(n>0){
        if(n%5==0){
            n = n/5
        }
        else if(n%3 == 0){
            n = n/3
        }
        else if(n%2==0){
            n = n/2
        }
        else{
            if(n==1)return true
            return false
        }
    }
    return true
};