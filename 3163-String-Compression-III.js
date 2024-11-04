/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
   let ret = [], n =word.length
   for(let i=0;i<word.length;){
    let char = word[i]
    let  k = i+9
    let count = 0
    while(i<k && i<n && word[i] == char){
        i++
        count++
    }
    ret.push(count+char)
   }
    return ret.join("");
};