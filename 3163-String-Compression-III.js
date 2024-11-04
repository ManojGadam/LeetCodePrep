/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let ret = [] ,count = 1
    for(let i=0;i<word.length;i++){
        while(i<word.length && word[i]==word[i+1]){
            i++
            count++
            if(count > 8){
                ret.push(count+word[i])
                count = 1
                i++
            }
        }
        if(i>word.length-1)break
        ret.push(count+word[i])
        count = 1
    }
    return ret.join("")
};