/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let ret = new Array(code.length).fill(0)
    let sum=0,ind = 0
    if(k==0)return ret
    else if(k>0){
        for(let i=1;i<k+1;i++){
            sum += code[i]
        }
        ret[0] = sum
        for(let i=1;i<code.length;i++){
            ind = i+k
            if(i+k>=code.length)ind = i+k-code.length
            ret[i] = sum-code[i]+code[ind]
            sum = ret[i]
        }
    }
    else{
        for(let i=k;i<=-1;i++){
            sum += code.at(i)
        }
        k = Math.abs(k)
        ret[0] = sum
        for(let i=1;i<code.length;i++){
            ret[i] = sum+code[i-1]-code.at(i-k-1)
            sum = ret[i]
        }
    }
    return ret
};