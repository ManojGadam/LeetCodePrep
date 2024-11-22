/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==\0\ || num2==\0\)return \0\
    let res = new Array(num1.length+num2.length).fill(0)
    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>-1;j--){
            let pro = (num1.charCodeAt(i)-48)*(num2.charCodeAt(j)-48)
            let carry = Math.floor(pro/10) 
            res[num1.length-1-i+num2.length-1-j] += pro%10
            if(res[num1.length-1-i+num2.length-1-j] > 9){
                carry += Math.floor(res[num1.length-1-i+num2.length-1-j]/10)
                res[num1.length-1-i+num2.length-1-j] = res[num1.length-1-i+num2.length-1-j]%10
            }
            if(carry)res[num1.length-1-i+num2.length-1-j+1] += carry
        }
    }
    res.reverse()
    res = res.join(\\)
    let i=0
    while(res[i]==\0\){
        i++
    }
    return res.slice(i)
};