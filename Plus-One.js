/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    for(let i = digits.length-1;i>=0;i--){
        let num = digits[i] + carry
        if(num > 9){
            carry = 1
            digits[i] = num%10
        }else{
            carry = 0
            digits[i] = num
        }
    }
    if(carry)digits.unshift(carry)
    return digits
};