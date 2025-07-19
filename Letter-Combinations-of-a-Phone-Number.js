/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2:['a','b','c'],
        3: ['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:["m","n","o"],
        7:["p","q","r","s"],
        8:["t","u","v"],
        9:["w","x","y","z"]
    }
    if(digits.length == 0)return []
    if(digits.length < 2)return map[digits]
    let f = map[digits[0]], s = map[digits[1]],ret = []
    function recur(i,j){
        if(i == f.length-1 && j==s.length)return
        if(j==s.length){
            i++
            j=0
        }
        ret.push(f[i]+s[j])
        //console.log(ret,i,j)
        recur(i,j+1)
    }
    for(let i=1;i<digits.length;i++){
       // console.log(i)
        ret = []
        s = map[digits[i]]
        recur(0,0)
        f = ret
    }
    return ret
};