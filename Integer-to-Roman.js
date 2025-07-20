/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
        1 : "I",
        5 : "V",
        10 : "X",
        50 : "L",
        100 : "C",
        500 : "D",
        1000 : "M"
    }
    let d = 0,res = ""
    if(num in map)return map[num]
    while(num > 0){
        let nn = num%10 * Math.pow(10,d)
        let curr = ""
        if(nn in map)curr = map[nn]
        else{
            let closest = Math.pow(10,d)
            if(num%10 == 4){
                curr = map[closest]+map[5*closest]
                //console.log(curr)
            }
            else if(num%10 == 9){
                curr = map[closest]+map[closest*10]
                //console.log(curr)
            }
            else if(num%10 == 1 || num%10 == 2 || num%10 == 3){
               for(let i=0;i<num%10;i++)curr += map[closest]
            }
            else if(num%10 == 6 || num%10 == 7 || num%10 == 8){
                curr = map[5*closest]
                let c = num%10-5
                for(let i=0;i<c;i++)curr += map[closest]
            }
        }
        res =curr+res
        d++
        num = Math.floor(num/10)
    }
    return res
};