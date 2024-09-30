/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let arr = new Array(n+1).fill(0)
    arr[1] = \1\
    arr[2] = \11\
    const RLE=(num)=>{
        num += \ \
        let len = 1,ret = \\
        for(let i=1;i<num.length;i++){
            if(num[i]==num[i-1])len++
            else{
                ret += `${len}${num[i-1]}`
                len = 1
            }
        }
        return ret
    }
    for(let i=3;i<n+1;i++){
        arr[i] = RLE(arr[i-1])
    }
    return arr[n]
};