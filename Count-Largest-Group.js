/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    function addDigits(num){
        let ret = 0
        while(num>0){
            ret += num%10
            num = Math.floor(num/10)
        }
        return ret
    }
    const map = {},map1 = {}
    for(let i=1;i<n+1;i++){
        let s = addDigits(i)
        map[s] = (map[s] || 0)+1
    }
    for(let val of Object.values(map)){
        map1[val] = (map1[val] || 0) + 1
    }
    let ret = Object.keys(map1)[Object.keys(map1).length-1]
    return map1[ret]
};