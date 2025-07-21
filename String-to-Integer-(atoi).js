/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0,isneg = 0,isPos = 0
    let ret = 0

    //for whitespaces
    while(i<s.length){
        if(s[i] !== " ")break
        i++
    }
    if(s[i] == "-" || s[i] == "+"){
        isneg = s[i] == "-" ?  1 : 0
        i++
    }
 
    //console.log(i)
    for(i;i<s.length;i++){
        let diff = s[i].charCodeAt(0)-"0".charCodeAt(0)
        if(diff<0 || diff>10)break
        ret = ret*Math.pow(10,1)+diff
        //console.log(ret,diff)
    }
    ret = isneg ? -ret : ret 
    //console.log(-Math.pow(2,31))
    if(ret < -Math.pow(2,31))return -Math.pow(2,31)
    if(ret > Math.pow(2,31)-1)return  Math.pow(2,31)-1
    return ret
};