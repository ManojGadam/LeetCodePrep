/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let ret = 0
    function check(n){
       if(n.length%2 != 0)return
       const halfLength = n.length/2
       let first = 0,second = 0
       for(let i=0;i<halfLength;i++){
        first += parseInt(n[i])
        second += parseInt(n[halfLength+i]) 
       }
       //console.log(first,second)
       if(first == second)ret++
    }
    for(let n = low;n<high+1;n++){
        check(`${n}`)
    }
    return ret
};