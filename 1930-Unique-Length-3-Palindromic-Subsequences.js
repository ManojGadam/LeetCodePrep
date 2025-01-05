/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let map = {}
    for(let i =0;i<s.length;i++){
        if(s[i] in map)map[s[i]].push(i)
        else map[s[i]] = [i]
    }
    let ret = 0
    for(let i in map){
        let arr = map[i]
        if(arr.length<2)continue
        let st = arr[0], e = arr[arr.length-1],nm={}
        for(let j=st+1;j<e;j++){
            if(s[j] in nm)continue
            nm[s[j]] = j
            ret++
        }
    }
    return ret
};