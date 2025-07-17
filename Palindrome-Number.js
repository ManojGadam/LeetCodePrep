/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0)return false
    let rev = 0, tmp = x
    while(tmp > 0){
        let l = tmp%10
        rev = rev*10 + l
        tmp = Math.floor(tmp/10)
    }
    return rev == x
};