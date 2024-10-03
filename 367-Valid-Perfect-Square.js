/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i=1;i<Math.floor(num/2)+2;i++){
        if(i*i == num)return true
        else if(i*i > num)return false
    }
    return false
};